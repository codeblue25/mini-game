console.log("Hello, World!");

const pg = require("pg");

const dbconfig = {
  host: "localhost",
  user: "postgres",
  password: "sychoi1031!",
  database: "postgres",
  port: "5432",
};

const client = new pg.Client(dbconfig);

client
  .connect()
  .then(() => console.log("연결 성공"))
  .catch((err) => console.error("연결 실패", err));
