import pool from "./pool.js";
import { QueryResultRow } from "pg";
import { getMessageTimestamp, getMessageDate } from "../utils/timestamp.js";

async function getAllMessages() {
    const result = await pool.query("SELECT *, added AT TIME ZONE 'UTC' AS added_utc FROM messages");
    const rows = result.rows.map((row: QueryResultRow) => {
        row.added = getMessageTimestamp(row.added_utc);
        row.date = getMessageDate(row.date);
        return row;
    });

    return rows;
}

async function getMessage(id: number) {
    const result = await pool.query("SELECT *, added AT TIME ZONE 'UTC' AS added_utc FROM messages WHERE id = $1", [id]);
    const row: QueryResultRow = result.rows[0];
    if (row) {
        row.added = getMessageTimestamp(row.added_utc);
        row.date = getMessageDate(row.date);
    }
    return row;
}

async function createMessage(text: string, user: string) {
    await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [text, user]);
}

export {
    getAllMessages,
    getMessage,
    createMessage
}