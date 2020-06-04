import { useForm } from "react-hook-form";
import React, { useContext } from 'react';
import {useHistory} from "react-router-dom"
import AuthContext from '../context/auth/authContext';

export const CompanyLogin = () => {

  const authContext = useContext(AuthContext);
  const { authenticate } = authContext;
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    authenticate(data)
    history.push('/');
  };
  
  return (
    <div>
      <h1>LOGIN</h1>
      <form  onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

        <div>  
          <input 
            type="text" 
            name="email" 
            placeholder='Email'
            ref={register({ required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'invalid email adress'} })}/>
            {errors.email && <span> {errors.email.message? errors.email.message : 'This field is required'} </span>}
        </div>

        <div>
          <input 
            type="password" 
            name="password" 
            ref={register({ required: true })} 
            placeholder='Password'/>
          {errors.password && <span>This field is required</span>}
        </div>

        <div>
          <label><input type="checkbox" name="remember" ref={register}/> Remember me</label>
        </div>

        <input type="submit" />
      </form>
    </div>
  )
}
