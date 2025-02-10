#! /usr/bin/env node

import "dotenv/config";
import pg from "pg";

const { Client } = pg;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT NOT NULL,
    "user" VARCHAR(200) NOT NULL,
    added TIMESTAMP NOT NULL DEFAULT NOW(),
    date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO messages(text, "user")
VALUES
    ('Hi there!', 'Blue'),
    ('Hello World!', 'Aayush');
`;

async function main() {
    console.log("Seeding...");
    const client = new Client({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_DATABASE,
        ssl: {
            rejectUnauthorized: true,
            ca: process.env.DB_CA,
        }
    });
    client.connect((err) => {
        if (err) throw err;
        client.query(SQL, (err, result) => {
            if (err) throw err;
            console.log(result.rows);
            client.end((err) => {
                if (err) throw err;
            });
        });
    });
    console.log("Done!");
}

main();