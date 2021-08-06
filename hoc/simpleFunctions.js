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

