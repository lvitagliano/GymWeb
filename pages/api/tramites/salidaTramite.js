import { pool } from "../../../config/db.js"
import dayjs from 'dayjs';
import moment from 'moment';

export default async function AllUserHandler(req, res) {
  let Pagados='"'+moment(dayjs(Date.now())).format("yyyy/MM/DD")+'"'
  const { id, } = req.body
  const { AuthToken } = req.cookies
  if (AuthToken) {
    const Insert = `UPDATE escribania.tramites SET Egreso=${Pagados} WHERE Id =${id};`
    await pool.query(Insert)
      return res.status(200).json({ users: 'Egreso correctamente' })

  }
}
