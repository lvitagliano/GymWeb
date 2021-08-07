import axios from 'axios'
import { URL } from 'res/index'
import cookie from "cookie"


export function errorManager(Error) {
    if(Error.message == 'Network Error'){
        console.log(`Error de conexión`, 'Vuelva a intentarlo mas tarde')
    }
    console.log(Error)
}

export const getAxios = body => { 
    try {
        return axios.post(URL, body)
    } catch (error) {
        errorManager(error)
    }
   
  }


export const middleWareRoutes = (router, ruta, query) => { 
    let path = {
        pathname: ruta,
        query: { id: query },
    }
    let pathSin = {
        pathname: ruta,
    }
            if(query){
                router.push(path)

            }else{
                router.push(pathSin)

            }


   
  }

  export function parseCookies(req) {
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
  }
  
