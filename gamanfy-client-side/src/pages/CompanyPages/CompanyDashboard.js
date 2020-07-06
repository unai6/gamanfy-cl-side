import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyLogout } from '../../api/auth.api.js';
import { useHistory } from "react-router-dom";
import { slide as MenuCompany } from "react-burger-menu";
import { getCompanyData } from '../../api/users'
import '../../CSS/companyDashboard.css';
import { CompanyOffers } from '../Offers/CompanyOffers';
import {CompanyEditProfile} from '../CompanyPages/CompanyEditProfile';

export const CompanyDashboard = (props) => {

  const history = useHistory();
  const [, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [showPostedOffers, setShowPostedOffers] = useState(true);
  const [defaultContent, setDefaultContent] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  const [profile, setProfile] = useState(false)

  const handleClickLogout = () => {
    companyLogout()
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/');

  };

  useEffect(() => {
    const any = async () => {
        getCompanyData(props.match.params.companyId).then(apiRes => {
        setData(apiRes.data.user)
        setFirstName(apiRes.data.user.firstName)
        
      })
    }
    any()
  }, [props.match.params.companyId]);


  const handleShowPostedOffers = () => {
    setShowPostedOffers(true)
    setDefaultContent(false)
  }

  const handleShowProcess = () => {
    setShowPostedOffers(false);
  }

  const handleShowProfile = () => {
    setProfile(true)
    setShowPostedOffers(false)
    setDefaultContent(false)
    
  }

  const closeMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleStateChange = (state) =>{
    setMenuOpen(state.isOpen)
  }

  return (
    <div>
      <div>

        <MenuCompany onStateChange={(state) => handleStateChange(state)} className='companyMenu' isOpen={menuOpen} disableCloseOnEsc disableAutoFocus customBurgerIcon={<span className='menuspan'> <i className="fas fa-bars"></i>Menú </span>}>
          <div></div>
          <img className='gamanfy-logo-company-menu' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />

          <Link to={`/offers/${props.match.params.companyId}/post-job-offer`} className='btn-publicar-oferta' >PUBLICAR OFERTA</Link>

          <a href="/" className="menu-item">
            <i className="fas fa-home"></i> Inicio
          </a>


          <button onClick={handleShowProfile} className="menu-item btn-handler btn-misdatos">
            <i className="fas fa-user-alt"></i> Mis Datos
          </button>


          <button onClick={handleShowPostedOffers} onClickCapture={closeMenu} className="menu-item btn-handler-long-company">
            <i className="fas fa-briefcase"></i> Mis Ofertas de Empleo
          </button>


          <button onClick={handleShowProcess} onClickCapture={closeMenu} className="menu-item btn-misSelec">
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

      {


        defaultContent === true ?
          <>
          <Link to=''/>
            <div className='userLog '>
              <h1 className='userName d-inline'>¡Hola {firstName}!</h1><button type="button" className="btn" onClick={handleClickLogout}><u>[ Cerrar Sesión ]</u></button>
            </div>
            <CompanyOffers {...props} />
          </>
          :

          <div className='offersPage' >
            <div className='userLog '>
              <h1 className='userName d-inline'>¡Hola {firstName}!</h1><button type="button" className="btn" onClick={handleClickLogout}><u>[ Cerrar Sesión ]</u></button>
            </div>

            <div  >
              { showPostedOffers ? <CompanyOffers {...props} /> : null}
              { profile ? <CompanyEditProfile {...props}/> : null} 

            </div>
          </div>
      }



    </div>
  )
}
