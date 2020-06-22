import React, { useState, useEffect } from 'react';
import { logout } from '../../api/auth.api.js';
import { useHistory, Link } from "react-router-dom";
import { OffersDashboard } from '../Offers/OffersDashboard';
import { getUserData } from '../../api/users';
import '../../CSS/userDashboard.css';
import { slide as Menu } from "react-burger-menu";

export const UserDashboard = (props) => {
  const history = useHistory();
  const [offers, setOffers] = useState(false);
  const [data, setData] = useState([]);
  

  const handleClickLogout = () => {
    logout()
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/');

  }

  useEffect(() => {
    getUserData(props.match.params.userId).then(apiRes => {
      setData(apiRes.data)
    })
    getUserData(props.match.params.userId)

  }, [props.match.params.userId])

  const handleClickShowOffers = () => {
    setOffers(!offers)

  }

  return (
    <div >
      <div>

        <Menu isOpen={true} noOverlay customBurgerIcon={<span>  <i className="fas fa-bars"></i> Menú </span>}>

          <img className='logo-gamanfy-blue' src='/gamanfy_logo_dashboard_influencer.png' alt='logo-gamanfy' />

          <a href="/" className="menu-item">
            <i className="fas fa-home"></i> Inicio
         </a>


          <a href={`/auth/user/${props.match.params.userId}/edit-profile`} className="menu-item">
            <i className="fas fa-user-alt"></i> Mi perfil
         </a>


          <a onClick={handleClickShowOffers} className="menu-item">
            <i className="fas fa-briefcase"></i> Ofertas de Empleo
          </a>


          <a href="#" className="menu-item">
            <i className="fas fa-check-circle"></i>Recomendaciones
         </a>


          <a href="#" className="menu-item">
            <i className="fas fa-bars"></i> Mis ganancias
          </a>


          <a href="#" className="menu-item">
            <i className="fas fa-book-open"></i> Gamanfy Academy
                        </a>


          <a href="#" className="menu-item">
            <i className="fas fa-question"></i> Ayuda
          </a>

        </Menu>
      </div>


      <div className='offersPage' >
        <div>
          <div className='userLog '>
            <h1 className='userName d-inline'>¡Hola {data.firstName}!</h1><button type="button" className="btn" onClick={handleClickLogout}><u>[ Cerrar Sesión ]</u></button>
          </div>
          <div >
            {offers ? <OffersDashboard /> : null}
          </div>
        </div>
      </div>


    </div>

  )
}
