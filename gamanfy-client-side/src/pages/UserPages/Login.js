import { useForm } from "react-hook-form";
import React, { useContext, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import '../../CSS/signupForm.css';
import Loader from 'react-loader-spinner';

export const Login = () => {

  const authContext = useContext(AuthContext);
  const { authenticate } = authContext;
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState(false)
 

  const onSubmit = async (data) => {
    try{
      setisLoading(true)
      const result = await authenticate(data)
      if (result === undefined) {
        setisLoading(false);
        setError(true)
      } 
    } catch(error){
      console.log(error)
    } 
  };



  return (
    <div className='div-wrapper'>
      <img className='gamanfy-logo' src='/logo_gamanfy_claro.png' alt='logo-gamanfy' />

      <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <h3>Iniciar Sesión</h3>



        <div>
          <input
            className={error ? 'form-control signup-fields mx-auto border border-danger' : 'form-control signup-fields mx-auto'}
            type="text"
            name="email"
            placeholder='Email'
            ref={register({ required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Dirección de email no válida' } })} />
          {errors.email && <span> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
        </div>

        <div>
          <input
            className={error ? 'form-control signup-fields mx-auto border border-danger' : 'form-control signup-fields mx-auto'}
            type="password"
            name="password"
            ref={register({ required: true })}
            placeholder='Password' />
          {errors.password && <span>Este campo es obligatorio</span>}
        </div>
        { error ? <p className='wrong-passmail'>El email o la contraseña no son válidos</p> : null}

        <div>
          <label>
            <input className='checkbox-round' type="checkbox" name="remember" ref={register} /> Recuérdame</label>
        </div>
        {isLoading ? <Loader type="ThreeDots" color="rgb(255, 188, 73)" height={80} width={80} /> : <input  type="submit" className='btn-cacc-su p-cacc d-block mx-auto' value='Acceder a mi cuenta' />}
      </form>


    </div>


  )
}
