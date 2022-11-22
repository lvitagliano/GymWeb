import { pool } from "../../../config/db.js"
import jwt from "jsonwebtoken"

export default async function AllUserHandler(req, res) {
  let activo
  const { id, Active } = req.body
  const { AuthToken } = req.cookies
  if (AuthToken) {
    if(Active == 0){
      activo = 1
    } else {
      activo = 0
    }
    const Insert = `UPDATE escribania.users SET Active=${activo} WHERE Id =${id};`
       await pool.query(Insert)
      return res.status(200).json({ users: 'Usuario insertado correctamente' })

  }
}
