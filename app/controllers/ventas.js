import {con} from "../../config/conection.js";

  export const ventasJulio = async (req, res)=>{
    try {
      const db = await con();
      const ventas = db.collection("venta");
      const result = await ventas
        .find({
          Fecha: {
            $gte: new Date("2023-07-01"),
            $lt: new Date("2023-08-01"),
          },
        })
        .toArray();
        res.send(result);
    } catch (error) {
      console.error("Error al obtener las ventas de julio:", error);
      throw error;
    }
  }