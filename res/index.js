
export const menuAdmin = [
    { 'type': 'Admin', 'title': 'Usuarios', 'baseUrl': '/users/users' },
    { 'type': 'Admin', 'title': 'Nuevo Usuario', 'baseUrl': '/users/usersNew' },
    { 'type': 'Admin', 'title': 'Ejercicios', 'baseUrl': '/general/exercises' },
    { 'type': 'Admin', 'title': 'Nuevo Ejercicio', 'baseUrl': '/general/exercisesNew' },
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

export const PROFILE = [
    "Alumno",
    "Profesor",
    "Admin"
]

export const GENDER = [
    "Masculino",
    "Femenino"
]

export const MEDICS =[
    { label: 'Respiratoria', value: 'respiratoria' },
    { label: 'Cardíaca', value: 'cardiaca' },
    { label: 'Renal', value: 'renal' },
    { label: 'Convulsión', value: 'convulsion' },
    { label: 'Neuronales', value: 'neuro' },
    { label: 'Diabetes', value: 'diabetes' },
    { label: 'Columna Vertebral', value: 'column' },
    { label: 'Intervención Quirúrgica', value: 'intQuirur' },
    { label: 'Asma', value: 'asma' },
    { label: 'Alergia', value: 'alergia' },
    { label: 'Lesiones Articulares', value: 'lesArticular' },
    { label: 'Lesiones Musculares', value: 'lesMuscular' },
    { label: 'Medicamentos', value: 'medicamentos' },
]

export const URL = process.env.REACT_APP_URL
