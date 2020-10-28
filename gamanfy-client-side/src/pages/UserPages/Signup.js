import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { signup } from '../../api/auth.api';
import { useHistory } from "react-router-dom";
import '../../CSS/signupForm.css';
import Loader from 'react-loader-spinner';

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
    setInfoSent(true)
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
        <img className='gamanfy-logo' src='/LOGO_BLANCO_ALTA_CALIDAD_LARGO.png' alt='logo-gamanfy' />
        <div>
          <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <div>
              <p className='p-signup'>
                Para crear tu cuenta, completa este formulario<br />con tus datos de contacto.

        </p>
              {/* <p className='p-signup'>No te preocupes, más adelante podrás añadir <br /> los datos de tu empresa.</p> */}
            </div>
            {errors.firstName && <span className='text-danger'>Este campo es obligatorio</span>}
            <div>
              <input
                type="text"
                name="firstName"
                className={errors.firstName ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Nombre*' />
            </div>
            {errors.lastName && <span className='text-danger'>Este campo es obligatorio</span>}
            <div>
              <input
                type="text"
                name="lastName"
                className={errors.lastName ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Apellidos*' />
            </div>

            {<span>{error}</span>}
            <div>
              {errors.email && <span className='text-danger'> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
        
                <input
                type="text"
                name="email"
                placeholder='Email*'
                className={errors.email ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({
                  required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                })} />
              
            </div>

            <div>
              {errors.password && <span className='text-danger'>Este campo es obligatorio</span>}
              <input
                type="password"
                name="password"
                className={errors.password ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Contraseña*' />
            </div>

            <div>

              {errors.repeatPassword && <span className='tex-danger'>{errors.repeatPassword.message ? errors.repeatPassword.message : <span className='text-danger'> Este campo es obligatorio</span>}</span>}
              <input
                type="password"
                name="repeatPassword"
                className={errors.repeatPassword ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({
                  validate: (value) => value === watch('password') || 'Las contraseñas deben coincidir',
                 required: true}, )}
                placeholder='Repite la Contraseña*'

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
            
            {errors.termsAccepted && <span className='text-danger'>Este campo es obligatorio</span>}
            <div>
              <p className={ errors.termsAccepted ? 'text-danger' :'user-terms'}>
                <input type='checkbox' name='termsAccepted' onClick={handleTrueOrFalse} ref={register({required: true})}/> Al pulsar el botón de 'Crear mi cuenta' aceptas y reconoces nuestros <a className={errors.termsAccepted ? 'text-danger' : 'user-terms'} href='https://gamanfy.com/politica-de-privacidad'><u>Términos de uso</u> y <u>Politica de privacidad</u></a>
              </p>
            </div> 
            {
            infoSent ? <Loader type="ThreeDots" color="rgb(255, 188, 73)" height={80} width={80} /> 
            :                                         
            <p className='p-cacc text-center'> <input type="submit" className='btn-cacc-su' value='Crear mi cuenta' /> </p>
           }
                      

          </form>

        </div>
      </>

    </div>


  )
}
