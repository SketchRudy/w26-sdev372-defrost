import pool from "./db/config.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

(function enableCors() {
  app.use(cors());
})();

(async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM defrost_users");
    console.log("DB connected:", rows);
  } catch (err) {
    console.error("DB connection failed");
    console.error(err.message);
    process.exit(1);
  }
})();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post("/users", async (req, res) => {
  const phone = cleanPhoneNumber(req.body?.phoneNumber || req.body?.phone_number);

  if (!phone) {
    return res.status(400).json({ error: "Provide a numeric phoneNumber with at least 10 digits" });
  }

  try {
    const [result] = await pool.execute(
      `INSERT INTO defrost_users (phone_number) VALUES (?)`,
      [phone]
    );
    console.log(`Inserted phone ${phone} (id ${result.insertId ?? "unknown"})`);
    return res.status(201).json({ id: result.insertId, phoneNumber: phone });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "Phone number already registered" });
    }
    console.error("saving user failed", err);
    return res.status(500).json({ error: "Unable to save user" });
  }
});

function cleanPhoneNumber(input) {
  if (typeof input !== "string") return null;
  const digits = input.replace(/\D/g, "");
  return digits.length >= 10 ? digits : null;
}
