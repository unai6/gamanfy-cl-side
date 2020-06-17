import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { login, companyLogin, companyCompleteProfile } from '../../api/auth.api';
import { useHistory } from "react-router-dom";


import { LOGIN_SUCCESS, LOGIN_ERROR, COMPLETE_PROFILE_SUCCESS, COMPLETE_PROFILE_ERROR } from '../../constants/index';

export const AuthState = props => {

  const initialState = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
  
    loading: true
  }
   


  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const history = useHistory();
  console.log(state)

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
        if (!res.data.user.isCompleted) {

         history.push(`auth-co/company/${res.data.user.userId}/complete-profile`)

        } else {
          history.push(`/company/${res.data.user.userId}/dashboard`);

        }
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err })
      })
  }

  const toCompleteCompany = (myComp, data) => {
     myComp = window.location.pathname.slice(17, window.location.pathname.lastIndexOf('/'))
   
     companyCompleteProfile(myComp, data)
    .then(res => {
      dispatch({type: COMPLETE_PROFILE_SUCCESS, payload: res.data})
      history.push(`/company/${res.data.user.userId}/dashboard`) 
    })
    .catch(err => {
      dispatch({type:COMPLETE_PROFILE_ERROR, payload: err})
    })
  }



  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isVerified: state.isVerified,
        isCompleted: state.isCompleted,
        loading: state.loading,
        authenticate,
        authenticateCompany,
        toCompleteCompany
      }}
    >

      {props.children}
    </AuthContext.Provider>
  )
}

