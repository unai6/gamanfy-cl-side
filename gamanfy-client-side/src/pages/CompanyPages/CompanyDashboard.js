import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyLogout } from '../../api/auth.api.js';
import { useHistory } from "react-router-dom";
import { slide as MenuCompany } from "react-burger-menu";
import { getCompanyData } from '../../api/users'
import '../../CSS/companyDashboard.css';
import { CompanyOffers } from '../Offers/CompanyOffers';
import { CompanyEditProfile } from '../CompanyPages/CompanyEditProfile';
import { SelecProcess } from './SelecProcess.js';
import { sendCompanyRecommendation } from '../../api/recommendations';
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

export const CompanyDashboard = (props) => {
  const { handleSubmit, errors, register } = useForm();
  const history = useHistory();
  const [, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [showPostedOffers, setShowPostedOffers] = useState(true);
  const [defaultContent, setDefaultContent] = useState(true);
  const [processes, setShowProcesses] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const [profile, setProfile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [infoSent, setInfoSent] = useState(false);

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
    setShowProcesses(false)
  }


  const handleShowProfile = () => {
    setProfile(true);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(false)

  }

  const handleShowMyProcesses = () => {
    setProfile(false);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(true)
  }

  const closeMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen)
  }

  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };

  const onSubmit = data => {
    sendCompanyRecommendation(props.match.params.companyId, data).then(() => {
      console.log(data)
      setInfoSent(!infoSent)
      history.push(`/company/${props.match.params.companyId}/dashboard`)
    })
  }

  return (
    <div>
      <div>

        <MenuCompany onStateChange={(state) => handleStateChange(state)} className='companyMenu' isOpen={menuOpen} disableCloseOnEsc disableAutoFocus customBurgerIcon={<span className='menuspan'> <i className="fas fa-bars"></i>Menú </span>}>
          <div></div>
          <img className='gamanfy-logo-company-menu' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />

          <Link to={`/offers/${props.match.params.companyId}/post-job-offer`} className='btn-publicar-oferta' >PUBLICAR OFERTA</Link>
          <p className='p-modal-dash' onClick={showModal} onClickCapture={closeMenu}><u>Recomendar a un profesional</u></p>

          <Modal centered show={isOpen} onHide={hideModal}>
            <form className='form-company-rec' onSubmit={handleSubmit(onSubmit)}>
              <p className='p-modal-offer mt-1' name='header'>Recomendar a un Profesional</p>
              <div>
                <input
                  type="text"
                  name="recommendedFirstName"
                  className='form-control signup-fields mx-auto'
                  ref={register({ required: true })}
                  placeholder='Nombre del Recomendado' />
              </div>

              <div>
                <input
                  type="text"
                  name="recommendedLastName"
                  className='form-control signup-fields mx-auto'
                  ref={register({ required: true })}
                  placeholder='Apellidos del Recomendado' />
              </div>

              <div>
                {errors.email && <span> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
                <input
                  type="text"
                  name="recommendedEmail"
                  placeholder='Escribe sun email'
                  className='form-control signup-fields mx-auto'
                  ref={register({
                    required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                  })} />
              </div>
              <textarea
                style={{ height: '8em' }}
                type="textarea"
                name="whyRec"
                ref={register({ required: true })}
                className='form-control signup-fields mx-auto'
                placeholder='Indica porqué recomendarías a este profesional y comparte su información de contacto (Máx. 4000 caracteres)'
                maxLength="4000"
              />
              <p className='p-cacc'> <input type="submit" onClick={hideModal} className='btn-cacc-su' style={{ width: '15em' }} value='Recomendar Profesional' /> </p>

            </form>
          </Modal>

          <a href="/" className="menu-item">
            <i className="fas fa-home"></i> Inicio
          </a>


          <button onClick={handleShowProfile} onClickCapture={closeMenu} className="menu-item btn-handler btn-misdatos">
            <i className="fas fa-user-alt"></i> Mis Datos
          </button>


          <button onClick={handleShowPostedOffers} onClickCapture={closeMenu} className="menu-item btn-handler-long-company">
            <i className="fas fa-briefcase"></i> Mis Ofertas de Empleo
          </button>


          <button onClick={handleShowMyProcesses} onClickCapture={closeMenu} className="menu-item btn-misSelec">
            <i className="fas fa-briefcase"></i> Mis procesos de Sel.
          </button>

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
            <Link to='' />
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
              {showPostedOffers ? <CompanyOffers {...props} /> : null}
              {profile ? <CompanyEditProfile {...props} /> : null}
              {processes ? <SelecProcess {...props} /> : null}

            </div>
          </div>
      }



    </div>
  )
}
