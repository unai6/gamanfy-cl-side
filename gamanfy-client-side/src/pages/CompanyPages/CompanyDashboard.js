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
import { CompanyHelp } from '../CompanyPages/CompanyHelp';
import { EmployerBranding } from '../CompanyPages/EmployerBranding';
import { sectors, areas, howMetCandidateArray } from '../../FolderForSelects/htmlSelects';
import { competencesJS } from '../../FolderForSelects/competencesJS';
import { languageOptions } from '../../FolderForSelects/languageOptions';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';
// import { error } from 'jquery';

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
  const [companyHelp, setCompanyHelp] = useState(false);
  const [employerBranding, setEmployerBranding] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [competences, setCompetences] = useState([]);
  const [infoSent, setInfoSent] = useState(false);
  const animatedComponents = makeAnimated();
  const [howMetCandidate, setHowMetCandidate] = useState(howMetCandidateArray);
  const [language, setLanguage] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState([]);
  const [sectorError, setSectorError] = useState(false);
  const [areasError, setAreasError]= useState(false);

  const areasMap = recAreas.map(areasMap => areasMap);
  const sectorTypeMap = sector.map(sectorTypeMap => sectorTypeMap);
  const howMetCandidateMap = howMetCandidate.map(howMetCandidateMap => howMetCandidateMap);

  const handleAreas = (e) => {
    if(e.target.value !== 'Seleccionar'){
      setAreasError(false)
    }
    setRecAreas(areasMap);
  
  };
  const handleSector = (e) => {
    if(e.target.value !== 'Seleccionar'){
      setSectorError(false);
    }
    setSector(sectorTypeMap);
  };  
  
  const handleHowMetCandidate = () => setHowMetCandidate(howMetCandidateMap)

  const handleSubmitErrors = () => {
  
    if (sector[0] === 'Seleccionar') {
      setSectorError(true);
    };

    if(recAreas[0] === 'Seleccionar'){
      setAreasError(true);
    };
  }

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


  const components = {
    DropdownIndicator: null,
  };


  const createOption = (label) => ({
    label,
    value: label,
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


  const handleInputChange = (inputValue) => {
    setInputValue(inputValue)
  };

  const handleChange = (value) => {
    setValue(value)
  };

  const handleKeyDown = (event) => {
    event = event || window.event
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
      case 13:
      case 229:
      case 32:
        setInputValue('')
        if (value !== null) {
          setValue([...value, createOption(inputValue)])
        } else {
          setValue([createOption(inputValue)])
        }
        event.preventDefault();
        break;
      default: return;
    }
  };


  const handleClickLogout = () => {
    companyLogout()
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/');
    document.location.reload()

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
    setHomePage(false);
    setProfile(false);
    setEmployerBranding(false);
    setCompanyHelp(false);

  }


  const handleShowProfile = () => {
    setProfile(true);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(false);
    setPostJobOffers(false);
    setHomePage(false);
    setEmployerBranding(false);
    setCompanyHelp(false);
  }

  const handleShowMyProcesses = () => {
    setProfile(false);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(true);
    setPostJobOffers(false);
    setHomePage(false);
    setEmployerBranding(false);
    setCompanyHelp(false);
  }

  const handleShowOffersToPost = () => {
    setProfile(false);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(false);
    setPostJobOffers(true);
    setHomePage(false);
    setEmployerBranding(false);
    setCompanyHelp(false);
  }

  const handleShowHomePage = () => {
    setProfile(false);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(false);
    setPostJobOffers(false);
    setHomePage(true);
    setEmployerBranding(false);
    setCompanyHelp(false);
  }

  const handleShowEmployerBranding = () => {
    setProfile(false);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(false);
    setPostJobOffers(false);
    setHomePage(false);
    setEmployerBranding(true);
    setCompanyHelp(false);
  }

  const handleShowHelp = () => {
    setProfile(false);
    setShowPostedOffers(false);
    setDefaultContent(false);
    setShowProcesses(false);
    setPostJobOffers(false);
    setHomePage(false);
    setEmployerBranding(false);
    setCompanyHelp(false);
    setCompanyHelp(true);
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
      setInfoSent(!infoSent)
      history.push(`/company/${props.match.params.companyId}/dashboard`);
      document.location.reload();
    })
  }


  return (
    <div>
      <div>

        <MenuCompany onStateChange={(state) => handleStateChange(state)} className='companyMenu' isOpen={menuOpen} disableCloseOnEsc disableAutoFocus customBurgerIcon={<span className='menuspan p-inputs'> <img className='logo-menuspan' src='/LogoCortoAltaFidelidad.png' alt='pic' /> </span>}>
          <div></div>
          <img className='gamanfy-logo-company-menu' src='/LOGO_BLANCO_ALTA_CALIDAD_LARGO.png' alt='logo-gamanfy' />

          <button onClick={handleShowOffersToPost} onClickCapture={closeMenu} className='btn-publicar-oferta' >PUBLICAR OFERTA</button>
          <p className='p-modal-dash' onClick={showModal} onClickCapture={closeMenu}><u>Recomendar a un profesional</u></p>

          <Modal className='modal-sendRec-company' centered show={isOpen} onHide={hideModal}>
            <form className='signUp-form send-rec-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
              <h4 className='h4-sendRec' style={{ textAlign: 'left', fontSize: '1.4em' }}>¿Alguna vez te ha costado elegir entre dos candidatos finalistas en un proceso de selección, o has tenido que finalizar el contrato de un empleado por razones económicas?</h4>

              <p className='p-signup text-justify mt-5'>¡Entonces Gamanfy es para ti!</p>
              <p className='p-signup text-justify mt-2'>Hemos creado esta herramienta especialmente para mejorar la experiencia del candidato. Te permite recomendar e invitar a cualquier profesional para que forme parte de nuestra plataforma.</p>
              <p className='p-signup text-justify mt-2'>Recomienda un profesional ahora y le buscaremos la mejor oferta de trabajo.</p>
              <div>
                <p className='p-signup text-justify mt-2'>
                ¡No olvides llamar o comunicarte previamente con el profesional para preguntarle si tiene interés en participar en nuestra plataforma!</p>
              </div>
              <div>
                <p className='p-signup text-left'>
                  Datos del Candidato
                </p>

              </div>
              {errors.recommendedFirstName && <span className='text-danger'>Este campo es obligatorio</span>}
              <div>
                <input
                  type="text"
                  name="recommendedFirstName"
                  className={errors.recommendedFirstName ? 'form-control signup-fields fields-rec mx-auto border-danger text-danger' : 'form-control signup-fields fields-rec mx-auto' }
                  ref={register({ required: true })}
                  placeholder='Nombre del Recomendado*' />
              </div>
              {errors.recommendedLastName && <span className='text-danger'>Este campo es obligatorio</span>}
              <div>
                <input
                  type="text"
                  name="recommendedLastName"
                  className={errors.recommendedLastName ? 'form-control signup-fields fields-rec mx-auto border-danger text-danger' : 'form-control signup-fields fields-rec mx-auto' }
                  ref={register({ required: true })}
                  placeholder='Apellidos del Recomendado*' />
              </div>

              <div>
                {errors.recommendedEmail && <span className='text-danger'> {errors.recommendedEmail.message ? errors.recommendedEmail.message : 'Este campo es obligatorio'} </span>}
                <input
                  type="text"
                  name="recommendedEmail"
                  placeholder='Escribe su email*'
                  className={ errors.recommendedEmail ? ' border-danger text-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto' }
                  ref={register({
                    required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                  })} />
              </div>
              <div>
                <div><label>Enlace Linkedin del profesional</label></div>
                <input
                  type="text"
                  name="recommendedLinkedin"
                  className='form-control signup-fields fields-rec mx-auto'
                  placeholder='Añade el Link a su perfil de Linkedin'
                  ref={register}
                />
              </div>

              <label>
                <div><label>¿Cómo os habéis conocido?</label></div>
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

              <label>
                {sectorError && <span className='text-danger'>Este campo es obligatorio</span>}
                <div><label>¿Para qué Sector recomiendas esta persona?*</label></div>

                <select
                  name='sectorBestFit'
                  className={sectorError ? ' border-danger text-danger form-control signup-fields mx-auto' : 'form-control signup-fields mx-auto'}
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

              <label><br/>
                {areasError && <span className='text-danger'>Este campo es obligatorio</span>}
                <div><label>¿Para qué departamento recomiendas esta persona?*</label></div>

                <select
                  name='departmentBestFit'
                  className={areasError ? 'form-control signup-fields mx-auto border-danger text-danger' : 'form-control signup-fields mx-auto'}
                  ref={register({ required: true })}
                  onChange={e => handleAreas(e)}
                >
                  {
                    areasMap.map((doc, key) => {

                      return <option key={key} value={doc}>{doc}</option>;

                    })

                  }
                </select>
              </label><br/>

                  {errors.whyRec && <span className='text-danger'>Este campo es obligatorio</span>}
              <textarea
                style={{ height: '8em' }}
                type="textarea"
                name="whyRec"
                ref={register({ required: true })}
                className={errors.whyRec ? 'form-control signup-fields fields-rec mx-auto border-danger text-danger': 'form-control signup-fields fields-rec mx-auto'}
                placeholder='Indica por qué recomendarías a este profesional*'
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

            
              <>
                <div className='mt-2'>
                  <label>¿Qué conocimiento específico tiene el candidato?</label>
                  <CreatableSelect
                    closeMenuOnSelect={false}
                    theme={customTheme}
                    inputValue={inputValue}
                    onChange={handleChange}
                    onInputChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    components={components}
                    placeholder='Seleccionar'
                    isMulti
                    isClearable
                    menuIsOpen={false}
                    name="specificEducation"
                    value={value}
                  />
                  {!props.disabled && value !== null && (<input name='specificEducation' type='hidden' ref={register} onKeyDown={handleKeyDown} onChange={handleChange} value={JSON.stringify(value.map(val => val.value))} />)}


                </div>
              </>

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
                <label>¿Dónde se localiza el candidato?</label>
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
              <button  className='btn-cacc-su d-block mx-auto' onClick={handleSubmitErrors} style={{ width: '18em', marginBottom: '2em' }}> ENVIAR RECOMENDACIÓN</button>
            </form>
          </Modal>


          <button onClick={handleShowHomePage} onClickCapture={closeMenu} className="menu-item btn-handler btn-misdatos">
            <i className="fas fa-home"></i> Inicio
          </button>


          <button onClick={handleShowProfile} onClickCapture={closeMenu} className="menu-item btn-handler btn-misdatos">
            <i className="fas fa-user-alt"></i> Mis Datos
          </button>


          <button onClick={handleShowPostedOffers} className="menu-item btn-handler-long-company">
            <i className="fas fa-briefcase"></i> Mis Ofertas de Empleo
          </button>


          <button onClick={handleShowMyProcesses} onClickCapture={closeMenu} className="menu-item btn-misSelec">
            <i className="fas fa-briefcase"></i> Mis procesos de Sel.
          </button>

          <button onClick={handleShowEmployerBranding} onClickCapture={closeMenu} className="menu-item btn-misSelec">
            <i className="fas fa-book-open"></i> Employer Branding
          </button>


          <button onClick={handleShowHelp} onClickCapture={closeMenu} className="menu-item btn-misSelec">
            <i className="fas fa-question"></i> Ayuda
          </button>


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
              {employerBranding ? <EmployerBranding /> : null}
              {companyHelp ? <CompanyHelp /> : null}

            </div>
          </div>
      }



    </div>
  )
}
