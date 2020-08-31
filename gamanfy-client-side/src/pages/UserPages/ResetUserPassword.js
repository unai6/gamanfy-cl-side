
import React , {useState} from 'react'
import { useForm } from "react-hook-form";
import {userPasswordReset} from '../../api/auth.api.js';

export const ResetUserPassword = (props) => {

    const { register, handleSubmit, errors, watch } = useForm();
    const [infoSent, setInfoSent] = useState(false);

    
    const onSubmit = async (data) => {
        const result = await userPasswordReset(props.match.params.userId, data);
        setInfoSent(true);
        console.log(result)
    }

    return (

        <div className='home-container'>
        <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <p className='p-inputs'> Escribe tu nueva contraseña</p>
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

              {errors.repeatPassword && <span className='p-inputs'>{errors.repeatPassword.message ? errors.repeatPassword.message : 'Este campo es obligatorio'}</span>}
              {
                  errors.repeatPassword ?
                  
                <input
                    type="password"
                    name="repeatPassword"
                    className='form-control signup-fields mx-auto border border-danger'
                    ref={register({
                    validate: (value) => value === watch('password') || 'Las contraseñas deben coincidir'
                    })}
                    placeholder='Repite la Contraseña'

                />
                :
                <input
                    type="password"
                    name="repeatPassword"
                    className='form-control signup-fields mx-auto'
                    ref={register({
                    validate: (value) => value === watch('password') || 'Las contraseñas deben coincidir'
                    })}
                    placeholder='Repite la Contraseña'

                />
              }
              </div>

            {
            !infoSent ?
            <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Cambiar Contraseña' /> </p>
            :
            <p className='p-inputs'> !Gracias, tu contraseña se ha cambiado!. <a href={`${process.env.REACT_APP_CLIENT}/auth/login`}>Volver al login</a></p>
            }

        </form>

    </div>
    )
}

