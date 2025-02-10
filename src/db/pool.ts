import pg from "pg";

const { Pool } = pg;

export default new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.DB_CA,
    }
});