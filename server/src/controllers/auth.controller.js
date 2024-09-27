import { createJwt } from "../helpers/createJwt.js";
import { conn } from "../database/db.js";

export const signInCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await conn.query(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password])

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await createJwt(user.id);

    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signUpCtrl = async (req, res) => {
  try {

    const {username, email, password } = req.body

    const [user] = await conn.query(`INSERT INTO users (username, email, password) VALUES (?,?,?)`, [username,email,password]);

    return res.status(201).json({
      username: username,
      email: email,
      password: password
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signOutCtrl = (req, res) => {
  try {
    req.session.destroy (err)
    res.status(200).json({ message: "Sign out success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMeCtrl = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
