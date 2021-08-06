import React, { useContext, createContext, useState, useMemo, useEffect } from 'react';
import Cookies from 'js-cookie'
import { useRouter } from "next/router"
import axios from 'axios'

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const router = useRouter()
  const URL = process.env.NEXT_PUBLIC_AUTH_URL
  const [product, setProduct] = useState({});

  const [userType, setUserType] = useState({
    type:'',
    id:'',
    identifier:'',
    firstName:'',
    lastName:'',
    email: ''
  })
  const [isAuth, setIsAuth] = useState(true);

  const activeAuth = () => {
    setIsAuth(true)
  }

  const removeAuth = () => {
    setIsAuth({
      type:'',
      id:'',
      identifier:'',
      firstName:'',
      lastName:'',
      email: ''
    })
    setIsAuth(false)
    router.reload()
  }

  const getCurrentUserFnc = () => {
    if(userType.identifier === undefined 
      || userType.identifier === ''
      ){
      axios.get(`${URL}/users/currentUser`,{
        headers:{'Content-Type': "application/json"},
        withCredentials: true
      }).then((res)=>{
        const user = res.data
        if(res.data !== ''){
          setUserType({
            type:user.userType,
            id:user._id,
            identifier:user.userName,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email
          })
          setIsAuth(true)
        }
      }).catch((error)=>{
        console.log(error)
      })
    }else{
      setIsAuth(true)
    }
  }

  //
  const values = useMemo(() => (
    {   
      isAuth,
      setIsAuth,
      product,
      setProduct,
      userType,
      setUserType,
      getCurrentUserFnc,
      activeAuth,
      removeAuth,
    }), 
    [isAuth, userType])
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }
  return context;
}

export default useAppContext;