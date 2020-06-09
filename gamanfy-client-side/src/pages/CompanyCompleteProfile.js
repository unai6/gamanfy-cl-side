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
  const [document, setDocument] = useState(["CIF", "NIF"]);

  const theDoc = document.map(theDoc => theDoc);
  const handleDoc = (e) => console.log((document[e.target.value]))

  const onSubmit = (data) => {
    console.log(data)
    companyCompleteProfile( props.match.params.userId, data)
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
    return error
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
              onChange = {e => handleDoc(e)}
              >            
                {
                  theDoc.map((doc, key)=> {
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
        {/*     <div>
              {errors.email && <span> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
              <input
                type="text"
                name="email"
                placeholder='Email'
                className='form-control signup-fields mx-auto'
                ref={register({
                  required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                })} />
            </div>

            <div>
              {errors.password && <span>Este campo es obligatorio</span>}
              <input
                type="password"
                name="password"
                className='form-control signup-fields mx-auto'
                ref={register({ required: true })}
                placeholder='Contraseña' />
            </div>

            <div>

              {errors.repeatPassword && <span>{errors.repeatPassword.message ? errors.repeatPassword.message : 'Este campo es obligatorio'}</span>}
              <input
                type="password"
                name="repeatPassword"
                className='form-control signup-fields mx-auto'
                ref={register({
                  validate: (value) => value === watch('password') || 'Las contraseñas deben coincidir'
                })}
                placeholder='Repite la Contraseña'

              />


            </div> */}


            <div>
              <label>
              <input className='checkbox-label' disabled/>
              <input className='checkbox-round' type="checkbox" name="remember" ref={register} /> Recuérdame</label>
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
