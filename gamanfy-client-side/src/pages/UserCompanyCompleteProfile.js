import React from 'react';
import { useForm } from "react-hook-form";
import { userCompleteProfile } from '../api/auth.api';

import { useState } from 'react';
import '../CSS/signupForm.css';
import countries from '../countries.json'


export const UserCompanyCompleteProfile = (props) => {

  const { register, handleSubmit } = useForm();
  const [infoSent, setInfoSent] = useState(false);
  const [document, setDocument] = useState(["CIF", "NIF"]);
  const [sector, setSector] = useState([". . .", "Administración Gubernamental", "Aeronáutica y aviación", "Agricultura", "Alimentación y bebidas", "Almacenamiento", "Arquitectura y planificación", "Artes escénicas", "Artesanía", "Artículos de consumo", "Artículos de lujo y joyas", "Artículos deportivos", "Atención a la salud mental", "Atención sanitaria y hospitalaria", "Automación industrial", "Banca", "Bellas artes", "Bienes inmobiliarios", "Biotecnología", "Construcción", "Consultoría", "Contabilidad", "Cosmética", "Deportes", "Derecho", "Desarrollo de programación", "Diseño", "Diseño gráfico", "Dotación y selección de personal", "Educación primaria/secundaria", "Energía renovable y medioambiente", "Enseñanza superior", "Entretenimiento", "Equipos informáticos"]);
  const [countryCode, setCountryCode] = useState(countries.map(country => country.cca3))
  const [countryNameState, setCountryNameState] = useState(countries.map(country => country.name.common));
  const [isCompany, setIsCompany] = useState(props.match.params)
  const [hasExp, setHasexp] = useState(false);
  const handleClick = () => setHasexp(!hasExp);

  const docType = document.map(docType => docType);
  const sectorType = sector.map(sectorType => sectorType);
  const countryCodeNumber = countryCode.map(countryCodeNumber => countryCodeNumber);
  const countryName = countryNameState.map(countryName => countryName);

  const handleDocType = (e) => console.log((document[e.target.value]));
  const handleSector = (e) => console.log((sector));
  const handleCountryCodeType = (e) => console.log((document[e.target.value]));
  const handleCountryName = (e) => console.log(document[e.target.value]);



  const onSubmit = (data) => {
    userCompleteProfile(props.match.params.userId, props.match.params.isCompany, data)
      .then(function (result) {

        if (result.status === 200) {
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



  /*  const getCountriesCode = () => {
        countries.map( country => 
          console.log(country.cca2)
          )
        }
  
    getCountriesCode()
   */


  return (
    <div>
      {isCompany.isCompany === 'true' ?
        (
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
                    name="companyName"
                    className='form-control signup-fields mx-auto'
                    ref={register({ required: true })}
                    placeholder='Nombre de la empresa' />
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
                          {/* console.log(key)  */ }
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
                    Al pulsar el botón de 'Completar mi perfil' aceptas y reconoces nuestros <u>Términos de uso</u> y <u>Politica de privacidad</u>
                  </p>
                </div>
                <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Completar mi perfil' onClick={handleClick()}/> </p>

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
              <input className='checkbox-label' disabled/>
                <input className='checkbox-round' type="checkbox" name="hasExp" onClick={handleClick} ref={register} /> Tiene experiencia?
              </label>
            </div>

                <div>
                  <p className='user-terms'>
                    Al pulsar el botón de 'Completar mi perfil' aceptas y reconoces nuestros <u>Términos de uso</u> y <u>Politica de privacidad</u>
                  </p>
                </div>
                <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Completar mi perfil'/> </p>

              </form>
            </div>
          </>


        )}

    </div>


  )
}
