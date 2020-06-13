import { useForm } from "react-hook-form";
import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';


export const CompanyLogin = () => {

  const authContext = useContext(AuthContext);
  const { authenticateCompany } = authContext;
  const { register, handleSubmit, errors } = useForm();

 


  
  const onSubmit = data => {
    authenticateCompany(data)

  };

  
  
  return (
    <div>
    <img className='gamanfy-logo' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />

    <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
    <h3>Login</h3>
      <div>
        <input
          className='form-control signup-fields mx-auto'
          type="text"
          name="email"
          placeholder='Email'
          ref={register({ required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'invalid email adress' } })} />
        {errors.email && <span> {errors.email.message ? errors.email.message : 'This field is required'} </span>}
      </div>

      <div>
        <input
          className='form-control signup-fields mx-auto'
          type="password"
          name="password"
          ref={register({ required: true })}
          placeholder='Password' />
        {errors.password && <span>This field is required</span>}
      </div>

      <div>
        <label>
          <input className='checkbox-label' disabled />
          <input className='checkbox-round' type="checkbox" name="remember" ref={register} /> Recuérdame</label>
      </div>

      <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Entrar en mi cuenta' /> </p>
    </form>

    
  </div>
  )
}
