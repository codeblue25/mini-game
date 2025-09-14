import { Request, Response, NextFunction } from "express";
import { createUser } from "@/services/user.service";

export async function createUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { nickname } = req.body as { nickname: string };
    const user = await createUser(nickname);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}
