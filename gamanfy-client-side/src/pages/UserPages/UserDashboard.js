import React, { useState, useEffect } from 'react';
import { logout } from '../../api/auth.api.js';
import { useHistory} from "react-router-dom";
import { OffersDashboard } from '../Offers/OffersDashboard';
import { getUserData } from '../../api/users';
import '../../CSS/userDashboard.css';
import { slide as Menu } from "react-burger-menu";
import { UserEditProfile } from './UserEditProfile.js';


export const UserDashboard = (props) => {
  const history = useHistory();
  const [offers, setOffers] = useState(false);
  const [, setData] = useState([]);
  const [profile, setProfile] = useState(false);
  const [name, setName] = useState('')

  const handleClickLogout = () => {
    logout()
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/');

  }

  useEffect(() => {
    getUserData(props.match.params.userId).then(apiRes => {
      setData(apiRes.data)
      setName(apiRes.data.firstName)
    })
    getUserData(props.match.params.userId)
    
  }, [props.match.params.userId])
  
  const handleShowOffers = () => {
    setOffers(true)
    setProfile(false)
  }
  const handleShowProfile = () => {
    setProfile(true)
    setOffers(false)
  }

  return (
    <div>
      <div>

        <Menu isOpen={true} noOverlay customBurgerIcon={<span>  <i className="fas fa-bars"></i> Menú </span>}>

          <img className='logo-gamanfy-blue' src='/gamanfy_logo_dashboard_influencer.png' alt='logo-gamanfy' />

          <a href="/" className="menu-item">
            <i className="fas fa-home"></i> Inicio
         </a>


          <button onClick={handleShowProfile} className="menu-item btn-handler">
            <i className="fas fa-user-alt"></i> Mi perfil
         </button>


          <button onClick={handleShowOffers} className="menu-item btn-handler-long">
            <i className="fas fa-briefcase"></i> Ofertas de Empleo
          </button>


          <a href="/" className="menu-item">
            <i className="fas fa-check-circle"></i>Recomendaciones
         </a>


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


      <div className='offersPage' >
        <div className='userLog '>
          <h1 className='userName d-inline'>¡Hola {name}!</h1><button type="button" className="btn" onClick={handleClickLogout}><u>[ Cerrar Sesión ]</u></button>
        </div>

        <div >
          {offers ? <OffersDashboard {...props}/> : null}
          {profile ? <UserEditProfile {...props}/> : null}
         
        </div>
      </div>
    </div>

  )
}
