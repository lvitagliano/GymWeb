import { CompassCalibrationOutlined } from '@material-ui/icons'
import axios from 'axios'
import { URL } from 'res/index'


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


export const middleWareRoutes = (router, auth, ruta, query) => { 
    let path = {
        pathname: ruta,
        query: { id: query },
    }
    let pathSin = {
        pathname: ruta,
    }

        if(auth){
            if(query){
                router.push(path)

            }else{
                router.push(pathSin)

            }
        }else{
            router.push('/login')
        }

   
  }

