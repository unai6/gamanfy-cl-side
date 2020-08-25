import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { signup } from '../../api/auth.api';
import { useHistory } from "react-router-dom";
import '../../CSS/signupForm.css';


export const Signup = () => {

  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();
  const [isCompany, setisCompany] = useState(false);
  const [infoSent, setInfoSent] = useState(false);
  const [error, setError] = useState('');
  const [handler, setHandler] = useState(false);
  
  const handleClick = () => setisCompany(!isCompany);
  const handleTrueOrFalse = () => setHandler(!handler);
  
  const onSubmit = data => {
    signup(data)
      .then(function (result) {
            
        if (result.status === 200) {
          history.push('/auth/user/token-sent')
        } else {
          setInfoSent(infoSent)
        }
      })
      .catch(function (server) {

        if (server.response.status !== 200) {

          setError('Este email ya está en uso');
          
          return;
        }

      })
    return error
  };

  return (
    <div className='div-wrapper'>
      <>
        <img className='gamanfy-logo' src='/logo_gamanfy_claro.png'  alt='logo-gamanfy' />
        <div>
          <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <div>
              <p className='p-signup'>
                Para crear tu cuenta, completa este formulario<br />con tus datos de contacto.

        </p>
              <p className='p-signup'>No te preocupes, más adelante podrás añadir <br /> los datos de tu empresa.</p>
            </div>

            <div>
              <input
                type="text"
                name="firstName"
                className='form-control signup-fields mx-auto'
                ref={register({ required: true })}
                placeholder='Nombre' />
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                className='form-control signup-fields mx-auto'
                ref={register({ required: true })}
                placeholder='Apellidos' />
            </div>

            {<span>{error}</span>}
            <div>
              {errors.email && <span> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
              
              { 
                
                errors.email ?
                <input
                type="text"
                name="email"
                placeholder='Email'
                className='form-control signup-fields mx-auto border-danger'
                ref={register({
                  required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                })} />
                :

                <input
                type="text"
                name="email"
                placeholder='Email'
                className='form-control signup-fields mx-auto'
                ref={register({
                  required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                })} />
              }
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


            </div>

            <div>
              <label>
                <input className='checkbox-round' type="checkbox" name="isCompany" onClick={handleClick} ref={register} /> Eres una empresa de selección (Headhunter) ?
              </label>
            
            </div>

            <div>
              <label>
                <input className='checkbox-round' type="checkbox" name="remember" ref={register} /> Recuérdame</label>
            </div>

            <div>
              <p className='user-terms'>
                <input type='checkbox' name='termsAccepted' onClick={handleTrueOrFalse} ref={register({required: true})}/> Al pulsar el botón de 'Crear mi cuenta' aceptas y reconoces nuestros <u>Términos de uso</u> y <u>Politica de privacidad</u>
              </p>
            </div>
            <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Crear mi cuenta' /> </p>

          </form>

        </div>
      </>

    </div>


  )
}
