import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { companyLogout } from '../../api/auth.api.js';
import { useHistory } from "react-router-dom";
import { slide as MenuCompany } from "react-burger-menu";
import { getCompanyData } from '../../api/users'
import '../../CSS/companyDashboard.css';
import { CompanyOffers } from '../Offers/CompanyOffers';
import { CompanyEditProfile } from '../CompanyPages/CompanyEditProfile';
import { PostJobOffer } from '../Offers/PostJobOffer';
import { SelecProcess } from './SelecProcess.js';
import { sendCompanyRecommendation } from '../../api/recommendations';
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { HomePage } from '../CompanyPages/HomePage';
import { specificEducation, sectors, areas, howMetCandidateArray } from '../../FolderForSelects/htmlSelects';
import { competencesJS } from '../../FolderForSelects/competencesJS';
import { languageOptions } from '../../FolderForSelects/languageOptions';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export const CompanyDashboard = (props) => {

  const [recAreas, setRecAreas] = useState(areas);
  const [sector, setSector] = useState(sectors);
  const { handleSubmit, errors, register } = useForm();
  const history = useHistory();
  const [, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [showPostedOffers, setShowPostedOffers] = useState(true);
  const [defaultContent, setDefaultContent] = useState(true);
  const [processes, setShowProcesses] = useState(false);
  const [postJobOfferOffers, setPostJobOffers] = useState(false);
  const [homePage, setHomePage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const [profile, setProfile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [competences, setCompetences] = useState([]);
  const [infoSent, setInfoSent] = useState(false);
  const animatedComponents = makeAnimated();
  const [specEducation, setSpecEducation] = useState(specificEducation);
  const [howMetCandidate, setHowMetCandidate] = useState(howMetCandidateArray);
  const [language, setLanguage] = useState([]);

  const areasMap = recAreas.map(areasMap => areasMap);
  const sectorTypeMap = sector.map(sectorTypeMap => sectorTypeMap);
  const specificEducationMap = specEducation.map(specificEducationMap => specificEducationMap)
  const howMetCandidateMap = howMetCandidate.map(howMetCandidateMap => howMetCandidateMap);

  const handleAreas = () => setRecAreas(areasMap);
  const handleSector = () => setSector(sectorTypeMap);
  const handleHowMetCandidate = () => setHowMetCandidate(howMetCandidateMap)
  const handleSpecificEducation = () => setSpecEducation(specificEducationMap)

  let competencesToSet = competencesJS.map((comp, index) => {
    return {
      label: comp.label,
      value: comp.value,
      key: index,
    }
  });

  let languageOptionsToSet = languageOptions.map((lang, index) => {
    return {
      label: lang.label,
      value: lang.value,
      key: index,
    }
  });

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: 'rgb(255, 188, 73)',
        primary: 'blue'
      }
    }
  }

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

  let customProps = {
    userName: firstName
  }

  const handleShowPostedOffers = () => {
    setShowPostedOffers(true);
    setDefaultContent(false);
    setShowProcesses(false);
    setPostJobOffers(false);
    setHomePage(false)
    setProfile(false);

  }

  const forceReload = () => {
    document.location.reload(true);
  }
  const handleShowProfile = () => {
    setProfile(true);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(false);
    setPostJobOffers(false);
    setHomePage(false)
  }

  const handleShowMyProcesses = () => {
    setProfile(false);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(true);
    setPostJobOffers(false);
    setHomePage(false)
  }

  const handleShowOffersToPost = () => {
    setProfile(false);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(false);
    setPostJobOffers(true);
    setHomePage(false)
  }

  const handleShowHomePage = () => {
    setProfile(false);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(false);
    setPostJobOffers(false);
    setHomePage(true)
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
          <img className='gamanfy-logo-company-menu' src='/logo_gamanfy_claro.png' alt='logo-gamanfy' />

          <button onClick={handleShowOffersToPost} onClickCapture={closeMenu} className='btn-publicar-oferta' >PUBLICAR OFERTA</button>
          <p className='p-modal-dash' onClick={showModal} onClickCapture={closeMenu}><u>Recomendar a un profesional</u></p>

          <Modal className='modal-sendRec-company' centered show={isOpen} onHide={hideModal}>
            <form className='signUp-form send-rec-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
              <h4 className='h4-sendRec' style={{ textAlign: 'left', fontSize: '1.4em' }}>¿Te ha costado tener que elegir entre dos candidatos finalistas en un proceso de selección externo o has tenido que finalizar el contrato de un empleado por razón económico o organizacional?</h4>

              <p className='p-signup text-justify mt-5'>¡Esta herramienta Gamanfy es para ti!</p>
              <p className='p-signup text-justify mt-2'>Ha sido creado específicamente para mejorar la experiencia del candidato. Te permite recomendar y invitar a cualquier profesional para que forme parte de nuestra plataforma. <br /> Recomienda un profesional ahora y le buscaremos la mejor oferta de trabajo.</p>
              <div>
                <p className='p-signup text-justify mt-2'>
                  ¡No olvides llamarla o comunicarte con ella primero para preguntarte si tiene interés en participar en este oferta!
                                    </p>
              </div>
              <div>
                <p className='p-signup text-left'>
                  Datos del Candidato
                </p>

              </div>
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
                  placeholder='Escribe su email'
                  className='form-control signup-fields mx-auto'
                  ref={register({
                    required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                  })} />
              </div>

              <label>

                <select
                  name='howMet'
                  className='form-control signup-fields fields-rec mx-auto'
                  ref={register}
                  onChange={e => handleHowMetCandidate(e)}

                >
                  {
                    howMetCandidateMap.map((doc, key) => {

                      return <option key={key} value={doc}>{doc}</option>;

                    })

                  }
                </select>
              </label>

              <div>
                <p className='p-signup text-left'>
                  Datos del Candidato
                </p>

              </div>

              <h4 className='h4-sendRec mb-4' style={{ textAlign: 'left' }}>Informe del Candidato</h4>

              <label>
                <div><label>¿Para que Sector recomiendas esta persona?</label></div>

                <select
                  name='sectorBestFit'
                  className='form-control signup-fields mx-auto'
                  ref={register({ required: true })}
                  onChange={e => handleSector(e)}
                >
                  {
                    sectorTypeMap.map((doc, key) => {

                      return <option key={key} value={doc}>{doc}</option>;

                    })

                  }
                </select>
              </label>

              <label>
                <div><label>¿Para que departamento recomiendas esta persona?</label></div>

                <select
                  name='departmentBestFit'
                  className='form-control signup-fields mx-auto'
                  ref={register({ required: true })}
                  onChange={e => handleAreas(e)}
                >
                  {
                    areasMap.map((doc, key) => {

                      return <option key={key} value={doc}>{doc}</option>;

                    })

                  }
                </select>
              </label>

              <textarea
                style={{ height: '8em' }}
                type="textarea"
                name="whyRec"
                ref={register({ required: true })}
                className='form-control signup-fields mx-auto'
                placeholder='Indica porqué recomendarías a este profesional.'
                maxLength="4000"
              />

              <>
                <div>
                  <label>Si tuvieras que describirle ¿Cuál dirías que son sus 3 competencias principales?</label>
                  <Select
                    closeMenuOnSelect={false}
                    theme={customTheme}
                    components={animatedComponents}
                    placeholder='Seleccionar'
                    isMulti
                    isSearchable
                    options={competencesToSet}
                    onChange={setCompetences}
                    noOptionsMessage={() => 'No existen más opciones'}
                    name="competences"
                    value={competences}
                  />
                  {!props.disabled && competences !== null && (<input name='competences' type='hidden' ref={register} onChange={setCompetences} value={JSON.stringify(competences.map(comp => comp.value))} />)}


                </div>
              </>
              <label>

                <div><label>¿Qué conocimiento específico tiene el candidato?</label></div>
                <select
                  name='specificEducation'
                  className='form-control signup-fields fields-rec mx-auto'
                  ref={register({ required: true })}
                  onChange={e => handleSpecificEducation(e)}
                >
                  {
                    specificEducationMap.map((doc, key) => {

                      return <option key={key} value={doc}>{doc}</option>;

                    })

                  }
                </select>
              </label>

              <>
                <div>
                  <label>¿Qué idiomas habla?</label>
                  <Select

                    closeMenuOnSelect={false}
                    theme={customTheme}
                    components={animatedComponents}
                    placeholder='Seleccionar'
                    isMulti
                    isSearchable
                    options={languageOptionsToSet}
                    onChange={setLanguage}
                    noOptionsMessage={() => 'No existen más opciones'}
                    name="language"
                    value={language}
                  />

                  {language !== null && (<input name='language' type='hidden' ref={register} onChange={setLanguage} value={JSON.stringify(language.map(lang => lang.value))} />)}
                </div>
              </>

              <div className='mt-3'>
                <label>¿Donde se localiza el candidato?</label>
                <input
                  type="text"
                  name="candidateLocation"
                  className='form-control signup-fields fields-rec mx-auto'
                  ref={register}
                  placeholder='Madrid' />

              </div>

              <div>
                <textarea
                  style={{ height: '6em' }}
                  type="textarea"
                  name="otherAspects"
                  className='form-control signup-fields fields-rec mx-auto'
                  ref={register}
                  placeholder='Otros Aspectos'
                  maxLength="4000"
                />
              </div>
              <button onSubmitCapture={hideModal} onClick={forceReload} className='btn-cacc-su d-block mx-auto' style={{ width: '18em', marginBottom: '2em' }}> ENVIAR RECOMENDACIÓN</button>
            </form>
          </Modal>


          <button onClick={handleShowHomePage} onClickCapture={closeMenu} className="menu-item btn-handler btn-misdatos">
            <i className="fas fa-home"></i> Inicio
          </button>


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

            <div>
              {showPostedOffers ? <CompanyOffers {...props} /> : null}
              {profile ? <CompanyEditProfile {...props} /> : null}
              {processes ? <SelecProcess {...props} /> : null}
              {postJobOfferOffers ? <PostJobOffer {...props} /> : null}
              {homePage ? <HomePage {...customProps} /> : null}

            </div>
          </div>
      }



    </div>
  )
}
