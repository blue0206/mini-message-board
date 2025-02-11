import pool from "./pool.js";
import { QueryResultRow } from "pg";
import { getMessageDate } from "../utils/timestamp.js";

async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages");
  const rows: QueryResultRow[] = result.rows.map((row) => {
    row.date = getMessageDate(row.date);
    return row;
  });
  return rows;
}

async function getMessage(id: number) {
  const result = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  const row: QueryResultRow = result.rows[0];
  row.date = getMessageDate(row.date);
  return row;
}

async function createMessage(text: string, user: string) {
  await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [
    text,
    user,
  ]);
}

export { getAllMessages, getMessage, createMessage };
