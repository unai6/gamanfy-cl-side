import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { sectors, numberOfEmployees } from '../../FolderForSelects/htmlSelects';
import countries from '../../countries.json';
import AuthContext from '../../context/auth/authContext';
import '../../CSS/signupForm.css';
import Loader from 'react-loader-spinner';


export const UserCompleteProfile = (props) => {

  const authContext = useContext(AuthContext);
  const { toCompleteUser, toCompleteCompanyUser } = authContext;
  const { register, handleSubmit, errors } = useForm();
  const [countryNameState, setCountryNameState] = useState(countries.map(country => country.name.common));
  const [isCompany, setIsCompany] = useState(props.match.params)
  const [hasExp, setHasexp] = useState(false);
  const [document, setDocument] = useState(["CIF", "NIF"]);
  const [sector, setSector] = useState(sectors);
  const [employees, setEmployees] = useState(numberOfEmployees);
  const [inputValue, setInputValue] = useState(undefined);
  const [infoSent, setInfoSent] = useState(false);


  const docType = document.map(docType => docType);
  const sectorType = sector.map(sectorType => sectorType);
  const countryName = countryNameState.map(countryName => countryName);
  const employeesMap = employees.map(employeesMap => employeesMap);

  const handleDocType = (e) => setDocument(docType);
  const handleSector = (e) => setSector(sectorType);
  const handleNumberOfEmployees = (e) => setEmployees(employeesMap);
  const handleCountryName = (e) => setCountryNameState(countryName);

  const handleChange = (e) => {
    setInputValue(e.target.files[0].name);
  };

  const onSubmitCompanyUser = (data) => {
    toCompleteCompanyUser(props.match.params.userId, props.match.params.isCompany, data)
    setIsCompany(true);
  };

  const onSubmit = async (data) => {
    try {

      const formData = new FormData();
      formData.append('phoneNumber', data.phoneNumber);
      formData.append('urlLinkedin', data.urlLinkedin);
      formData.append('birthDate', data.birthDate);
      formData.append('countryName', data.countryName);
      formData.append('city', data.city);
      formData.append('curriculum', data.curriculum[0]);
      formData.append('street', data.street);
      formData.append('number', data.number);
      formData.append('zip', data.zip);
      formData.append('hasExp', data.hasExp)   
      
      setInfoSent(true)
      await toCompleteUser(props.match.params.userId, props.match.params.isCompany, formData);      
    } catch (error) {
      console.log(error)
    };
  };

  const handleClick = () => setHasexp(!hasExp);

  // const handleSubmitCompleteProf = (e) => {
  //   onSubmit(e.persist())
  //   onSubmitCompanyUser(e.persist())
  // };

  const isNotMobile = window.innerWidth < 1024

  return (
    <div className='div-wrapper'>
      {isCompany.isCompany === 'true' ?
        (
          <>
            <img className='d-block mx-auto mt-5' src='/logo_gamanfy_claro.png' alt='pic' />
            <div>
              <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmitCompanyUser)} autoComplete='off'>

                <div>
                  <p className='p-signup'>
                    Para completar tu cuenta, completa este formulario<br />con tus datos.</p>
                </div>
                {errors.companyName && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="companyName"
                    className={errors.companyName ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Nombre de la empresa*' />
                </div>
                {errors.taxId && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="taxId"
                    className={errors.taxId ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Razón Social*' />
                </div>
                {errors.phoneNumber && <span className='text-danger'> Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="phoneNumber"
                    className={errors.phoneNumber ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Teléfono de contacto*' />
                </div>

                {errors.contactPerson && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="contactPerson"
                    className={errors.contactPerson ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Persona de Contacto*' />
                </div>

                {errors.documentType && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <label>
                    Seleccione su tipo de documento*
              <select
                      name='documentType'
                      className={errors.documentType ? 'form-control signup-fields-multi mx-auto border-danger' : 'form-control signup-fields-multi mx-auto'}
                      ref={register({ required: true })}
                      onChange={e => handleDocType(e)}
                    >
                      {
                        docType.map((doc, key) => {
                          return <option key={key} value={doc}>{doc + '*'}</option>;
                        })

                      }
                    </select>
                  </label>

                </div>

                {errors.documentNumber && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="documentNumber"
                    className={errors.documentNumber ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Número de Documento*' />
                </div>

                {errors.numberOfEmployees && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <label>
                    Número de trabajadores*
              <select
                      name='numberOfEmployees'
                      className={errors.numberOfEmployees ? 'form-control signup-fields-multi mx-auto border-danger' : 'form-control signup-fields-multi mx-auto'}
                      ref={register({ required: true })}
                      onChange={e => handleNumberOfEmployees(e)}
                    >
                      {
                        employeesMap.map((doc, key) => {
                          return <option key={key} value={key}>{doc + '*'}</option>;
                        })

                      }
                    </select>
                  </label>
                </div>
                {errors.countryName && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <label>
                    País*
              <select
                      name='countryName'
                      className={errors.countryName ? 'form-control signup-fields-multi mx-auto border-danger' : 'form-control signup-fields-multi mx-auto'}
                      ref={register({ required: true })}
                      onChange={e => handleCountryName(e)}
                    >
                      {
                        countryName.map((doc, key) => {
                          return <option key={key} value={doc}>{doc + '*'}</option>;
                        })

                      }
                    </select>
                  </label>
                </div>
                {errors.province && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="province"
                    className={errors.province ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Provincia*' />
                </div>
                {errors.municipality && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="municipality"
                    className={errors.municipality ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Población*' />
                </div>
                {errors.city && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="city"
                    className={errors.city ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Ciudad*' />
                </div>

                {errors.website && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="website"
                    className={errors.firstName ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Página web*' />
                </div>

                {errors.scetor && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <label>
                    Seleccione su sector*
              <select
                      name='sector'
                      className={errors.sector ? 'form-control signup-fields-multi mx-auto border-danger' : 'form-control signup-fields-multi mx-auto'}
                      ref={register({ required: true })}
                      onChange={e => handleSector(e)}
                    >
                      {
                        sectorType.map((doc, key) => {

                          return <option key={key} value={doc}>{doc + '*'}</option>;

                        })

                      }
                    </select>
                  </label>
                </div>

                <div>
                  <label>
                    Dirección*
                </label>
                </div>
                {errors.street && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="street"
                    className={errors.firstName ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Calle*' />
                </div>
                {errors.number && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="number"
                    className={errors.number ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Número*' />
                </div>
                {errors.zip && <span className='text-danger'> Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="zip"
                    className={errors.zip ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Código postal*' />
                </div>

                <div>

                </div>
                <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Completar mi perfil' /> </p>

              </form>
            </div>
          </>
        ) : (

          <>
            <img className='d-block mx-auto mt-5' src='/logo_gamanfy_claro.png' alt='pic' />
            <div>
              <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

                <div>
                  <p className='p-signup'>
                    Para completar tu cuenta, completa este formulario<br />con tus datos.
                  </p>
                </div>

                {errors.phoneNumber && <span className='text-danger'> Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="phoneNumber"
                    className={errors.phoneNumber ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Teléfono de contacto*' />
                </div>

                {errors.urlLinkedin && <span className='text-danger'> Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="urlLinkedin"
                    className={errors.urlLinkedin ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='URL Linkedin*' />
                </div>

                <div className='cv-wrapper'>

                  <label htmlFor='cv-upload' className='form-control signup-fields fields-rec mx-auto label-cv'>{inputValue === undefined ? 'Sube aquí su CV (en PDF )' : !isNotMobile ? inputValue.substring(40, -1) + '...' : inputValue.substring(20, -1) + '...'}</label>
                  {
                    !isNotMobile ?
                      <label className='browse-files-complete-prof' htmlFor='cv-upload'>Explorar archivos</label>
                      :
                      <label htmlFor='cv-upload' ><i className="fas fa-upload"></i></label>
                  }
                  <input
                    onChange={handleChange}
                    id='cv-upload'
                    type="file"
                    name='curriculum'
                    className='form-control signup-fields fields-rec mx-auto upload-cv'
                    ref={register}
                  />
                </div>

                <div>
                  <label>Fecha de Nacimiento
                </label>
                </div>
                {errors.birthDate && <span className='text-danger'> Este campo es obligatorio</span>}
                <div>
                  <input
                    type="date"
                    name="birthDate"
                    className={errors.birthDate ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Fecha de Nacimiento*' />
                </div>

                {errors.countryName && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <label>
                    País
              <select
                      name='countryName'
                      className={errors.phoneNumber ? 'form-control signup-fields-multi mx-auto border-danger' : 'form-control signup-fields-multi mx-auto'}
                      ref={register({ required: true })}
                      onChange={e => handleCountryName(e)}
                    >
                      {
                        countryName.map((doc, key) => {
                          return <option key={key} value={doc}>{doc + '*'}</option>;
                        })

                      }
                    </select>
                  </label>
                </div>
                {errors.city && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="city"
                    className={errors.city ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Ciudad*' />
                </div>

                <div>
                  <label>
                    Dirección
                </label>
                </div>
                {errors.street && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="street"
                    className={errors.street ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Calle*' />
                </div>
                {errors.number && <span className='text-danger'>Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="number"
                    className={errors.number ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Número*' />
                </div>
                {errors.zip && <span className='text-danger'> Este campo es obligatorio</span>}
                <div>
                  <input
                    type="text"
                    name="zip"
                    className={errors.zip ? 'form-control signup-fields mx-auto border-danger' : 'form-control signup-fields mx-auto'}
                    ref={register({ required: true })}
                    placeholder='Código postal*' />
                </div>
                <div>
                  <label >
                    <input className='checkbox-round' type="checkbox" name="hasExp" onClick={handleClick} ref={register} /> ¿Tienes experiencia en selección de personal?
                  </label>
                </div>

                {
                  infoSent ?
                    <Loader type="ThreeDots" color="rgb(255, 188, 73)" height={80} width={80} />
                    :

                    <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Completar mi perfil' /> </p>
                }


              </form>
            </div>
          </>


        )}

    </div>


  )
}
