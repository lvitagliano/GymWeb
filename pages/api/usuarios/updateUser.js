import { pool } from "../../../config/db.js"
import jwt from "jsonwebtoken"

export default async function AllUserHandler(req, res) {

  const { Id, Name, LastName, DNI, UserName, Password, Mail, Type, Active } = req.body
  const { AuthToken } = req.cookies
  if (AuthToken) {

      const Insert = `UPDATE escribania.users SET Name = '${Name}', LastName = '${LastName}', DNI = ${DNI}, UserName = '${UserName}', Mail = '${Mail}', Type = ${Type}, Active = ${Active} WHERE Id = ${Id};`
      await pool.query(Insert)
      return res.status(200).json({ users: 'Usuario insertado correctamente' })

  }
}
