import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { sendRecommendation } from '../../api/recommendations';
import { getUserData } from '../../api/users';
import '../../CSS/signupmssg.css'
import '../../CSS/signupForm.css'

export const SendRecommendation = (props) => {
    const [infoSent, setInfoSent] = useState(false);
    const { register, errors, handleSubmit } = useForm();
    const history = useHistory();
    const [, setData] = useState([])
    const [isCompany, setIsCompany] = useState(false)

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

    useEffect(() => {
        const any = async () => {

            getUserData(props.match.params.userId).then(apiRes => {
                setData(apiRes.data);
                if (apiRes.data.isCompany === true) {
                    setIsCompany(true);
                } else {
                    return null
                }

            })
        }
        any()
    }, [props.match.params.userId])

    return (


        <div className='div-wrapper'>

            {
                isCompany === true && isCompany!== null ?
                    <>
                        <img className='gamanfy-logo' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />
                        <div>
                            <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                                <div>
                                    <p className='p-signup'>
                                       ¿Conoces a la persona ideal para este puesto?
                                    </p>

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
                                        placeholder='Escribe sun email'
                                        className='form-control signup-fields mx-auto'
                                        ref={register({
                                            required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                                        })} />
                                </div>
                                <div>
                                   
                                    <textarea
                                        style={{ height: '6em' }}
                                        type="textarea"
                                        name="whyRec"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        placeholder='Cuéntale a esa persona brevemente quién eres y porqué has pensado en ella  '
                                        maxLength="4000"
                                    />
                                </div>

                                <input type='hidden' value={props.match.params.offerId} name='offerId' />
                                <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Recomendar' /> </p>
                            </form>

                        </div>
                    </>
                    :
                    <div>
                        <img className='gamanfy-logo d-block ml-4' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />

                        <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
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
                            <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Recomendar' /> </p>
                        </form>
                    </div>
            }

        </div>
    )
}

