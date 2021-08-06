import {PORT_HOST} from "@env"

export const URI = PORT_HOST

export const URIMG = 'http://www.rpi.sanluis.gov.ar/wp-content/uploads/2021/08/'

export const gender =[
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Femenino', value: 'Femenino' },
]

export const profile =[
    { label: 'Alumno', value: 'Alumno' },
    { label: 'Profesor', value: 'Profesor' },
    { label: 'Administrador', value: 'Admin' },
]

export const rutinePeriod =[
    { label: 'Mensual', value: 'mensual' },
    { label: 'Semanal', value: 'semanal' },
]

export const labelHolder= 'Sexo'
export const labelProfile = 'Perfil'

export const initialStateUser = {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    nac: '',
    gender: '',
    profile: '',
    password: '',
    weightStart: 0,
    weightActual: 0
}

export const rutineItems =[
    { label: 'Series', value: 'numberSerie' },
    { label: 'Repeticiones', value: 'repeats' },
    { label: 'Peso', value: 'weight' },
    { label: 'Tiempo', value: 'pause' },
  ]