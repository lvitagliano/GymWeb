const AUTH = `
mutation auth($email: String, $password: String){
  auth(email: $email, password: $password)
}
`
const CREATE_ROUTINES = `
mutation createRoutines($InputRoutine: InputRoutine) {
  createRoutines(input: $InputRoutine){
    _id
    description
  }
}
`
const UPDATE_ROUTINES = `
mutation updateRoutines($idRutine: ID, $InputRoutine: InputRoutine) {
  updateRoutines(_id: $idRutine, input: $InputRoutine){
    _id
    description

  }
}
`
const CREATE_SERIES = `
mutation createSeries($InputSerie: InputSerie) {
  createSeries(input: $InputSerie){
    _id
  }
}
`
const UPDATE_SERIES = `
mutation updateSeries($idSerie: ID, $InputSerie: InputSerie) {
  updateSeries(_id: $idSerie, input: $InputSerie){
    _id
  }
}
`
const CREATE_EXERCISES = `
mutation createExercise($InputExercise: InputExercise) {
  createExercise(input: $InputExercise){
    _id
  }
}
`
const UPDATE_EXERCISES  = `
mutation updateExercise($idExececise: ID, $InputExercise: InputExercise) {
  updateExercise(_id: $idExececise, input: $InputExercise){
    _id
  }
}
`
const CREATE_MUSCLES = `
mutation createMuscle($InputMuscle: InputMuscle) {
  createMuscle(input: $InputMuscle){
    _id
  }
}
`
const UPDATE_MUSCLES  = `
mutation updateMuscle($idMuscle: ID, $InputMuscle: InputMuscle) {
  updateMuscle(_id: $idMuscle, input: $InputMuscle){
    _id
  }
}
`
const CREATE_USER = `
mutation createUser($InputUser: InputUser) {
  createUser(input: $InputUser){
    _id
  }
}
`
const UPDATE_USER = `
mutation updateUser($idUser: ID, $InputUser: InputUser) {
  updateUser(_id: $idUser, input: $InputUser){
    _id
  }
}
`
const DELETE_RUTINES = `
mutation deleteRutines($idRutine: ID) {
  deleteRutines(_id: $idRutine)
}
`
const DELETE_SERIES = `
mutation deleteSeries($idSerie: ID) {
  deleteSeries(_id: $idSerie)
}
`
const DELETE_EXCERCISE = `
mutation deleteExercise($idExececise: ID) {
  deleteExercise(_id: $idExececise)
}
`
const DELETE_MUSCLE = `
mutation deleteMuscle($idMuscle: ID) {
  deleteMuscle(_id: $idMuscle)
}
`
const DELETE_USER = `
mutation deleteUser($idUser: ID) {
  deleteUser(_id: $idUser)
}
`
const CREATE_SERIES_FOR_DAY = `
mutation createSeriesForDay($InputSeriesForDay: InputSeriesForDay) {
  createSeriesForDay(input: $InputSeriesForDay){
    _id
  }
}
`
const UPDATE_SERIES_FOR_DAY = `
mutation updateSeriesForDay($idSerieFoDay: ID, $InputSeriesForDay: InputSeriesForDay) {
  updateSeriesForDay(_id: $idSerieFoDay, input: $InputSeriesForDay){
    _id
  }
}
`
const DELETE_SERIES_FOR_DAY = `
mutation deleteSeriesForDay($idSerieFoDay: ID) {
  deleteSeriesForDay(_id: $idSerieFoDay)
}
`
const CREATE_DAY_RUTINE = `
mutation createDayForRutine($InputDayForRutine: InputDayForRutine) {
  createDayForRutine(input: $InputDayForRutine){
    _id
  }
}
`
const UPDATE_DAY_RUTINE = `
mutation updateDayForRoutines($iddayForRutine: ID, $InputDayForRutine: InputDayForRutine) {
  updateDayForRoutines(_id: $iddayForRutine, input: $InputDayForRutine){
    _id
  }
}
`
const DELETE_DAY_RUTINE = `
mutation deleteDayForRoutines($iddayForRutine: ID) {
  deleteDayForRoutines(_id: $iddayForRutine)
}
`
const CREATE_RUTINES_DO = `
mutation createRutineDoIt($InputRutineDo: InputRutineDo) {
  createRutineDoIt(input: $InputRutineDo){
    _id
  }
}
`
const UPDATE_RUTINES_DO = `
mutation updateRoutinesDo($id: ID, $InputRutineDo: InputRutineDo) {
  updateRoutinesDo(_id: $id, input: $InputRutineDo){
    _id
  }
}
`
const DELETE_RUTINES_DO = `
mutation deleteRutinesDo($idRutineDo: ID) {
  deleteRutines(_id: $idRutineDo)
}
`
const CREATE_DAY_RUTINE_DO = `
mutation createDayForRutineDo($InputDayForRutineDo: InputDayForRutineDo) {
  createDayForRutineDo(input: $InputDayForRutineDo){
    _id
  }
}
`
const UPDATE_DAY_RUTINE_DO = `
mutation updateDayForRoutinesDo($iddayForRutine: ID, $InputDayForRutineDo: InputDayForRutineDo) {
  updateDayForRoutinesDo(_id: $iddayForRutine, input: $InputDayForRutineDo){
    _id
  }
}
`
const DELETE_DAY_RUTINE_DO = `
mutation deleteDayForRoutinesDo($iddayForRutine: ID) {
  deleteDayForRoutinesDo(_id: $iddayForRutine)
}
`
const CREATE_CONTACT_FORM = `
mutation createContactForm($Input: Input) {
  createContactForm(input: $Input){
    _id
  }
}
`
const UPDATE_CONTACT_FORM = `
mutation updateContactForm($id: ID, $Input: Input) {
  updateContactForm(_id: $id, input: $Input){
    _id
  }
}
`
const DELETE_CONTACT_FORM = `
mutation deleteContactForm($id: ID) {
  deleteContactForm(_id: $id)
}
`
const CREATE_MEDIC_FORM = `
mutation createMedicForm($Input: Input) {
  createMedicForm(input: $Input){
    _id
  }
}
`
const UPDATE_MEDIC_FORM = `
mutation updateMedicForm($id: ID, $Input: Input) {
  updateMedicForm(_id: $id, input: $Input){
    _id
  }
}
`
const DELETE_MEDIC_FORM = `
mutation deleteMedicForm($id: ID) {
  deleteMedicForm(_id: $id)
}
`
const CREATE_COVID_FORM = `
mutation createCovidForm($Input: Input) {
  createCovidForm(input: $Input){
    _id
  }
}
`
const UPDATE_COVID_FORM = `
mutation updateCovidForm($id: ID, $Input: Input) {
  updateCovidForm(_id: $id, input: $Input){
    _id
  }
}
`
const DELETE_COVID_FORM= `
mutation deleteCovidForm($id: ID) {
  deleteCovidForm(_id: $id)
}
`
export { 
  AUTH,
  DELETE_USER,
  DELETE_MUSCLE,
  DELETE_EXCERCISE,
  DELETE_SERIES,
  DELETE_RUTINES,
  UPDATE_USER,
  CREATE_USER,
  UPDATE_MUSCLES,
  CREATE_MUSCLES,
  UPDATE_EXERCISES,
  CREATE_EXERCISES,
  UPDATE_SERIES,
  CREATE_SERIES,
  UPDATE_ROUTINES,
  CREATE_ROUTINES,
  CREATE_SERIES_FOR_DAY,
  UPDATE_SERIES_FOR_DAY,
  DELETE_SERIES_FOR_DAY,
  CREATE_DAY_RUTINE,
  UPDATE_DAY_RUTINE,
  DELETE_DAY_RUTINE,
  CREATE_RUTINES_DO,
  UPDATE_RUTINES_DO,
  DELETE_RUTINES_DO,
  CREATE_DAY_RUTINE_DO,
  UPDATE_DAY_RUTINE_DO,
  DELETE_DAY_RUTINE_DO,
  CREATE_CONTACT_FORM,
  UPDATE_CONTACT_FORM,
  DELETE_CONTACT_FORM,
  CREATE_MEDIC_FORM,
  UPDATE_MEDIC_FORM,
  DELETE_MEDIC_FORM,
  CREATE_COVID_FORM,
  UPDATE_COVID_FORM,
  DELETE_COVID_FORM
 }