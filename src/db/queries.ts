import pool from "./pool.js";
import { QueryResultRow } from "pg";

async function getAllMessages() {
    const result = await pool.query("SELECT * FROM messages");
    const rows: QueryResultRow[] = result.rows;
    return rows;
}

export {
    getAllMessages
}