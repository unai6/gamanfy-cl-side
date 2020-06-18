import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import countries from '../../countries.json';
import { sectors, numberOfEmployees } from '../../FolderForSelects/htmlSelects';
import '../../CSS/signupForm.css';
import AuthContext from '../../context/auth/authContext';
export const CompanyCompleteProfile = (props) => {

 
  const { register, handleSubmit } = useForm();
  const [sector, setSector] = useState(sectors)
  const [employees, setEmployees] = useState(numberOfEmployees);
  const [countryNameState, setCountryNameState] = useState(countries.map(country => country.name.common));
  const authContext = useContext(AuthContext);
  const { toCompleteCompany } = authContext;
  const [handler, setHandler] = useState(false); 
  const sectorType = sector.map(sectorType => sectorType);
  const employeesMap = employees.map(employeesMap => employeesMap);
  const countryName = countryNameState.map(countryName => countryName);
  
  const handleTrueOrFalse = () => setHandler(!handler);
  const handleSector = (e) => setSector(sectorType);
  const handleNumberOfEmployees = (e) => setEmployees(employeesMap);
  const handleCountryName = (e) => setCountryNameState(countryName);



  const onSubmit = (data) => {
    toCompleteCompany(props.match.params.companyId, data)
  
  };


  return (
    <div>
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
              <label>
                Select your Sector
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
              <input
                type="text"
                name="companyName"
                className='form-control signup-fields mx-auto'
                ref={register({ required: true })}
                placeholder='Nombre de la empresa' />
            </div>

            <div>
              <textarea
                type="textarea"
                name="description"
                className='form-control signup-fields mx-auto'
                ref={register({ required: true })}
                placeholder='Descripción de la empresa' />
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
                name="provinceName"
                className='form-control signup-fields mx-auto'
                ref={register({ required: true })}
                placeholder='Provincia' />
            </div>

            <div>
              <input
                type="text"
                name="municipalityName"
                className='form-control signup-fields mx-auto'
                ref={register({ required: true })}
                placeholder='Municipio' />
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
                  placeholder='Persona de contacto' />
              </div>
              <input
                type="text"
                name="website"
                className='form-control signup-fields mx-auto'
                ref={register({ required: true })}
                placeholder='Página web' />
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

    </div>


  )
}
