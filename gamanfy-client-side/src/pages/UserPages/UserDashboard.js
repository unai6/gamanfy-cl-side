import React, { useState, useEffect } from 'react';
import { logout } from '../../api/auth.api.js';
import { useHistory} from "react-router-dom";
import { OffersDashboard } from '../Offers/OffersDashboard';
import { getUserData } from '../../api/users';
import { slide as Menu } from "react-burger-menu";
import { UserEditProfile } from './UserEditProfile.js';
import { Recommendations } from './Recommendations.js';
import  '../../CSS/userDashboard.css';

export const UserDashboard = (props) => {
  const history = useHistory();
  const [offers, setOffers] = useState(false);
  const [profile, setProfile] = useState(false);
  const [recommendations, setRecommendations] = useState(false)
  const [, setData] = useState([]);
  const [name, setName]= useState('');
  const [defaultContent, setDefaultContent] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  

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
  }, [props.match.params.userId])

  const handleShowOffers = () => {
    setOffers(true)
    setProfile(false)
    setDefaultContent(false)
    setRecommendations(false)
  }
  const handleShowProfile = () => {
    setProfile(true)
    setOffers(false)
    setDefaultContent(false)
    setRecommendations(false)
  }

  const handleShowRecommendations = () => {
    setProfile(false)
    setOffers(false)
    setDefaultContent(false)
    setRecommendations(true)
  }

  const closeMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleStateChange = (state) =>{
    setMenuOpen(state.isOpen)
  }

  return (
    <div >
      <div>

        <Menu onStateChange={(state) => handleStateChange(state)} className='userMenu' isOpen={menuOpen} disableCloseOnEsc disableAutoFocus customBurgerIcon={<span className='menuspan'> <i className="fas fa-bars"></i>Menú </span>}>

          <img className='logo-gamanfy-blue' src='/logo_gamanfy_claro.png' alt='logo-gamanfy' />

          <a href="/" className="menu-item">
            <i className="fas fa-home"></i> Inicio
         </a>


          <button onClick ={handleShowProfile} onClickCapture={closeMenu} className="menu-item btn-handler">
            <i className="fas fa-user-alt"></i> Mi perfil
         </button>


          <button onClick={handleShowOffers} onClickCapture={closeMenu} className="menu-item btn-handler-long">
            <i className="fas fa-briefcase"></i> Ofertas de Empleo
          </button>


          <button onClick={handleShowRecommendations} onClickCapture={closeMenu} className="menu-item btn-handler-long">
            <i className="fas fa-briefcase"></i> Recomendaciones
          </button>


          <a href="/" className="menu-item">
            <i className="fas fa-bars"></i> Mis ganancias
          </a>


          <a href="/" className="menu-item">
            <i className="fas fa-book-open"></i> Gamanfy Academy
                        </a>


          <a href="/" className="menu-item">
            <i className="fas fa-question"></i> Ayuda
          </a>

        </Menu>
      </div>
    {
      defaultContent === true ?
      <>
      <div className='userLog '>
          <h1 className='userName d-inline'>¡Hola {name}!</h1><button type="button" className="btn" onClick={handleClickLogout}><u>[ Cerrar Sesión ]</u></button>
        </div>
      <OffersDashboard {...props}/> 
      </>
      :

      <div className='offersPage' >
        <div className='userLog '>
          <h1 className='userName d-inline'>¡Hola {name}!</h1><button type="button" className="btn" onClick={handleClickLogout}><u>[ Cerrar Sesión ]</u></button>
        </div>

        <div  >
          {offers ? <OffersDashboard {...props}/> : null}
          {profile ? <UserEditProfile {...props}/> : null}
          {recommendations ? <Recommendations {...props}/> : null}
        </div>
      </div>
    }
    </div>

  )
}
