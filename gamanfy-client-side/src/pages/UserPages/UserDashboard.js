import React, { useState, useEffect } from 'react';
import { logout } from '../../api/auth.api.js';
import { useHistory } from "react-router-dom";
import { OffersDashboard } from '../Offers/OffersDashboard';
import { getUserData } from '../../api/users';
import { slide as Menu } from "react-burger-menu";
import { UserEditProfile } from './UserEditProfile.js';
import { Recommendations } from './Recommendations.js';
import { UserHomePage } from '../UserPages/UserHomePage';
import '../../CSS/userDashboard.css';
import { MyIncome } from './MyIncome.js';
import { Help } from './Help.js';
import {GamanfyAcademy} from '../GamanfyAcademy';

export const UserDashboard = (props, wholeProps) => {
  const history = useHistory();
  const [offers, setOffers] = useState(false);
  const [profile, setProfile] = useState(false);
  const [homePage, setHomePage] = useState(false);
  const [myIncome, setMyIncome] = useState(false);
  const [recommendations, setRecommendations] = useState(false)
  const [, setData] = useState([]);
  const [name, setName] = useState('');
  const [defaultContent, setDefaultContent] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  const [help, setHelp] = useState(false);
  const [showAcademy, setShowAcademy] = useState(false);

  const handleClickLogout = () => {
    logout()
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/');

  }

  useEffect(() => {
    const any = async () => {

      getUserData(props.match.params.userId).then(apiRes => {
        setData(apiRes.data);
        setName(apiRes.data.firstName)
      })
    }
    any()
  }, [props.match.params.userId, name])

  let customProps = {
    userName: name
  }

  const handleShowOffers = () => {
    setOffers(true);
    setProfile(false);
    setDefaultContent(false);
    setRecommendations(false);
    setHomePage(false);
    setMyIncome(false);
    setHelp(false);
    setShowAcademy(false);
  }
  const handleShowProfile = () => {
    setProfile(true);
    setOffers(false);
    setDefaultContent(false);
    setRecommendations(false);
    setHomePage(false);
    setMyIncome(false);
    setHelp(false);
    setShowAcademy(false);
  }

  const handleShowRecommendations = () => {
    setProfile(false);
    setOffers(false);
    setDefaultContent(false);
    setRecommendations(true);
    setHomePage(false);
    setMyIncome(false);
    setHelp(false);
    setShowAcademy(false);
  }

  const handleShowHomePage = () => {
    setProfile(false);
    setOffers(false);
    setDefaultContent(false);
    setRecommendations(false);
    setHomePage(true);
    setMyIncome(false);
    setHelp(false);
    setShowAcademy(false);
  }

  const handleShowMyIncome = () => {
    setProfile(false);
    setOffers(false);
    setDefaultContent(false);
    setRecommendations(false);
    setHomePage(false);
    setMyIncome(true);
    setHelp(false);
    setShowAcademy(false);
  }

  const handleShowHelp = () => {
    setHelp(!help);
    setProfile(false);
    setOffers(false);
    setDefaultContent(false);
    setRecommendations(false);
    setHomePage(false);
    setMyIncome(false);
    setShowAcademy(false);
  }

  const handleShowAcademy = () =>{
    setHelp(false);
    setProfile(false);
    setOffers(false);
    setDefaultContent(false);
    setRecommendations(false);
    setHomePage(false);
    setMyIncome(false);
    setShowAcademy(true);
  }

  const closeMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  }


  return (
    <div >
      <div>

        <Menu onStateChange={(state) => handleStateChange(state)} className='userMenu' isOpen={menuOpen} disableCloseOnEsc disableAutoFocus customBurgerIcon={<span> <img className ='logo-menuspan' src='/nav-logo-removebg-preview.png' alt='pic'/> </span>}>

          <img className='logo-gamanfy-blue' src='/logo_gamanfy_claro.png' alt='logo-gamanfy' />

          <button onClick={handleShowHomePage} onClickCapture={closeMenu} className="menu-item btn-handler btn-homeinfo">
            <i className="fas fa-home"></i> Inicio
          </button>



          <button onClick={handleShowProfile} onClickCapture={closeMenu} className="menu-item btn-handler">
            <i className="fas fa-user-alt"></i> Mi perfil
         </button>


          <button onClick={handleShowOffers} onClickCapture={closeMenu} className="menu-item btn-handler-long">
            <i className="fas fa-briefcase"></i> Ofertas de Empleo
          </button>


          <button onClick={handleShowRecommendations} onClickCapture={closeMenu} className="menu-item btn-handler-long">
            <i className="fas fa-briefcase"></i> Recomendaciones
          </button>


          <button onClick={handleShowMyIncome} onClickCapture={closeMenu} className="menu-item btn-handler-long">
            <i className="fas fa-briefcase"></i> Mis Ganancias
          </button>


          <button onClick={handleShowAcademy} onClickCapture={closeMenu} className="menu-item btn-handler-long">
          <i className="fas fa-book-open"></i> Gamanfy Academy
          </button>
         
          <button onClick={handleShowHelp} onClickCapture={closeMenu} className="menu-item btn-handler-long">
          <i className="fas fa-question"></i> Ayuda
          </button>
       
        </Menu>
      </div>
      {
        defaultContent === true ?
          <>
            <div className='userLog '>
              <h1 className='userName d-inline'>¡Hola {name}!</h1><button type="button" className="btn" onClick={handleClickLogout}><u>[ Cerrar Sesión ]</u></button>
            </div>
            <OffersDashboard {...props} />
          </>
          :

          <div className='offersPage' >
            <div className='userLog '>
              <h1 className='userName d-inline'>¡Hola {name}!</h1><button type="button" className="btn" onClick={handleClickLogout}><u>[ Cerrar Sesión ]</u></button>
            </div>

            <div >
              {offers ? <OffersDashboard {...props} /> : null}
              {profile ? <UserEditProfile {...props} /> : null}
              {recommendations ? <Recommendations {...props} /> : null}
              {homePage ? <UserHomePage {...customProps} /> : null}
              {myIncome ? <MyIncome {...props}/> :null}
              {help ? <Help/> : null}
              {showAcademy ? <GamanfyAcademy/> : null}
            </div>
          </div>
      }
    </div>

  )
}
