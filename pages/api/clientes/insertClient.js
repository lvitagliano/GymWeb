import { pool } from "../../../config/db.js"
import jwt from "jsonwebtoken"

export default async function AllUserHandler(req, res) {

  const { Name, LastName, DNI, Type, Active } = req.body
  const { AuthToken } = req.cookies
  if (AuthToken) {
  
      const Insert = `INSERT INTO escribania.clients(Name,LastName,DNI,Type,Active) VALUES('${Name}','${LastName}',${DNI},${Type},${Active});`
      await pool.query(Insert)
      return res.status(200).json({ users: 'Usuario insertado correctamente' })

  }
}
