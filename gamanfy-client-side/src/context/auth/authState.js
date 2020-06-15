import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { login, companyLogin } from '../../api/auth.api';
import { useHistory } from "react-router-dom";


import { LOGIN_SUCCESS, LOGIN_ERROR } from '../../constants/index';

export const AuthState = props => {

  const initialState = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
    loading: true
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const history = useHistory();


  const authenticate = (data) => {
    login(data)
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        
          history.push(`/user/${res.data.user.userId}/dashboard`)
       
      })
      
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err })
      })
  }

  const authenticateCompany = (data) => {
    companyLogin(data)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    
      history.push(`/company/${res.data.user.userId}/dashboard`)
    })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err })
      })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isVerified: state.isVerified,
        loading: state.loading,
        authenticate,
        authenticateCompany
      }}
    >

      {props.children}
    </AuthContext.Provider>
  )
}

