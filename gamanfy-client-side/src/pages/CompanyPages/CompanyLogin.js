import { useForm } from "react-hook-form";
import React, { useContext, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import Loader from 'react-loader-spinner';

export const CompanyLogin = () => {

  const authContext = useContext(AuthContext);
  const { authenticateCompany } = authContext;
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setisLoading] = useState(false)

  const onSubmit = data => {
    authenticateCompany(data)
    setisLoading(true)


  };


  return (
    <div className='div-wrapper'>
      <img className='gamanfy-logo' src='/logo_gamanfy_claro.png'  alt='logo-gamanfy' />

      <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <h3>Iniciar Sesión</h3>
        <div>
          <input
            className='form-control signup-fields mx-auto'
            type="text"
            name="email"
            placeholder='Email'
            ref={register({ required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Dirección de email no válida' } })} />
          {errors.email && <span> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
        </div>

        <div>
          <input
            className='form-control signup-fields mx-auto'
            type="password"
            name="password"
            ref={register({ required: true })}
            placeholder='Password' />
          {errors.password && <span>Este campo es obligatorio</span>}
        </div>

        <div>
          <label>
            <input className='checkbox-label' disabled />
            <input className='checkbox-round' type="checkbox" name="remember" ref={register} /> Recuérdame</label>
        </div>

        {!isLoading ? <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Entrar en mi cuenta' /> </p> : <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}
      </form>


    </div>
  )
}
