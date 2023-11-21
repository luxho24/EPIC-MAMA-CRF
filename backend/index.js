import express from "express";
import cors from "cors";
import {config} from "dotenv";
import connectDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js"
import pacienteRoutes from "./routes/pacienteRoutes.js"
import multerImage from "./middleware/imageMiddleware.js";

const app = express();

app.use(cors());

// Opciones de configuración personalizada si es necesario
app.use(cors({
  origin: 'https://inicibprotocolos.urp.edu.pe',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

config();
connectDB();

app.use(multerImage)

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pacientes", pacienteRoutes);



/**Para eliminar el cache y que no se pueda volver con el boton de back del navegador, luego de que hacemos un logout */
app.use(function(req, res, next){
    if(!req.user){
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    }
    next();
});




const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server ejecutandose en https://inicibprotocolos.urp.edu.pe/api/usuarios/login:${PORT}`);
})