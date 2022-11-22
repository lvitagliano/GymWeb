import { NextResponse } from 'next/server'
import {jwtVerify} from "jose"

export async function middleware(request) {
  const cookie = request.cookies.get('AuthToken')?.value

  if(cookie === undefined){
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      const { payload } = await jwtVerify(cookie, new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET))
      return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
  matcher: ['/clientes/clientestodos', '/tramites/:tramite','/pagos/:pago','/usuarios/usuariostodos', '/']
}