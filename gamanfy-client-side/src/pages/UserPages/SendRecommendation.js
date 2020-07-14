import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { sendRecommendation } from '../../api/recommendations';
import { getUserData } from '../../api/users';
import { howFoundCandidate, availability, currentSituation } from '../../FolderForSelects/htmlSelects';
import { languageOptions } from '../../FolderForSelects/languageOptions';
import '../../CSS/signupmssg.css';
import '../../CSS/signupForm.css';

export const SendRecommendation = (wholeProps) => {

    const [infoSent, setInfoSent] = useState(false);
    const animatedComponents = makeAnimated();
    const { register, errors, handleSubmit } = useForm();
    const history = useHistory();
    const [, setData] = useState([]);
    const [isCompany, setIsCompany] = useState(false);
    const [foundCandidate, setHowFoundCandidate] = useState(howFoundCandidate);
    const [availab, setAvailab] = useState(availability);
    const [currentSit, setCurrentSit] = useState(currentSituation);
    const [language, setLanguage] = useState([]);

    const foundCandidateMap = foundCandidate.map(foundCandidateMap => foundCandidateMap);
    const availabilityMap = availab.map(availabilityMap => availabilityMap);
    const currentSitMap = currentSit.map(currentSitMap => currentSitMap)

    const handleFoundCandidate = () => setHowFoundCandidate(foundCandidateMap);
    const handleAvailability = () => setAvailab(availabilityMap);
    const handleCurrentSit = () => setCurrentSit(currentSitMap);

    let languageOptionsToSet = languageOptions.map((lang, index) => {
        return {
            label: lang.label,
            value: lang.value,
            key: index,
        }
    });

    const customTheme = (theme) => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'rgb(255, 188, 73)',
                primary: 'blue'
            }
        }
    }



    const onSubmit = (data) => {

        sendRecommendation(wholeProps.companyId, wholeProps.offerId, wholeProps.userId, data)
            .then(function (result) {

                if (result.status === 200) {
                    setInfoSent(!infoSent)
                    history.push(`/user/${wholeProps.userId}/dashboard`)
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

            getUserData(wholeProps.userId).then(apiRes => {
                setData(apiRes.data);
                if (apiRes.data.isCompany === true) {
                    setIsCompany(true);
                } else {
                    return null
                }

            })
        }
        any()
    }, [wholeProps.userId])

    return (


        <div>

            {
                isCompany === true && isCompany !== null ?
                    <>
                        <img className='gamanfy-logo' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />
                        <div>
                            <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                                <div>
                                    <p className='p-signup'>
                                        ¿Cómo has encontrado al candidato?
                                    </p>

                                </div>
                                <label>

                                    <select
                                        name='howFoundCandidate'
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        onChange={e => handleFoundCandidate(e)}
                                    >
                                        {
                                            foundCandidateMap.map((doc, key) => {

                                                return <option key={key} value={doc}>{doc}</option>;

                                            })

                                        }
                                    </select>
                                </label>
                                <div>
                                    <p className='p-signup'>
                                        Datos del candidato
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
                                    <input
                                        type="text"
                                        name="recommendedPhoneNumber"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        placeholder='Número de Teléfono' />
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
                                    <input
                                        type="text"
                                        name="recommendedLinkedin"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: false })}
                                        placeholder='URL Linkedin' />
                                </div>

                                <div>
                                    <p className='p-signup'>
                                        Informe sobre el candidato
                                    </p>

                                </div>

                                <div>
                                    <textarea
                                        style={{ height: '6em' }}
                                        type="textarea"
                                        name="candidateEducation"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        placeholder='¿Qué formación tiene el candidato? '
                                        maxLength="4000"
                                    />
                                </div>
                                <>
                                    <div>
                                        <label>¿Qué idiomas habla?</label>
                                        <Select

                                            closeMenuOnSelect={false}
                                            theme={customTheme}
                                            components={animatedComponents}
                                            placeholder='Seleccionar'
                                            isMulti
                                            isSearchable
                                            options={languageOptionsToSet}
                                            onChange={setLanguage}
                                            noOptionsMessage={() => 'No existen más opciones'}
                                            name="language"
                                            value={language}
                                        />

                                        {language !== null && (<input name='language' type='hidden' ref={register()} onChange={setLanguage} value={JSON.stringify(language.map(lang => lang.value))} />)}
                                    </div>
                                </>

                                <div>
                                    <input
                                        type="text"
                                        name="candidateLocation"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: false })}
                                        placeholder='¿Donde se localiza el candidato?' />

                                </div>
                                <div>
                                    <textarea
                                        style={{ height: '6em' }}
                                        type="textarea"
                                        name="experiences"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        placeholder='¿Cuáles son sus experiencias más importantes? Destacar empresa, tiempo, posición y responsabilidades, etc... '
                                        maxLength="4000"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        style={{ height: '6em' }}
                                        type="textarea"
                                        name="similiarExp"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        placeholder='Describe su experiencia en un puesto similar al ofertado '
                                        maxLength="4000"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        style={{ height: '6em' }}
                                        type="textarea"
                                        name="ownDescription"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        placeholder='¿Si tuvieras que describirle ¿Cuál dirías que son sus 3 rasgos clave?'
                                        maxLength="4000"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        style={{ height: '6em' }}
                                        type="textarea"
                                        name="motivations"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        placeholder='¿Cuales son sus motivaciones para cambiar de puesto de trabajo?'
                                        maxLength="4000"
                                    />
                                </div>

                                <div>
                                    <p className='p-signup'>
                                        ¿Cuál es su disponibilidades para cambiar de puesto de trabajo?
                                    </p>

                                </div>
                                <label>

                                    <select
                                        name='availability'
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        onChange={e => handleAvailability(e)}
                                    >
                                        {
                                            availabilityMap.map((doc, key) => {

                                                return <option key={key} value={doc}>{doc}</option>;

                                            })

                                        }
                                    </select>
                                </label>

                                <div>
                                    <textarea
                                        style={{ height: '6em' }}
                                        type="textarea"
                                        name="moneyExpec"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        placeholder='¿Cuáles son sus expectativas salariales?'
                                        maxLength="4000"
                                    />
                                </div>

                                <div>
                                    <p className='p-signup'>
                                        Describir situación actual
                                    </p>

                                </div>
                                <label>
                                    <select
                                        name='currentSituation'
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        onChange={e => handleCurrentSit(e)}
                                    >
                                        {
                                            currentSitMap.map((doc, key) => {

                                                return <option key={key} value={doc}>{doc}</option>;

                                            })

                                        }
                                    </select>
                                </label>

                                <div>
                                    <textarea
                                        style={{ height: '6em' }}
                                        type="textarea"
                                        name="otherAspects"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        placeholder='¿Cuáles son sus expectativas salariales?'
                                        maxLength="4000"
                                    />
                                </div>
        


                                <input type='hidden' value={wholeProps.offerId} name='offerId' />
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

