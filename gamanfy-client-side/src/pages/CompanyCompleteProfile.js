import React from 'react';
import { useForm } from "react-hook-form";
import { companyCompleteProfile } from '../api/auth.api';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import '../CSS/signupForm.css';


export const CompanyCompleteProfile = (props) => {
  //console.log(props)
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();
  const [infoSent, setInfoSent] = useState(false);
  const [sector, setSector] = useState([". . .", "Administración Gubernamental", "Aeronáutica y aviación", "Agricultura", "Alimentación y bebidas", "Almacenamiento", "Arquitectura y planificación", "Artes escénicas", "Artesanía", "Artículos de consumo", "Artículos de lujo y joyas", "Artículos deportivos", "Atención a la salud mental", "Atención sanitaria y hospitalaria", "Automación industrial", "Banca", "Bellas artes", "Bienes inmobiliarios", "Biotecnología", "Construcción", "Consultoría", "Contabilidad", "Cosmética", "Deportes", "Derecho", "Desarrollo de programación", "Diseño", "Diseño gráfico", "Dotación y selección de personal", "Educación primaria/secundaria", "Energía renovable y medioambiente", "Enseñanza superior", "Entretenimiento", "Equipos informáticos"])


  const sectorType = sector.map(sectorType => sectorType);
  const handleSector = (e) => console.log((sector))

  const onSubmit = (data) => {
    console.log(data)
    companyCompleteProfile(props.match.params.userId, data)
      .then(function (result) {
        // console.log('resolved', result)       
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
                      {/* console.log(key)  */ }
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
              <label>
                Select your document Type
              <select
                  name='documentType'
                  className='form-control signup-fields mx-auto'
                  ref={register({ required: true })}
                  onChange={e => handleDoc(e)}
                >
                  {
                    theDoc.map((doc, key) => {
                      return <option key={key} value={key}>{doc}</option>;
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
                name="country"
                className='form-control signup-fields mx-auto'
                ref={register({ required: true })}
                placeholder='País' />
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
