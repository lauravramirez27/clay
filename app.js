import dotenv  from "dotenv";
import express from "express";
import appingredientes from "./app/routes/ingredientes.js";
import appHamburguesas from "./app/routes/hamburguesas.js";
import appchef from "./app/routes/chef.js";
import { limitGrt } from "./app/middlewares/limit.js";
import { crearToken } from "./app/middlewares/JWT.js";


dotenv.config();
let app =express();

app.use(express.json());

app.use('/ingredientes',appingredientes);
app.use('/hamburguesas',appHamburguesas);
app.use('/chef',appchef);
app.use("/token",crearToken)

let config = JSON.parse(process.env.MY_SERVER);
app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);

});