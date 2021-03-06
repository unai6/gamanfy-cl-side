import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthState } from "./context/auth/authState";
import { AnonRoute } from "./components/routes/AnonRoute";
import { PrivateRoute } from "./components/routes/PrivateRoute";
import {RouteToLogin} from './components/routes/RouteToLogin'
import { Route } from "react-router-dom";
import tokenAuth from './config/token';
import {Home} from './pages/Home';
import {PreLogin} from './pages/PreLogin';
import {Login} from "./pages/UserPages/Login";
import {Signup} from "./pages/UserPages/Signup";
import {SignUpMssg} from './pages/UserPages/SignUpMssg';
import ConfirmationToken from './pages/UserPages/ConfirmationToken';
import {UserCompleteProfile } from "./pages/UserPages/UserCompleteProfile";
import {UserDashboard} from './pages/UserPages/UserDashboard';
import {UserEditProfile} from './pages/UserPages/UserEditProfile'
import {CompanySignup} from './pages/CompanyPages/CompanySignup';
import {CompanySignUpMssg} from './pages/CompanyPages/CompanySignUpMssg'
import CompanyConfirmationToken from './pages/CompanyPages/CompanyConfirmationToken';
import {CompanyLogin} from './pages/CompanyPages/CompanyLogin';
import {CompanyCompleteProfile} from './pages/CompanyPages/CompanyCompleteProfile';
import {CompanyDashboard} from './pages/CompanyPages/CompanyDashboard';
import {CompanyEditProfile} from './pages/CompanyPages/CompanyEditProfile';
import { PostJobOffer } from "./pages/Offers/PostJobOffer";
import {OffersDashboard} from './pages/Offers/OffersDashboard';
import {OfferDetails} from './pages/Offers/OfferDetails';
import {Recommendations} from './pages/UserPages/Recommendations';
import  {SendRecommendation}  from "./pages/UserPages/SendRecommendation";
import {CompanyOffers} from './pages/Offers/CompanyOffers';
import { SelecProcess } from "./pages/CompanyPages/SelecProcess";
import {Candidates} from './pages/CompanyPages/Candidates';
import {CandidateReport} from './pages/CompanyPages/CandidateReport';
import {OfferDetailsAccept} from './pages/Offers/OfferDetailsAccept';
import {RejectRecommendation} from './pages/UserPages/RejectRecommendation';
import {ResetUserPassword} from './pages/UserPages/ResetUserPassword';
import {UserPasswordReset} from './pages/UserPages/UserPasswordReset';
import {ResetCompanyPassword} from './pages/CompanyPages/ResetCompanyPassword';
import {CompanyPasswordReset} from './pages/CompanyPages/CompanyPasswordReset';

const token = localStorage.getItem('token');
if(token) tokenAuth(token)

export const App = () => {
  
  return (
    <Router>
      <AuthState>
        {/* Influencer Routes */}
          <Switch>
          {
            token ?  
            <Route exact path="/" component={Home}/>
            :
            
            <AnonRoute exact path="/" component={Home}/>
          }
            <AnonRoute exact path="/auth/user/signup" component={Signup} />  
            <AnonRoute exact path='/auth/user/token-sent' component ={SignUpMssg}/> 
            <AnonRoute exact path='/auth/login' component={PreLogin}/>
            <AnonRoute exact path="/auth/user/login" component={Login} />   
            <AnonRoute exact path="/auth/confirmation/:userId/:userToken/:isCompany" component={ConfirmationToken} />  
            <AnonRoute exact path="/auth/user/:userId/:isCompany/complete-profile" component={UserCompleteProfile}/>
            <AnonRoute exact path='/recommend/user/reject-rec/:recommendationId/:offerId' component={RejectRecommendation}/>
            <PrivateRoute exact path='/user/:userId/dashboard' component={UserDashboard}/>
            <PrivateRoute exact path='/recommend/:userId/dashboard' component={Recommendations}/>
            <PrivateRoute exact path='/recommend/:companyId/:offerId/:userId' component={SendRecommendation}/>
            <PrivateRoute exact path='/user/:userId/edit-profile' component={UserEditProfile}/>
            <AnonRoute exact path='/auth/user/password-reset/:userId' component={ResetUserPassword}/>
            <AnonRoute exact path='/user/reset-password-email' component={UserPasswordReset}/>
            <AnonRoute exact path='/offer-details-accept-rec/:offerId/:recommendationId' component={OfferDetailsAccept}/>
          </Switch>

      {/* Company Routes */}
          <Switch>
            <AnonRoute exact path="/auth-co/company/signup" component={CompanySignup} />  
            <AnonRoute exact path='/auth-co/company/token-sent' component ={CompanySignUpMssg}/> 
            <AnonRoute exact path="/auth-co/confirmation/:companyId/:companyToken" component={CompanyConfirmationToken} />  
            <AnonRoute exact path="/auth-co/company/login" component={CompanyLogin} /> 
            <AnonRoute exact path='/auth-co/company/:companyId/complete-profile' component={CompanyCompleteProfile}/>
            <PrivateRoute exact path='/company/:companyId/dashboard' component={CompanyDashboard}/> 
            <PrivateRoute exact path='/company/:companyId/edit-profile' component={CompanyEditProfile}/>
            <PrivateRoute exact path='/company/:companyId/:offerId/my-processes' component={SelecProcess}/>
            <PrivateRoute exact path='/offers/:companyId/post-job-offer' component={PostJobOffer}/>   
            <PrivateRoute exact path = '/offers/dashboard' component={OffersDashboard}/>
            <PrivateRoute exact path ='/offers/getData/:companyId' component={CompanyOffers}/>
            <PrivateRoute exact path='/offer-details/:offerId' component={OfferDetails}/>
            <PrivateRoute exact path='/candidates/:offerId/:companyId' component={Candidates}/>
            <RouteToLogin exact path='/:recommendationId/candidate-info' component={CandidateReport}/>
            <AnonRoute exact path='/auth-co/company/password-reset/:companyId' component={ResetCompanyPassword}/>
            <AnonRoute exact path='/company/reset-password-email' component={CompanyPasswordReset}/>
             
          </Switch>
      </AuthState>
    </Router>
  );
};
