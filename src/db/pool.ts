import pg from "pg";

const { Pool } = pg;

export default new Pool({
    connectionString: process.env.DATABASE_CONNECTION_URI
});