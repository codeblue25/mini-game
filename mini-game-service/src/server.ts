import "dotenv/config";
import app from "@/app";

const PORT = Number(process.env.PORT || 3001);
const HOST = process.env.HOST || "0.0.0.0";

async function main() {
  app.listen(PORT, HOST, () => {
    console.log(`Mini Game Service listening at http://localhost:${PORT}`);
  });
}

main().catch((e) => {
  console.error("Fatal bootstrap error:", e);
  process.exit(1);
});
