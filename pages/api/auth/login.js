import { pool } from "../../../config/db.js"
import {sign} from "jsonwebtoken"
import { serialize } from 'cookie'

export default async function loginHandler(req, res) {

  const { user, pass } = req.body

  let passVerify = sign(pass, process.env.NEXT_PUBLIC_SECRET)

  const select = `SELECT * FROM escribania.users where username = '${user}' and Password = '${passVerify}';`


  const [rows] = await pool.query(select)

  if(rows.length > 0){
   const token =  sign({
      exp: Math.floor(Date.now()/1000) + 60 * 60,
      name:rows[0].Name,
      LastName:rows[0].LastName,
      Type:rows[0].Type,
    }, process.env.NEXT_PUBLIC_SECRET)
    
    const serialized = serialize('AuthToken', token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60,
      path: '/'
    })
    
    res.setHeader('Set-Cookie', serialized)
    return res.status(200).json({user: rows[0].Name})
  }

  return res.status(401).json({error:'Usuario o password incorrecto'})
  }
  