import React from 'react';
import { useForm } from "react-hook-form";
import { companyCompleteProfile } from '../api/auth.api';
import countries from '../countries.json';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import '../CSS/signupForm.css';


export const CompanyCompleteProfile = (props) => {
  //console.log(props)
  const history = useHistory();
  const { register, handleSubmit} = useForm();
  const [infoSent, setInfoSent] = useState(false);
  const [sector, setSector] = useState([". . .", "Administración Gubernamental", "Aeronáutica y aviación", "Agricultura", "Alimentación y bebidas", "Almacenamiento", "Arquitectura y planificación", "Artes escénicas", "Artesanía", "Artículos de consumo", "Artículos de lujo y joyas", "Artículos deportivos", "Atención a la salud mental", "Atención sanitaria y hospitalaria", "Automación industrial", "Banca", "Bellas artes", "Bienes inmobiliarios", "Biotecnología", "Construcción", "Consultoría", "Contabilidad", "Cosmética", "Deportes", "Derecho", "Desarrollo de programación", "Diseño", "Diseño gráfico", "Dotación y selección de personal", "Educación primaria/secundaria", "Energía renovable y medioambiente", "Enseñanza superior", "Entretenimiento", "Equipos informáticos"])
  const [employees, setEmployees] = useState(['< 50', '50-100', '> 100']);
  const [countryCode, setCountryCode] = useState(countries.map(country => country.cca3));
  const [countryNameState, setCountryNameState] = useState(countries.map(country => country.name.common));

  const sectorType = sector.map(sectorType => sectorType);
  const employeesMap = employees.map(employeesMap => employeesMap);
  const countryCodeNumber = countryCode.map(countryCodeNumber => countryCodeNumber);
  const countryName = countryNameState.map(countryName => countryName);

  const handleSector = (e) => console.log('handler sector');
  const handleNumberOfEmployees = (e) => console.log((' handler number of employees'));
  const handleCountryCodeType = (e) => console.log(('handleCountryType'));
  const handleCountryName = (e) => console.log(('handleCountryName'));

  const onSubmit = (data) => {

    companyCompleteProfile(props.match.params.companyId, data)
      .then(function (result) {     
        if (result.status === 200) {
          history.push('/')
        } else {
          setInfoSent(false)
        }
      })
      .catch(function (error) {

        if (error.response.status !== 200) {

          setInfoSent(false)
          return;
        }
      })

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
                Cógido de país
              <select
                  name='countryCode'
                  className='form-control signup-fields mx-auto'
                  ref={register({ required: true })}
                  onChange={e => handleCountryCodeType(e)}
                >
                  {
                    countryCodeNumber.map((doc, key) => {
                      return <option key={key} value={doc}>{doc}</option>;
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
            <input
                type="text"
                name="yearsExp"
                className='form-control signup-fields mx-auto'
                ref={register({ required: true })}
                placeholder='Años de experiencia' />
            </div>

            <div>
              <p className='user-terms'>
                Al pulsar el botón de 'Completar mi perfil' aceptas y reconoces nuestros <u>Términos de uso</u> y <u>Politica de privacidad</u>
              </p>
            </div>
            <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Completar mi perfil' /> </p>

          </form>
        </div>
      </>

    </div>


  )
}
