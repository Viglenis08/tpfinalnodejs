import jwt from "jsonwebtoken";

const default_user = {
  id: 1,
  email: "user@email.com",
  password: "vigle0812",
};

// ✅ Función para generar el token
const generateToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export async function login(req, res) {
  const { email, password } = req.body;
  const user = { id: 1, email };

  if (email === default_user.email && password === default_user.password) {
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ message: "Credenciales inválidas" });
  }
}
