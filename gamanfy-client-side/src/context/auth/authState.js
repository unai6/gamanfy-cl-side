import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { login, companyLogin, companyCompleteProfile, userCompleteProfile } from '../../api/auth.api';
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

  

  const authenticate = (data) => {
    login(data)
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        if (!res.data.user.isCompleted) {
  
          history.push(`/auth/user/${res.data.user.userId}/${res.data.user.isCompany}/complete-profile`)
 
         } else {
           history.push(`/user/${res.data.user.userId}/dashboard`);
 
         }
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
     myComp = window.location.pathname.slice(17, window.location.pathname.lastIndexOf('/'));
   
     companyCompleteProfile(myComp, data)
    .then(res => {
      dispatch({type: COMPLETE_PROFILE_SUCCESS, payload: res.data})
      history.push(`/company/${res.data.user.userId}/dashboard`) 
    })
    .catch(err => {
      dispatch({type:COMPLETE_PROFILE_ERROR, payload: err})
    })
  }

  const toCompleteUser = (myComp, isCompany, data) =>{
    myComp = window.location.pathname.slice(11, 35, window.location.pathname.lastIndexOf('/'));
    isCompany = window.location.pathname.slice(36,41, window.location.pathname.lastIndexOf('/'));

    userCompleteProfile(myComp, isCompany, data)
    .then(res => {
      dispatch({type: COMPLETE_PROFILE_SUCCESS, payload: res.data})
      history.push(`/user/${res.data.user.userId}}/dashboard`);
    })
    .catch(error => {
      dispatch({type: COMPLETE_PROFILE_ERROR, payload: error})
    });

  };
  const toCompleteCompanyUser = (myComp, isCompany, data) =>{
    myComp = window.location.pathname.slice(11, 35, window.location.pathname.lastIndexOf('/'));
    isCompany = window.location.pathname.slice(36,40, window.location.pathname.lastIndexOf('/'));

    userCompleteProfile(myComp, isCompany, data)
    .then(res => {
      dispatch({type: COMPLETE_PROFILE_SUCCESS, payload: res.data})
      history.push(`/user/${res.data.user.userId}/dashboard`);
    })
    .catch(error => {
      dispatch({type: COMPLETE_PROFILE_ERROR, payload: error})
    });

  };


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
        toCompleteCompany,
        toCompleteUser,
        toCompleteCompanyUser
      }}
    >

      {props.children}
    </AuthContext.Provider>
  )
}

