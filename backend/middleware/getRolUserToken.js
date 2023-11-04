import jwt from "jsonwebtoken";
import UsuarioModel from "../models/UsuarioModel.js";

const obtenerRolPorToken = async (req, res) => {
  const { token } = req.body;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Reemplaza 'tu_secreto' con tu clave secreta real

    const userId = decodedToken.id; // El ID del usuario se extrae del token

    const usuario = await UsuarioModel.findById(userId);
    
    //Trae solo el rol del usuario
    return res.status(200).json( usuario.rol );

    //Trae todos los datos del usuario
    // return res.status(200).json( usuario );
  } catch (error) {
    res.status(401).json({ error: 'Token no válido' });
  }
};

export default obtenerRolPorToken;