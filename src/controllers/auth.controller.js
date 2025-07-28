import { generateToken } from "../services/token-generator.js";

const default_user = {
  id: 1,
  email: "user@email.com",
  password: "vigle0812",
};

export async function login(req, res) {
  const { email, password } = req.body;

  if (email === default_user.email && password === default_user.password) {
    const token = generateToken({ id: default_user.id, email: default_user.email });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Credenciales inválidas" });
  }
}
