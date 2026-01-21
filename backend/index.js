import pool from "./db/config.js";
import express from "express";
import cors from "cors";
import usersRouter from "./router.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);

async function start() {
  try {
    await pool.query("SELECT 1");
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("DB connection failed");
    console.error(err.message);
    process.exit(1);
  }
}

start();
