import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRouter from "@/routes/user.route";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => res.send("Hello from Mini Game Service! (TS)"));
app.use("/user", userRouter);

// 404
app.use((req, res) =>
  res.status(404).json({ error: "not found", path: req.originalUrl })
);

// 공통 에러 핸들러
app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error("Unhandled error:", err);
    res
      .status(err?.status ?? 500)
      .json({ error: err?.message ?? "internal server error" });
  }
);

export default app;
