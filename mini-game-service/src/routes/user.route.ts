import { Router } from "express";
import { db } from "@/db";

const router = Router();

router.post("/", async (req, res) => {
  const raw = req.body?.nickname;
  const nickname = typeof raw === "string" ? raw.trim() : "";
  if (!nickname) return res.status(400).json({ error: "nickname is required" });

  try {
    const result = await db.query(
      `INSERT INTO users (nickname) VALUES ($1)
       RETURNING id, nickname, created_at`,
      [nickname]
    );
    const row = result.rows[0];
    res.status(201).json({
      id: String(row.id),
      nickname: row.nickname,
      createdAt: row.created_at.toISOString(),
    });
  } catch (err: any) {
    if (err?.code === "23505")
      return res.status(409).json({ error: "nickname already exists" });
    console.error("POST /user error:", err);
    res.status(500).json({ error: "internal server error" });
  }
});

export default router;
