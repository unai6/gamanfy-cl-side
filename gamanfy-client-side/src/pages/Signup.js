import React from 'react';
import { useForm } from "react-hook-form";
import { logout } from '../api/auth.api.js';
import { signup } from '../api/auth.api';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import AuthContext from '../context/auth/authContext';
import '../CSS/signupForm.css';


export const Signup = () => {

  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();
  const [isCompany, setisCompany] = useState(false);
  const [infoSent, setInfoSent] = useState(false);
  const [error, setError] = useState('')
  const handleClick = () => setisCompany(!isCompany)

  const authContext = useContext(AuthContext);
  const { createUser } = authContext;
  const onSubmit = data => {
		createUser(data)
  };/*    .then(function (result) {
        console.log('resolved', result)       
        if (result.status === 200) {
          return history.push('/auth/user/token-sent')
        } else {
          return setInfoSent(false)
        }
      })
      .catch(function (error) {

        if (error.response.status == 400) {
          setError('Este email ya está en uso');
           console.log(error.response);
        }

      }) */
  

  return (
    <div>
      <>
        <img className='gamanfy-logo' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />
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


            </div>

            <div>
              <label >
              <input className='checkbox-label' disabled/>
                <input className='checkbox-round' type="checkbox" name="isCompany" onClick={handleClick} ref={register} /> Eres una empresa de selección (Headhunter) ?
              </label>
            </div>

            <div>
              <label>
              <input className='checkbox-label' disabled/>
              <input className='checkbox-round' type="checkbox" name="remember" ref={register} /> Recuérdame</label>
            </div>

            <div>
              <p className='user-terms'>
                Al pulsar el botón de 'Crear mi cuenta' aceptas y reconoces nuestros <u>Términos de uso</u> y <u>Politica de privacidad</u>
              </p>
            </div>
            <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Crear mi cuenta' /> </p>
            
          </form>
          <button type="button" className="btn btn-lg btn-block  text-uppercase btn-danger text-light " onClick={logout}>Desconectar</button>
        </div>
      </>

    </div>


  )
}
