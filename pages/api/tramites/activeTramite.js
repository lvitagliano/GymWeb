import { pool } from "../../../config/db.js"
import jwt from "jsonwebtoken"
import dayjs from 'dayjs';
import moment from 'moment';

export default async function AllUserHandler(req, res) {
  let activos= 0
  let Pagados
  var pagoTotal=null;
  const { id, Activo, PagoPendiente } = req.body
  const { AuthToken } = req.cookies
  if (AuthToken) {
    if(PagoPendiente == 0){
      Pagados = 1
      pagoTotal=null
    } else {
      Pagados = 0
      pagoTotal='"'+moment(dayjs(Date.now())).format("yyyy/MM/DD")+'"'
    }
    const Insert = `UPDATE escribania.tramites SET Activo=${activos}, FechaPagoTotal=${pagoTotal}, PagoPendiente=${Pagados} WHERE Id =${id};`
    await pool.query(Insert)
      return res.status(200).json({ users: 'Usuario insertado correctamente' })

  }
}
