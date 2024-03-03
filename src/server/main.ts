import express from "express";
import ViteExpress from "vite-express";
import mysql from "mysql2";
import dotenv from "dotenv";
import { request } from "http";

dotenv.config();
const app = express();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is on http://localhost:3000...")
);

app.get("/media", async (request, response) => {
  const media = await GetMediaData();
  response.send(media);
  console.log("Success");
});

async function GetMediaData() {
  const result = await pool.query("SELECT * FROM media");
  return result[0];
}

app.get("/filter/", async (request, response) => {
  const filters = request.query;
  const page = request.query.page;

  const media = await GetFilteredData([""], page);
  response.send(media);
});

async function GetFilteredData(params: [""], page: any) {
  const result = await pool.query(
    "SELECT * FROM media WHERE FIND_IN_SET('kalin', people)"
  );
  return result[0];
}
