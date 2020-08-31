import React , {useState} from 'react'
import { useForm } from "react-hook-form";
import { resetUserPasswordMail } from '../../api/auth.api';

export const UserPasswordReset = () => {

    const { register, handleSubmit, errors } = useForm();
    const [infoSent, setInfoSent] = useState(false);


    const onSubmit = async () => {
         await resetUserPasswordMail();
        setInfoSent(true);
  
    }

    return (
        <div className='home-container'>
            <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                <p className='p-inputs'> Escribe tu email</p>
                <div>
                    {errors.email && <span className='p-inputs'> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}

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
                {
                    !infoSent ?
                <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Enviar correo' /> </p>
                :
                <p className='p-inputs'> !Estupendo!, chequea tu correo para restablecer tu contraseña.</p>
                }

            </form>

        </div>
    )
};

