import { config } from "dotenv";
import { v2 as cloudinary } from "cloudinary";

/** Este codigo de dotenv lo importe en este archivo porque no detectaba las llaves para cloudinary */
config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;