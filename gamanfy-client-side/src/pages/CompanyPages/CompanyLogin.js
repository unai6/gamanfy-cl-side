import { useForm } from "react-hook-form";
import React, { useContext, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import Loader from 'react-loader-spinner';

export const CompanyLogin = () => {

  const authContext = useContext(AuthContext);
  const { authenticateCompany } = authContext;
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = async data => {

    try {
      setisLoading(true)
      const result = await authenticateCompany(data)
      if (result === undefined) {
        setisLoading(false);
        setError(true)
      }
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className='div-wrapper'>
      <img className='gamanfy-logo' src='/LOGO_BLANCO_ALTA_CALIDAD_LARGO.png' alt='logo-gamanfy' />

      <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <h3>Iniciar Sesión</h3>

        <div>
          {errors.email && <span className='text-danger'> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
          <input
            className={errors.email ? 'form-control signup-fields mx-auto border border-danger' : 'form-control signup-fields mx-auto'}
            type="text"
            name="email"
            placeholder='Email'
            ref={register({ required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Dirección de email no válida' } })} />
        </div>

        <div>
          {errors.password && <span className='text-danger'>Este campo es obligatorio</span>}
          <input
            className={errors.password ? 'form-control signup-fields mx-auto border border-danger' : 'form-control signup-fields mx-auto'}
            type="password"
            name="password"
            ref={register({ required: true })}
            placeholder='Password' />
        </div>
        {error ? <p className='wrong-passmail'>El email o la contraseña no son válidos</p> : null}


        <div>
          <label>
            <input className='checkbox-round' type="checkbox" name="remember" ref={register} /> Recuérdame</label>
        </div>

        {
          !isLoading ?
            <p className='p-cacc text-center'> <input type="submit" className='btn-cacc-su' value='Entrar en mi cuenta' /> </p>
            :
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}
      </form>


    </div>
  )
}
