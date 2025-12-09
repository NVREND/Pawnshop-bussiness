import pg from "pg";

export const db = new pg.Client({
  user: "postgres",
  password: "123",
  host: "localhost",
  port: 5432,
  database: "motorprice"
});

db.connect();
