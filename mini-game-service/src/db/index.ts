import { Pool } from "pg";

export const db = new Pool({ connectionString: process.env.DATABASE_URL });

export async function ensureDb() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      nickname VARCHAR(50) UNIQUE NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `);
}
