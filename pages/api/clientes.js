import jwt from "jsonwebtoken"
import {useRouter} from 'next/router'

export default function clientesHandler(req, res) {
  const router = useRouter()

  const { AuthToken } = req.cookies
  if(!AuthToken){
    return res.status(401).json({error: 'No token'})
  }

  try {
    const users =  jwt.verify(AuthToken, process.env.NEXT_PUBLIC_SECRET)

    if(users.Type > 0){
      router.push('/')
    }

    return res.json({users})
  } catch (error) {
    return res.status(401).json({error: 'Invalid token'})
  }

}