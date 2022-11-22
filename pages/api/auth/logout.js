import { pool } from "../../../config/db.js"
import {verify} from "jsonwebtoken"
import { serialize } from 'cookie'

export default async function logoutHandler(req, res) {

  const { AuthToken } = req.cookies
  if(!AuthToken){
    return res.status(401).json({error: 'No token'})
  }

  try {
    verify(AuthToken, process.env.NEXT_PUBLIC_SECRET)
    const serialized = serialize('AuthToken', null, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })
    res.setHeader('Set-Cookie', serialized)
    return res.status(200).json('Logout Succesfully')

  } catch (error) {
    
  }

  }
  