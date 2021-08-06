
export const menuAdmin = [
    { 'type': 'admin', 'title': 'Usuarios', 'baseUrl': '/admin/user' },
    { 'type': 'admin', 'title': 'Ejercicios', 'baseUrl': '/general/exercises' },
    { 'type': 'admin', 'title': 'Nuevo Ejercicio', 'baseUrl': '/general/exercisesNew' },
]

export const Colors = [
    { stat: 'Warning', color: '#f9f43e' },
    { stat: 'Danger', color: '#f92424' },
    { stat: 'Done', color: '#44de28' },
    { stat: 'Initial', color: '#afafaf' },
    { stat: 'Uploaded', color: 'rgb(163 214 136 / 64%)' }
]

export const STATE = [
    { value: 'Warning', label: 'Atención' },
    { value: 'Danger', label: 'Riesgo' },
    { value: 'Done', label: 'Hecho' },
    { value: 'Initial', label: 'Inicial' },
    { value: 'Uploaded', label: 'Cargado' },
]


export const URL = process.env.REACT_APP_URL
