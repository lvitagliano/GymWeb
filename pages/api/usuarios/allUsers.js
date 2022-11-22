import { pool } from "../../../config/db.js"
import jwt from "jsonwebtoken"

export default async function AllUserHandler(req, res) {
  const { AuthToken } = req.cookies
  
  if(AuthToken){
    const select = `SELECT Id, Name, LastName, DNI, UserName, Password, Mail, Type, Active FROM escribania.users`
    const [rows] = await pool.query(select)
      return res.status(200).json({users: rows})
  
  }
  return res.status(401).json({error:'Usuario o password incorrecto'})
  }
  