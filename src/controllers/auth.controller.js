import jwt from "jsonwebtoken";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET no está definido en las variables de entorno");
}

const default_user = {
  id: 1,
  email: "user@email.com",
  password: "vigle0812",
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isValidUser = email === default_user.email && password === default_user.password;

    if (isValidUser) {
      const payload = { id: default_user.id };
      const expiration = { expiresIn: "1h" };

      const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);
      res.json({ token });
    } else {
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    console.error("Error al generar el token JWT:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
