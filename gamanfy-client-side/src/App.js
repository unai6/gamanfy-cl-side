import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthState } from "./context/auth/authState";
import { AnonRoute } from "./components/routes/AnonRoute";
import { PrivateRoute } from "./components/routes/PrivateRoute";
import { Route } from "react-router-dom";
import tokenAuth from './config/token';
import Home from './pages/Home';
import {Login} from "./pages/Login";
import {Signup} from "./pages/Signup";
import {SignUpMssg} from './pages/SignUpMssg';
import {UserDashboard} from './pages/UserDashboard';
import ConfirmationToken from './pages/ConfirmationToken';
import {CompanyLogin} from './pages/CompanyLogin';
import {CompanySignup} from './pages/CompanySignup';
import {CompanySignUpMssg} from './pages/CompanySignUpMssg'
import {CompanyDashboard} from './pages/CompanyDashboard';
import CompanyConfirmationToken from './pages/CompanyConfirmationToken';
import {UserCompanyCompleteProfile } from "./pages/UserCompanyCompleteProfile";
import {PreLogin} from './pages/PreLogin';

const token = localStorage.getItem('token');
if(token) tokenAuth(token)

export const App = () => {
  return (
    <Router>
      <AuthState>
          <Switch>
            <Route exact path="/" component={Home}/>
            <AnonRoute exact path="/auth/user/signup" component={Signup} />  
            <AnonRoute exact path='/auth/user/token-sent' component ={SignUpMssg}/> 
            <AnonRoute exact path='/auth/login' component={PreLogin}/>
            <AnonRoute exact path="/auth/user/login" component={Login} />   
            <AnonRoute exact path="/auth/confirmation/:userId/:userToken/:isCompany" component={ConfirmationToken} />  
            <PrivateRoute exact path='/user/:userId/dashboard' component={UserDashboard}/>
            <AnonRoute exact path="/auth-co/company/signup" component={CompanySignup} />  
            <AnonRoute exact path='/auth-co/company/token-sent' component ={CompanySignUpMssg}/> 
            <AnonRoute exact path="/auth-co/company/login" component={CompanyLogin} /> 
            <AnonRoute exact path="/auth/user/:userId/:isCompany/complete-profile" component={UserCompanyCompleteProfile}/>
            <AnonRoute exact path="/auth-co/confirmation/:companyId/:companyToken" component={CompanyConfirmationToken} />  
            <PrivateRoute exact path='/company/:companyId/dashboard' component={CompanyDashboard}/>     
          </Switch>
      </AuthState>
    </Router>
  );
};
