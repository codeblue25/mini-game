import { db } from "@/db";

export async function createUser(nickname: string) {
  const sql = `
    INSERT INTO users (nickname, created_at)
    VALUES ($1, NOW())
    RETURNING id, nickname, created_at
  `;
  const { rows } = await db.query(sql, [nickname]);
  return rows[0];
}
