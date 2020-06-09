import React, { useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {login, companyLogin} from '../../api/auth.api';
import {useHistory} from "react-router-dom"

import { LOGIN_SUCCESS, LOGIN_ERROR } from '../../constants/index';

export const AuthState = props => {

  const initialState = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
    loading: true
   }


  const [ state, dispatch ] = useReducer(AuthReducer, initialState);
  const history = useHistory();

  const authenticate = (data) => {  
    login(data)
    .then(res=> {
      console.log(res)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      history.push('/')
    })
    .catch(err => { 
      dispatch({ type: LOGIN_ERROR, payload: err }) 
    })
  }

  const authenticateCompany = (data) =>{
    companyLogin(data)
    .then(res => {
      dispatch({type: LOGIN_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({type:LOGIN_ERROR, payload: err})
    })
  }

  return(
    <AuthContext.Provider
      value={{ 
        token: state.token,
        user: state.user,
        loading:state.loading,
        authenticate,
        authenticateCompany
      }}
    >
   
    {props.children}
    </AuthContext.Provider>
  )
}

