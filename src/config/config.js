import mongoose from "mongoose";
import {config} from "dotenv";

config();

const conectarDB = async () =>{

    try {
         const connectionDB = await mongoose.connect(process.env.MONGO_URI);
         const url = `Conectado  a la base de datos Mongose(HOST): ${connectionDB.connection.host}- EN PUERTO ${connectionDB.connection.port}`;
         console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);

    }
}

export default conectarDB;
