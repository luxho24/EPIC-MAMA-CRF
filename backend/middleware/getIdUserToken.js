import jwt from "jsonwebtoken";

const obtnerIdUsuarioPorToken = (req, res) => {
  const { token } = req.body;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Reemplaza 'tu_secreto' con tu clave secreta real

    const userId = decodedToken.id; // El ID del usuario se extrae del token

    // res.status(200).json({ idUsuario: userId });
    return res.status(200).json( userId );
  } catch (error) {
    res.status(401).json({ error: 'Token no válido' });
  }
};

export default obtnerIdUsuarioPorToken;