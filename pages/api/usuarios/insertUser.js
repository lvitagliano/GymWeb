import { pool } from "../../../config/db.js"
import jwt from "jsonwebtoken"

export default async function AllUserHandler(req, res) {

  const { Name, LastName, DNI, UserName, Password, Mail, Type, Active } = req.body
  const { AuthToken } = req.cookies
  if (AuthToken) {
  
      let Pass = jwt.sign(Password, process.env.NEXT_PUBLIC_SECRET)
      const Insert = `INSERT INTO escribania.users(Name,LastName,DNI,UserName,Password,Mail,Type,Active) VALUES('${Name}','${LastName}',${DNI},'${UserName}','${Password}','${Mail}',${Type},${Active});`
      await pool.query(Insert)
      return res.status(200).json({ users: 'Usuario insertado correctamente' })

  }
}
