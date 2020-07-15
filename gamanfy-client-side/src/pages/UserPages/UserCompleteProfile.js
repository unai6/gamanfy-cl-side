import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { sectors, numberOfEmployees } from '../../FolderForSelects/htmlSelects';
import countries from '../../countries.json';
import AuthContext from '../../context/auth/authContext';
import '../../CSS/signupForm.css';


export const UserCompleteProfile = (props) => {

  const authContext = useContext(AuthContext);
  const { toCompleteUser, toCompleteCompanyUser } = authContext;
  const { register, handleSubmit } = useForm();
  const [countryNameState, setCountryNameState] = useState(countries.map(country => country.name.common));
  const [isCompany, setIsCompany] = useState(props.match.params)
  const [hasExp, setHasexp] = useState(false);
  const [document, setDocument] = useState(["CIF", "NIF"]);
  const [sector, setSector] = useState(sectors);
  const [employees, setEmployees] = useState(numberOfEmployees);
  const [handler, setHandler] = useState(false);


  const docType = document.map(docType => docType);
  const sectorType = sector.map(sectorType => sectorType);
  const countryName = countryNameState.map(countryName => countryName);
  const employeesMap = employees.map(employeesMap => employeesMap);

  const handleDocType = (e) => setDocument(docType);
  const handleSector = (e) => setSector(sectorType);
  const handleNumberOfEmployees = (e) => setEmployees(employeesMap);
  const handleCountryName = (e) => setCountryNameState(countryName);
  const handleTrueOrFalse = () => setHandler(!handler);

  const onSubmit = (data) => {
   toCompleteUser(props.match.params.userId, props.match.params.isCompany, data )
  };

  const onSubmitCompanyUser = (data) => {
    toCompleteCompanyUser(props.match.params.userId, props.match.params.isCompany, data)
    setIsCompany(true);
  }
  const handleClick = () => setHasexp(!hasExp);

  const handleSubmitCompleteProf = (e) => {
    onSubmit(e.persist())
    onSubmitCompanyUser(e.persist())
  };

  return (
    <div className='div-wrapper'>
      {isCompany.isCompany === 'true' ?
        (
          <>
            <img className='gamanfy-logo' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />
            <div>
              <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmitCompanyUser)} autoComplete='off'>
              
              <div>
                  <p className='p-signup'>
                    Para completar tu cuenta, completa este formulario<br />con tus datos.</p>
                </div>

                <div>
                  <input
                    type="text"
                    name="companyName"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Nombre de la empresa' />
                </div>
                <div>
                  <input
                    type="text"
                    name="taxId"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Razón Social' />
                </div>

                <div>
                  <input
                    type="text"
                    name="phoneNumber"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Teléfono de contacto' />
                </div>


                <div>
                  <input
                    type="text"
                    name="contactPerson"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Persona de Contacto' />
                </div>
                <div>
                  <label>
                    Seleccione su tipo de documento
              <select
                      name='documentType'
                      className='form-control signup-fields mx-auto'
                      ref={register({ required: true })}
                      onChange={e => handleDocType(e)}
                    >
                      {
                        docType.map((doc, key) => {
                          return <option key={key} value={doc}>{doc}</option>;
                        })

                      }
                    </select>
                  </label>

                </div>

                <div>
                  <input
                    type="text"
                    name="documentNumber"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Número de Documento' />
                </div>

                <div>
                  <label>
                    Número de trabajadores
              <select
                      name='numberOfEmployees'
                      className='form-control signup-fields mx-auto'
                      ref={register({ required: true })}
                      onChange={e => handleNumberOfEmployees(e)}
                    >
                      {
                        employeesMap.map((doc, key) => {
                          return <option key={key} value={key}>{doc}</option>;
                        })

                      }
                    </select>
                  </label>
                </div>

                <div>
                  <label>
                    País
              <select
                      name='countryName'
                      className='form-control signup-fields mx-auto'
                      ref={register({ required: true })}
                      onChange={e => handleCountryName(e)}
                    >
                      {
                        countryName.map((doc, key) => {
                          return <option key={key} value={doc}>{doc}</option>;
                        })

                      }
                    </select>
                  </label>
                </div>

                <div>
                  <input
                    type="text"
                    name="province"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Provincia' />
                </div>

                <div>
                  <input
                    type="text"
                    name="municipality"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Población' />
                </div>
                <div>
                  <input
                    type="text"
                    name="city"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='ciudad' />
                </div>


                <div>
                  <input
                    type="text"
                    name="website"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Página web' />
                </div>

                <div>
                  <label>
                    Seleccione su sector
              <select
                      name='sector'
                      className='form-control signup-fields mx-auto'
                      ref={register({ required: true })}
                      onChange={e => handleSector(e)}
                    >
                      {
                        sectorType.map((doc, key) => {

                          return <option key={key} value={doc}>{doc}</option>;

                        })

                      }
                    </select>
                  </label>
                </div>

                <div>
                  <label>
                    Dirección
                </label>
                </div>

                <div>
                  <input
                    type="text"
                    name="street"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Calle' />
                </div>

                <div>
                  <input
                    type="text"
                    name="number"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Número' />
                </div>

                <div>
                  <input
                    type="text"
                    name="zip"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Código postal' />
                </div>

                <div>
              <p className='user-terms'>
               <input type='checkbox' name='isCompleted' onClick={handleTrueOrFalse} ref={register({required: true})}/> Al pulsar el botón de 'Completar mi perfil' aceptas y reconoces nuestros <u>Términos de uso</u> y <u>Politica de privacidad</u>
              </p>
            </div>
                <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Completar mi perfil' /> </p>

              </form>
            </div>
          </>
        ) : (

          <>
            <img className='gamanfy-logo' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />
            <div>
              <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
              
                <div>
                  <p className='p-signup'>
                    Para completar tu cuenta, completa este formulario<br />con tus datos.
</p>
                </div>

                <div>
                  <input
                    type="text"
                    name="phoneNumber"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Teléfono de contacto' />
                </div>

                <div>
                  <input
                    type="text"
                    name="urlLinkedin"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='URL Linkedin' />
                </div>
                <div>
                  <label>Fecha de Nacimiento
                </label>
                </div>
                <div>
                  <input
                    type="date"
                    name="birthDate"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Fecha de Nacimiento' />
                </div>

                <div>
                  <label>
                    País
              <select
                      name='countryName'
                      className='form-control signup-fields mx-auto'
                      ref={register({ required: true })}
                      onChange={e => handleCountryName(e)}
                    >
                      {
                        countryName.map((doc, key) => {
                          return <option key={key} value={doc}>{doc}</option>;
                        })

                      }
                    </select>
                  </label>
                </div>

                <div>
                  <input
                    type="text"
                    name="city"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Ciudad' />
                </div>

                <div>
                  <label>
                    Dirección
                </label>
                </div>

                <div>
                  <input
                    type="text"
                    name="street"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Calle' />
                </div>

                <div>
                  <input
                    type="text"
                    name="number"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Número' />
                </div>

                <div>
                  <input
                    type="text"
                    name="zip"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Código postal' />
                </div>
                <div>
                  <label >
                    <input className='checkbox-label' disabled />
                    <input className='checkbox-round' type="checkbox" name="hasExp" onClick={handleClick} ref={register} /> Tiene experiencia?
                  </label>
                </div>

                <div>
              <p className='user-terms'>
               <input type='checkbox' name='isCompleted' onClick={handleTrueOrFalse} ref={register({required: true})}/> Al pulsar el botón de 'Completar mi perfil' aceptas y reconoces nuestros <u>Términos de uso</u> y <u>Politica de privacidad</u>
              </p>
            </div>
                <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Completar mi perfil' onClick={handleSubmitCompleteProf} /> </p>

              </form>
            </div>
          </>


        )}

    </div>


  )
}
