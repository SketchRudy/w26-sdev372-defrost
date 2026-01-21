import pool from "./db/config.js";

const PHONE_REGEX = /^\d{10,15}$/;

function cleanPhoneNumber(input) {
  if (typeof input !== "string") return null;
  return input.replace(/\D/g, "");
}

export async function createUser(req, res) {
  const phoneInput = req.body?.phoneNumber || req.body?.phone_number;
  const phone = cleanPhoneNumber(phoneInput);

  if (!phone || !PHONE_REGEX.test(phone)) {
    return res.status(400).json({ error: "Provide a phone number containing only 10 to 15 digits" });
  }

  try {
    const [result] = await pool.execute(
      `INSERT INTO defrost_users (phone_number) VALUES (?)`,
      [phone]
    );
    return res.status(201).json({ id: result.insertId, phoneNumber: phone });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "Phone number already registered" });
    }
    return res.status(500).json({ error: "Unable to save user" });
  }
}
