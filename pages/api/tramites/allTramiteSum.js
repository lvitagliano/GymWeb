import { pool } from "../../../config/db.js"
import jwt from "jsonwebtoken"

export default async function AllUserHandler(req, res) {
  const { AuthToken } = req.cookies
  var select = ''
  if(AuthToken){
    if(Object.keys(req.body).length > 0){
      try {
        select = `SELECT sum(MontoParcial) as parcial, sum(MontoTotal) as total, sum(MontoTotal - MontoParcial) as Deuda FROM escribania.tramites where PagoPendiente=${req.body?.ConDeuda}  ${req.body?.Cliente > 0 ? ' and Cliente= '+ req.body.Cliente : '' } ${req.body?.Ingreso != null && req.body?.Egreso != null ? 'and IngreSo between ' + req.body?.Ingreso + ' and ' + req.body?.Egreso : ''}  ${req.body?.Retirados ? 'and Egreso is not null' : ''}`
      } catch (error) {
        console.log('error',error)

      }
 
    }else{
      select = `SELECT sum(MontoParcial) as parcial, sum(MontoTotal) as total, sum(MontoTotal - MontoParcial) as Deuda FROM escribania.tramites order by Id desc`
    }
    const [rows] = await pool.query(select)
      return res.status(200).json({tramites: rows})
  
  }
  return res.status(401).json({error:'Usuario o password incorrecto'})
  }

