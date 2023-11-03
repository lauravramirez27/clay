import express from "express";
import routesVersioning  from 'express-routes-versioning';
import { ventasJulio} from "../controllers/ventas.js";


const version = routesVersioning();
const appventas = express.Router();

appventas.get("/", version({
    "1.0.0": ventasJulio
})); 




export default appventas