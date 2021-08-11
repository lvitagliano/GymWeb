const GET_CURRENT_USER = `
query getCurrentUser($token: String) {
  getCurrentUser(token: $token){
    _id
    email
    firstName
    lastName
    profile
  }
}`
const GET_ALL_USER = `
query getAllUsers {
  getAllUsers{
    _id
    email
    firstName
    lastName
    phone
    nac
    gender
    profile
    dni
    address
    contactForm{
      _id
    completeName
    phone
    completeNameTwo
    phoneTwo
    }
    medicForm{
    _id
    respiratoria
    cardiaca
    presion
    renal
    convulsion
    neuro
    diabetes
    column
    intQuirur
    asma
    alergia
    lesArticular
    lesMuscular
    medicamentos
    descripcionIfSi
    }
    covidForm{
    _id
    dateInscription
    sintomas
    inmunodepre
    sospecha
    }
    weightStart
    weightActual
    createdOn
    modifiedOn
  }
}
`
const GET_ALL_USER_BY_PROFILE = `
query getUserByProfile($profile: String) {
  getUserByProfile(profile: $profile){
    _id
    email
    firstName
    lastName
    phone
    nac
    gender
    profile
    dni
    address
    contactForm{
      _id
    completeName
    phone
    completeNameTwo
    phoneTwo
    }
    medicForm{
    _id
    respiratoria
    cardiaca
    presion
    renal
    convulsion
    neuro
    diabetes
    column
    intQuirur
    asma
    alergia
    lesArticular
    lesMuscular
    medicamentos
    descripcionIfSi
    }
    covidForm{
    _id
    dateInscription
    sintomas
    inmunodepre
    sospecha
    }
    weightStart
    weightActual
    createdOn
    modifiedOn
  }
}
`
const LOGIN = `
query login($email: String) {
  login(email: $email){
    _id
    email
    firstName
    lastName
    phone
    nac
    gender
    profile
    weightStart
    weightActual
    createdOn
    modifiedOn
  }
}
`
const GET_USER_BY_ID = `
query getUserById($idUser: ID!) {
  getUserById(id: $idUser) {
    _id
    email
    firstName
    lastName
    phone
    nac
    gender
    profile
    dni
    address
    contactForm{
      _id
    completeName
    phone
    completeNameTwo
    phoneTwo
    }
    medicForm{
    _id
    respiratoria
    cardiaca
    presion
    renal
    convulsion
    neuro
    diabetes
    column
    intQuirur
    asma
    alergia
    lesArticular
    lesMuscular
    medicamentos
    descripcionIfSi
    }
    covidForm{
    _id
    dateInscription
    sintomas
    inmunodepre
    sospecha
    }
    weightStart
    weightActual
    createdOn
    modifiedOn
  }
}
`
const GET_All_MUSCLES = `
query getAllMuscles {
  getAllMuscles{
    _id
    image
    description
    createdOn
    modifiedOn
  }
}
`
const GET_MUSCLE_BY_ID = `
query getMuscleById($idMuscle: ID!) {
  getMuscleById(id: $idMuscle) {
    _id
    image
    description
    createdOn
    modifiedOn
  }
}
`
const GET_ALL_EXERCISES = `
query getAllExercises {
  getAllExercises{
    _id
    name
    description
    muscle{
      _id
      image
      description
    }
    image
    createdOn
    modifiedOn
  }
}
`
const GET_EXERCISE_BY_ID = `
query getExerciseById($idExececise: ID!) {
  getExerciseById(id: $idExececise) {
    _id
    name
    description
    muscle{
      _id
      image
      description
    }
    image
    createdOn
    modifiedOn
  }
}
`
const GET_EXERCISE_BY_MUSCLE = `
query getExerciseByMuscle($idMuscle: ID) {
  getExerciseByMuscle(muscle: $idMuscle) {
    _id
    name
    description
    muscle{
      _id
      image
      description
    }
    image
    createdOn
    modifiedOn
  }
}
`
const GET_ALL_SERIES = `
query getAllSeries {
  getAllSeries{
    _id
    weight 
    exercise{
      _id
      description
    }
    repeats
    pause
    break
    numberSerie
    numberDay
    rutine
    timer
  }
}
`
const GET_SERIES_BY_ID = `
query getSerieById($idSerie: ID!) {
  getSerieById(id: $idSerie) {
    _id
    weight 
    exercise{
      _id
      description
    }
    repeats
    pause
    break
    numberSerie
    numberDay
    rutine
    timer
  }
}
`
const GET_SERIES_BY_RUTINE = `
query getSerieByRutine($idRutine: ID) {
  getSerieByRutine(rutine: $idRutine) {
    _id
    weight 
    exercise{
      _id
      description
    }
    repeats
    pause
    break
    numberSerie
    numberDay
    rutine
    timer
  }
}
`
const GET_ALL_RUTINES = `
query getAllRoutines {
  getAllRoutines{
    _id
    description
    student{
      _id
    }
    teacher{
      _id
    }
    series
    rutineDay{
      _id
    }
    start
    finish
    period
    days
 }   
}
`
const GET_RUTINE_BY_ID = `
query getRoutineById($idRutine: ID!) {
  getRoutineById(id: $idRutine) {
     _id
    description
    student{
      _id
      email
      firstName
      lastName
      phone
      nac
      gender
    }
    teacher{
      _id
      firstName
      lastName
    }
    series
    rutineDay{
      _id
      numberDay
      timer
    }
    start
    finish
    period
    days
 } 
}
`
const GET_RUTINE_BY_STUDENT = `
query getRoutineByStudent($idUser: ID!) {
  getRoutineByStudent(studentId: $idUser) {
     _id
    description
    student{
      _id
    }
    teacher{
      _id
    }
    series
    rutineDay{
      _id
    }
    start
    finish
    period
    days
 } 
}
`
const GET_RUTINE_BY_TEACHER = `
query getRoutineByTeacher($idUser: ID!) {
  getRoutineByTeacher(teacherId: $idUser) {
     _id
    description
    student{
      _id
    }
    teacher{
      _id
    }
    series
    rutineDay{
      _id
    }
    start
    finish
    period
    days
 } 
}
`
const GET_ALL_RUTINE_DO = `
query getAllRoutinesDo{
  getAllRoutinesDo {
      _id,
      rutine{
        _id
      },
      teacher{
          _id
      },
      student{
          _id
      },
      rutineDay{
        _id
       }
    } 
}
`
const GET_RUTINE_DO_BY_ID = `
query getRoutineDoById($idRutineDo: ID){
  getRoutineDoById(id: $idRutineDo) {
      _id,
      rutine{
        _id
      },
      teacher{
          _id
      },
      student{
          _id
      },
      rutineDay{
        _id
       }
    } 
}
`
const GET_RUTINE_DO_BY_RUTINE = `
query getRoutineDoByRutine($rutine: ID){
  getRoutineDoByRutine(rutine: $rutine) {
      _id,
      rutine{
        _id
      },
      teacher{
          _id
      },
      student{
          _id
      },
      rutineDay{
        _id
       }
    } 
}
`
const GET_RUTINE_DO_BY_TEACHER = `
query getRoutineDoByTeacher($idUser: ID){
 	 getRoutineDoByTeacher(teacherId: $idUser) {
      _id,
      rutine{
        _id
      },
      teacher{
          _id
      },
      student{
          _id
      },
      rutineDay{
        _id
       }
    } 
}
`
const GET_RUTINE_DO_BY_STUDENT = `
query getRoutineDoByStudent($idUser: ID){
 	 getRoutineDoByStudent(studentId: $idUser) {
      _id,
      rutine{
        _id
      },
      teacher{
          _id
      },
      student{
          _id
      },
      rutineDay{
        _id
       }
    } 
}
`
const GET_ALL_DAY_FOR_RUTINE = `
query getAllDayForRutine($rutine: ID){
  getAllDayForRutine(rutine: $rutine) {
     _id
     numberDay
     rutine{
       _id
     },
     student{
      _id
    },
     serieforday{
      _id
      weight 
      exercise{
        _id
        description
      }
     
      repeats
      pause
      break
      numberSerie
      numberDay
      rutine
      timer
     }
   timer
   } 
}
`
const GET_ALL_DAY_FOR_RUTINE_STUDENT = `
query getAllDayForRutineStudent($id: ID){
  getAllDayForRutineStudent(student: $id) {
     _id
     numberDay
     rutine{
       _id
     },
     student{
      _id
    },
     serieforday{
      _id
      weight 
      exercise{
        _id
        description
      }
     
      repeats
      pause
      break
      numberSerie
      numberDay
      rutine
      timer
     }
   timer
   } 
}
`
const GET_DAY_FOR_RUTINE_BY_ID = `
query getDayForRutineById($id: ID){
  getDayForRutineById(id: $id) {
     _id
     numberDay
     rutine{
       _id
     },
     student{
      _id
    },
     serieforday{
      _id
      weight
      exercise{
          _id
          name
          description
          muscle{
            _id
            image
            description
          }
          image
      }
    
      repeats
      pause
      break
      numberSerie
      numberDay
      rutine
      timer
     }
   timer
   } 
}
`
const GET_ALL_DAY_FOR_RUTINE_DO = `
query getAllDayForRutineDo($idRutineDo: ID){
  getAllDayForRutineDo(rutineDo: $idRutineDo) {
     _id
     numberDay
     rutine{
      _id
    },
     rutineDo{
       _id
     },
     student{
      _id
    },
     serieforday{
       _id
     },
     cantSeries
     canSeriesDo
   } 
}
`
const GET_ALL_DAY_FOR_RUTINE_RUTINE_DO = `
query getAllDayForRutineRutineDo($rutine: ID){
  getAllDayForRutineRutineDo(rutine: $rutine) {
     _id
     numberDay
       rutine{
       _id
     },
   rutineDo{
       _id
     },
     rutineDo{
       _id
     },
     serieforday{
       _id
     },
     cantSeries
     canSeriesDo
   } 
}
`
const GET_ALL_DAY_FOR_RUTINE_DO_STUDENT = `
query getAllDayForRutineDoStudent($id: ID){
  getAllDayForRutineDoStudent(student: $id) {
     _id
     numberDay
     rutine{
      _id
    },
     rutineDo{
       _id
     },
     student{
      _id
    },
     serieforday{
       _id
     }
     cantSeries
     canSeriesDo
   } 
}
`
const GET_DAY_FOR_RUTINE_DO_BY_ID = `
query getDayForRutineDoById($id: ID){
  getDayForRutineDoById(id: $id) {
     _id
     numberDay
     rutine{
      _id
    },
     rutineDo{
       _id
     },
     student{
      _id
    },
     serieforday{
      _id
  
     }
     cantSeries
     canSeriesDo
   } 
}
`
const GET_ALL_SERIES_FOR_DAY = `
query getAllSeriesForDay($id: ID){
 	getAllSeriesForDay(dayForRutine: $id) {
      _id
      serie{
        _id
      },
      dayForRutine{
        _id
      },
      student{
        _id
      },
      doIt
    }
} 
`
const GET_ALL_SERIES_FOR_STUDENT = `
query getAllSeriesForStudent($id: ID){
  getAllSeriesForStudent(student: $id) {
      _id
      serie{
        _id
      },
      dayForRutine{
        _id
      },
      student{
        _id
      },
      doIt
    }
} 
`
const GET_ALL_SERIES_FOR_DAY_BY_ID = `
query getSeriesForDayById($idSerieFoDay: ID){
 	getSeriesForDayById(id: $idSerieFoDay) {
      _id
      serie{
        _id
      },
      dayForRutine{
        _id
      },
      student{
        _id
      },
      doIt
    }
} 
`
const GET_ALL_CONTACTFORM = `
query getAllContactForm {
  getAllContactForm{
    _id
    user
    completeName
    phone
    completeNameTwo
    phoneTwo
  }
}
`
const GET_CONTACTFORM_BY_ID = `
query getContactFormById($id: ID!) {
  getContactFormById(id: $id) {
    _id
    user
    completeName
    phone
    completeNameTwo
    phoneTwo
  }
}
`
const GET_CONTACTFORM_BY_USER = `
query getContactFormByUser($idUser: ID!) {
  getContactFormByUser(user: $idUser) {
    _id
    user
    completeName
    phone
    completeNameTwo
    phoneTwo
 } 
}
`
const GET_ALL_MEDICFORM = `
query getAllMedicForm {
  getAllMedicForm{
    _id
    user
    respiratoria
    cardiaca
    presion
    renal
    convulsion
    neuro
    diabetes
    column
    intQuirur
    asma
    alergia
    lesArticular
    lesMuscular
    medicamentos
    descripcionIfSi
  }
}
`
const GET_MEDICFORM_BY_ID = `
query getMedicFormById($id: ID!) {
  getMedicFormById(id: $id) {
    _id
    user
    respiratoria
    cardiaca
    presion
    renal
    convulsion
    neuro
    diabetes
    column
    intQuirur
    asma
    alergia
    lesArticular
    lesMuscular
    medicamentos
    descripcionIfSi
  }
}
`
const GET_MEDICFORM_BY_USER = `
query getMedicFormByUser($idUser: ID!) {
  getMedicFormByUser(user: $idUser) {
    _id
    user
    respiratoria
    cardiaca
    presion
    renal
    convulsion
    neuro
    diabetes
    column
    intQuirur
    asma
    alergia
    lesArticular
    lesMuscular
    medicamentos
    descripcionIfSi
 } 
}
`
const GET_ALL_COVIDFORM = `
query getAllCovidForm {
  getAllCovidForm{
    _id
    user
    dateInscription
    sintomas
    inmunodepre
    sospecha
  }
}
`
const GET_COVIDFORM_BY_ID = `
query getCovidFormById($id: ID!) {
  getCovidFormById(id: $id) {
    _id
    user
    dateInscription
    sintomas
    inmunodepre
    sospecha
  }
}
`
const GET_COVIDFORM_BY_USER = `
query getCovidFormByUser($idUser: ID!) {
  getCovidFormByUser(user: $idUser) {
    _id
    user
    dateInscription
    sintomas
    inmunodepre
    sospecha
 } 
}
`

export {
  GET_COVIDFORM_BY_USER,
  GET_COVIDFORM_BY_ID,
  GET_ALL_COVIDFORM,
  GET_MEDICFORM_BY_USER,
  GET_MEDICFORM_BY_ID,
  GET_ALL_MEDICFORM,
  GET_CONTACTFORM_BY_USER,
  GET_CONTACTFORM_BY_ID,
  GET_ALL_CONTACTFORM,
  GET_ALL_DAY_FOR_RUTINE_RUTINE_DO,
  GET_ALL_DAY_FOR_RUTINE_STUDENT,
  GET_ALL_DAY_FOR_RUTINE_DO_STUDENT,
  GET_ALL_SERIES_FOR_STUDENT,
  GET_ALL_DAY_FOR_RUTINE_DO,
  GET_DAY_FOR_RUTINE_DO_BY_ID,
  GET_RUTINE_DO_BY_RUTINE,
  GET_ALL_SERIES_FOR_DAY_BY_ID,
  GET_ALL_SERIES_FOR_DAY,
  GET_DAY_FOR_RUTINE_BY_ID,
  GET_ALL_DAY_FOR_RUTINE,
  GET_RUTINE_DO_BY_STUDENT,
  GET_RUTINE_DO_BY_TEACHER,
  GET_RUTINE_DO_BY_ID,
  GET_ALL_RUTINE_DO,
  GET_CURRENT_USER,
  GET_ALL_USER,
  GET_USER_BY_ID,
  GET_All_MUSCLES,
  GET_MUSCLE_BY_ID,
  GET_ALL_EXERCISES,
  GET_EXERCISE_BY_ID,
  GET_EXERCISE_BY_MUSCLE,
  GET_ALL_SERIES,
  GET_SERIES_BY_ID,
  GET_ALL_RUTINES,
  GET_RUTINE_BY_ID,
  GET_RUTINE_BY_STUDENT,
  GET_RUTINE_BY_TEACHER,
  GET_SERIES_BY_RUTINE,
  GET_ALL_USER_BY_PROFILE,
  LOGIN
}