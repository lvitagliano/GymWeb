import React, { useContext, createContext, useState, useMemo, useEffect } from 'react';
import { useRouter } from "next/router"
import { getAxios } from 'hoc/simpleFunctions'
import { GET_CURRENT_USER} from 'container/Querys'
import Cookies from 'js-cookie'

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const router = useRouter()
  const [product, setProduct] = useState({});

  const [userType, setUserType] = useState({
    profile:'',
    _id:'',
    identifier:'',
    firstName:'',
    lastName:'',
    email: ''
  })
  const [isAuth, setIsAuth] = useState({
    autorization: false,
    token: ''
  });


  const getCurrentUserFnc = () => {
    let tokens = Cookies.get('token')
    console.log('tokens', tokens)
    if(tokens){
      let body =  { 
        query: GET_CURRENT_USER,
        variables: { token: tokens }
    }
    getAxios(body).then(resp => setUserType({
      email: resp?.data?.data?.getCurrentUser.email,
      firstName: resp?.data?.data?.getCurrentUser.firstName,
      lastName: resp?.data?.data?.getCurrentUser.lastName,
      profile: resp?.data?.data?.getCurrentUser.profile,
      _id: resp?.data?.data?.getCurrentUser._id,
    }),
    setIsAuth({
      autorization: true,
      token: tokens
    })
    )
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