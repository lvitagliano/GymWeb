import { pool } from "../../../config/db.js"

export default async function AllUserHandler(req, res) {
  const { id } = req.body
  const { AuthToken } = req.cookies
    const Insert = `DELETE FROM escribania.tramites WHERE Id =${id};`
    await pool.query(Insert)
      return res.status(200).json({ users: 'Usuario eliminado correctamente' })

}
