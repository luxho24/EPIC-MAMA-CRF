import multer from "multer";
// import { v4 as uuid } from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/uploads"),
    // Cambiar nombre del archivo
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname)); // Agrega la fecha actual en milisegundos al momento de subir la imagen
        // cb(null, uuid() + path.extname(file.originalname).toLowerCase()); // Agrega un identificador unico a cada archivo con el modulo "uuid/v4"
    },
});

/** 
 * * Puede subir un solo archivo
 * */
const multerImage = multer({
    storage,
    limits: { fileSize: 1000000 }, // Limita el peso del archivo: 1000000 = 1 MB, 2000000 = 2 MB, 10000000 = 10 MB
    // Filtrar solo archivos permitidos
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));

        if (mimetype && extname) {
            return cb(null, true); // null = no hay ningun error, true = no voy a enviar ningun tipo de archivo solo un true
        }

        cb("Error: El archivo debe ser una imagen valida");
    },
}).single("imagen");

export default multerImage;