import React from 'react';
import { Link } from 'react-router-dom';
import { companyLogout } from '../../api/auth.api.js';
import { useHistory } from "react-router-dom";
import { slide as MenuCompany } from "react-burger-menu";
import styles from '../../CSS/companyDashboard.css';


export const CompanyDashboard = (props) => {
    /*   let token = localStorage.getItem('user');
      let parsedCurrentUserId = JSON.parse(token);
      let currentUserId = parsedCurrentUserId.userId; */
    const history = useHistory();

    const handleClickLogout = () => {
        companyLogout()
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history.push('/');

    }

    return (
        <div>
              <div>

<MenuCompany className='companyMenu' styles={styles} isOpen={true} noOverlay disableCloseOnEsc customBurgerIcon={<span className='menuspan'> <i className="fas fa-bars"></i>Menú </span>}>
<div></div>
<img className='gamanfy-logo-company-menu' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />

  <Link to={`/offers/${props.match.params.companyId}/post-job-offer`} className='btn-publicar-oferta' >PUBLICAR OFERTA</Link>

  <a href="/" className="menu-item">
    <i className="fas fa-home"></i> Inicio
 </a>


  <button className="menu-item btn-handler btn-misdatos">
    <i className="fas fa-user-alt"></i> Mis Datos
 </button>


  <button className="menu-item btn-handler-long-company">
    <i className="fas fa-briefcase"></i> Mis Ofertas de Empleo
  </button>


  <button className="menu-item btn-misSelec">
    <i className="fas fa-briefcase"></i> Mis procesos de Sel.
  </button>


  <a href="/" className="menu-item">
    <i className="fas fa-bars"></i> Mis Estadísticas
  </a>


  <a href="/" className="menu-item">
    <i className="fas fa-book-open"></i> Mi Microsite
                </a>

  <a href="/" className="menu-item">
    <i className="fas fa-question"></i> Ayuda
  </a>

</MenuCompany>
</div>
          
            <Link to={'/offers/dashboard'}>Offers Dashboard</Link>

            <button type="button" className="btn btn-lg btn-block  text-uppercase btn-danger text-light " onClick={handleClickLogout}>Desconectar</button>
        </div>
    )
}
