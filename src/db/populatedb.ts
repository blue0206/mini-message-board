#! /usr/bin/env node

import pg from "pg";

const { Client } = pg;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT NOT NULL,
    user VARCHAR(200) NOT NULL,
    added TIMESTAMP NOT NULL DEFAULT NOW(),
    date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO messages (text, user)
VALUES
    ('Hi there!', 'Blue'),
    ('Hello World!', 'Aayush');
`;

async function main() {
    console.log("Seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_CONNECTION_URI
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done!");
}

main();