import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { sendRecommendation } from '../../api/recommendations';

export const SendRecommendation = (props) => {
    const [infoSent, setInfoSent] = useState(false);
    const { register, errors, handleSubmit} = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
  
        sendRecommendation(props.match.params.companyId, props.match.params.offerId, props.match.params.userId, data)
        .then(function (result) {

            if (result.status === 200) {
                setInfoSent(!infoSent)
                history.push(`/`)
            } else {
                setInfoSent(infoSent);
            };
        })
        .catch(function (error) {

            if (error.response.status !== 200) {

                setInfoSent(false);
                return;
            };
        });
    }
    return (
        <div className='div-wrapper'>
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
                                name="recommendedFirstName"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                placeholder='Nombre del Recomendado' />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="recommendedLastName"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                placeholder='Apellidos del Recomendado' />
                        </div>

                        <div>
                            {errors.email && <span> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
                            <input
                                type="text"
                                name="recommendedEmail"
                                placeholder='Email del recomendado'
                                className='form-control signup-fields mx-auto'
                                ref={register({
                                    required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                                })} />
                        </div>
                        <div>
                                <div><label>Misión principal</label></div>
                                <textarea
                                    style={{ height: '6em' }}
                                    type="textarea"
                                    name="whyRec"
                                    className='form-control signup-fields mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='Indica en una frase porque crees que es una persona apta al puesto de trabajo'
                                    maxLength="4000"
                                />
                            </div>
                            
                        <input type='hidden' value={props.match.params.offerId} name='offerId'/>
                        <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Recomendar' /> </p>       
                    </form>

                </div>
            </>

        </div>
    )
}

