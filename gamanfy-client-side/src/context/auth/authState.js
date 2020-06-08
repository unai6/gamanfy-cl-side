import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {login, signup} from '../../api/auth.api';
import {companyLogin, companySignup} from '../../api/auth.api';
import {useHistory} from "react-router-dom"
import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../constants/index';

export const AuthState = props => {
  const initialState = {
    user: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),
    loading: true
   }

  const history = useHistory();
  const [ state, dispatch ] = useReducer(AuthReducer, initialState);

  const authenticate = (data) => {
    login(data)
    .then(res=> {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => { 
      dispatch({ type: LOGIN_ERROR, payload: err }) 
    })
  }

  const createUser = (data) => {
    signup(data)
    .then(res=> {
      dispatch({ type: SIGNUP_SUCCESS, payload: res })
      history.push("/");
    })
    .catch(err => { 
      dispatch({ type: SIGNUP_ERROR, payload: err }) 
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
        createUser,
        authenticateCompany
      }}
    >
   
    {props.children}
    </AuthContext.Provider>
  )
}

