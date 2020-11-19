import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useForm } from "react-hook-form";
import { companyUserSendRecommendation, influencerUserSendRecommendation } from '../../api/recommendations';
import { getUserData } from '../../api/users';
import { howFoundCandidate, availability, currentSituation } from '../../FolderForSelects/htmlSelects';
import { languageOptions } from '../../FolderForSelects/languageOptions';
import Modal from "react-bootstrap/Modal";
import '../../CSS/signupmssg.css';
import '../../CSS/signupForm.css';
import Loader from 'react-loader-spinner';

export const SendRecommendation = ({ ...wholeProps }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [infoSent, setInfoSent] = useState(false);
    const animatedComponents = makeAnimated();
    const { register, errors, handleSubmit } = useForm();
    const [, setData] = useState([]);
    const [isCompany, setIsCompany] = useState(false);
    const availab = availability;
    const currentSit = currentSituation;
    const [language, setLanguage] = useState([]);
    const [copySuccess, setCopysuccess] = useState(false);
    const [inputToCopy, setInputToCopy] = useState('');
    const [inputValue, setInputValue] = useState(undefined)


    const foundCandidateMap = howFoundCandidate.map((doc, key) => {return <option key={key} value={doc}>{doc}</option>});
    const availabilityMap = availab.map((doc, key) => {return <option key={key} value={doc}>{doc}</option>});
    const currentSitMap = currentSit.map((doc, key) => {return <option key={key} value={doc}>{doc}</option>})

    let languageOptionsToSet = languageOptions.map((lang, index) => {
        return {
            label: lang.label,
            value: lang.value,
            key: index,
        }
    });

    const customTheme = (theme) => {
        if (!errors.recommendedFirstName) {
            return {
                ...theme,

                colors: {
                    ...theme.colors,
                    primary25: 'rgb(255, 188, 73)',
                    primary: 'blue'
                }
            }
        } else {
            return {
                ...theme,

                colors: {
                    ...theme.colors,
                    primary25: 'rgb(255, 188, 73)',
                    primary: 'red'
                }
            }
        }
    }

    const copyCodeToClipboard = () => {
        inputToCopy.select();
        document.execCommand("copy");
        setCopysuccess(!copySuccess);
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
    }, [wholeProps.userId]);

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    const handleChange = (e) => {
        setInputValue(e.target.files[0].name)
    };

    const onSubmit = async (data) => {
        try {

            setInfoSent(true)
            const formData = new FormData();
            formData.append('howFoundCandidate', data.howFoundCandidate);
            formData.append('recommendedFirstName', data.recommendedFirstName);
            formData.append('recommendedLastName', data.recommendedLastName);
            formData.append('recommendedPhoneNumber', data.recommendedPhoneNumber);
            formData.append('age', data.age)
            formData.append('recommendedLinkedin', data.recommendedLinkedin);
            formData.append('recommendedEmail', data.recommendedEmail);
            formData.append('curriculum', data.curriculum[0]);
            formData.append('candidateEducation', data.candidateEducation);
            formData.append('language', data.language);
            formData.append('candidateLocation', data.candidateLocation);
            formData.append('experiences', data.experiences);
            formData.append('similarExp', data.similarExp);
            formData.append('lastJob', data.lastJob);
            formData.append('ownDescription', data.ownDescription);
            formData.append('motivations', data.motivations);
            formData.append('whyFits', data.whyFits);
            formData.append('availability', data.availability);
            formData.append('moneyExpec', data.moneyExpec);
            formData.append('currentSituation', data.currentSituation);
            formData.append('otherAspects', data.otherAspects);

            await companyUserSendRecommendation(wholeProps.userId, wholeProps.offerId, wholeProps.companyId, formData)

            document.location.reload()
        } catch (error) {
            console.log(error)
        };
    };

    const onSubmitUser = (data) => {
        influencerUserSendRecommendation(wholeProps.companyId, wholeProps.userId, wholeProps.offerId, data)
            .then(function (result) {

                if (result.status === 200) {
                    setInfoSent(true)
                    document.location.reload()

                }
            })
            .catch(function (error) {

                if (error.response.status !== 200) {

                    setInfoSent(false);

                };
            });
    }


    const isNotMobile = window.innerWidth < 1024

    return (


        <div>

            {
                isCompany && isCompany !== null ?

                    <form className='signUp-form send-rec-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                        <h4 className='h4-sendRec' style={{ textAlign: 'center' }}>¿Conoces a la persona ideal para <br />este puesto?</h4>
                        <div>
                            <p className='p-signup'>
                                ¡No olvides llamarla o comunicarte con ella primero para preguntarte si tiene interés en participar en este oferta!
                                    </p>

                        </div>
                        {errors.howFoundCandidate && <span className='text-danger'> Este campo es obligatorio</span>}
                        <div>
                            <label>
                                ¿Cómo has encontrado al candidato?*
                            </label>
                        </div>
                        <label>

                            <select
                                name='howFoundCandidate'
                                className={errors.howFoundCandidate ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({ required: true })}
                                
                            >
                                <option value=''>Seleccionar</option>
                                {foundCandidateMap}
                            </select>
                        </label>

                        <div>
                            <label >
                                Escribe sus datos personales y de contacto
                            </label>

                        </div>
                        {errors.recommendedFirstName && <span className='text-danger '> Este campo es obligatorio</span>}
                        <div>
                            <input
                                type="text"
                                name="recommendedFirstName"
                                className={errors.recommendedFirstName ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({ required: true })}
                                placeholder='Nombre del Recomendado*' />
                        </div>

                        {errors.recommendedLastName && <span className='text-danger border-danger'> Este campo es obligatorio</span>}
                        <div>
                            <input
                                type="text"
                                name="recommendedLastName"
                                className={errors.recommendedLastName ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({ required: true })}
                                placeholder='Apellidos del Recomendado*' />
                        </div>

                        <div></div>
                        <div>
                            <input
                                type="text"
                                name="recommendedPhoneNumber"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register}
                                placeholder='Número de Teléfono' />
                        </div>


                        <div>
                            <input
                                type="text"
                                name="age"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register}
                                placeholder='Edad' />
                        </div>

                        {errors.email && <span className='text-danger'> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
                        <div>
                            <input
                                type="text"
                                name="recommendedEmail"
                                placeholder='Escribe su email*'
                                className={errors.recommendedEmail ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({
                                    required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                                })} />
                        </div>

                        <div></div>

                        <div>
                            <input
                                type="text"
                                name="recommendedLinkedin"
                                className='form-control signup-fields fields-rec mx-auto'
                                placeholder='Añade el Link a su perfil de Linkedin'
                                ref={register}
                            />
                        </div>

                        <div className='cv-wrapper'>

                            <label htmlFor='cv-upload' className='form-control signup-fields fields-rec mx-auto label-cv'>{inputValue === undefined ? 'Sube aquí su CV (en PDF )' : !isNotMobile ? inputValue.substring(40, -1) + '...' : inputValue.substring(20, -1) + '...'}</label>
                            {
                                !isNotMobile ?
                                    <label className='browse-files' htmlFor='cv-upload'>Explorar archivos</label>
                                    :
                                    <label htmlFor='cv-upload' ><i className="fas fa-upload user-upload-cv"></i></label>
                            }
                            <input
                                onChange={handleChange}
                                id='cv-upload'
                                type="file"
                                name='curriculum'
                                className='form-control signup-fields fields-rec mx-auto upload-cv'
                                ref={register}
                            />


                        </div>
                        <h4 className='h4-sendRec mb-4' style={{ textAlign: 'center' }}>Ahora, cuéntanos más detalles sobre la <br />persona que vas a recomendar</h4>

                        {errors.candidateEducation && <span className='text-danger '> Este campo es obligatorio</span>}
                        <div>
                            <label>¿Qué formación tiene el candidato?*</label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="candidateEducation"
                                className={errors.candidateEducation ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
                                maxLength="4000"
                            />
                        </div>
                        <>
                            {errors.recommendedFirstName && <span className='text-danger '> Este campo es obligatorio</span>}
                            <div>
                                <label>¿Qué idiomas habla?*</label>
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

                                {language !== null && (<input name='language' type='hidden' ref={register({ required: true })} onChange={setLanguage} value={JSON.stringify(language.map(lang => lang.value))} />)}
                            </div>
                        </>

                        <div className='mt-3'>
                            <label>¿Donde se localiza el candidato?</label>
                            <input
                                type="text"
                                name="candidateLocation"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register}
                                placeholder='Madrid' />

                        </div>
                        {errors.experiences && <span className='text-danger '> Este campo es obligatorio</span>}
                        <div>
                            <label>¿Cuáles son sus experiencias más importantes? Destacar empresa, tiempo, posición y responsabilidades*</label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="experiences"
                                className={errors.experiences ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({ required: true })}
                                placeholder='Escribe aquí '
                                maxLength="4000"
                            />
                        </div>

                        {errors.similarExp && <span className='text-danger '> Este campo es obligatorio</span>}
                        <div>
                            <label>Describe su experiencia en un puesto similar al ofertado*</label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="similarExp"
                                className={errors.similarExp ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
                                maxLength="4000"
                            />
                        </div>

                        {errors.lastJob && <span className='text-danger '> Este campo es obligatorio</span>}
                        <div>
                            <label>¿Cuál fué su último puesto de trabajo?*</label>
                            <input

                                type="text"
                                name="lastJob"
                                className={errors.lastJob ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
                                maxLength="4000"
                            />
                        </div>

                        {errors.ownDescription && <span className='text-danger '> Este campo es obligatorio</span>}
                        <div>
                            <label>¿Si tuvieras que describirle ¿Cuál dirías que son sus 3 rasgos clave?*</label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="ownDescription"
                                className={errors.ownDescription ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
                                maxLength="4000"
                            />
                        </div>

                        {errors.motivations && <span className='text-danger '> Este campo es obligatorio</span>}
                        <div>
                            <label>¿Cuales son sus motivaciones para cambiar de puesto de trabajo?*</label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="motivations"
                                className={errors.motivations ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
                                maxLength="4000"
                            />
                        </div>
                        {errors.whyFits && <span className='text-danger '> Este campo es obligatorio</span>}
                        <div>
                            <label>¿Por qué crees que esta persona encaja para ese puesto de trabajo?*</label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="whyFits"
                                className={errors.whyFits ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
                                maxLength="4000"
                            />
                        </div>

                        <div >
                            <label className='p-signup'>
                                ¿Cuál es su disponibilidad para cambiar de puesto de trabajo?*
                            </label>

                        </div>
                        {errors.availability && <span className='text-danger '> Este campo es obligatorio</span>}
                        <label>
                            <select

                                name='availability'
                                className={errors.availability ? ' border-danger form-control signup-fields fields-rec mx-auto long-select' : 'form-control signup-fields fields-rec mx-auto long-select'}
                                ref={register({ required: true })}
                             
                            >
                               <option value=''>Seleccionar</option>
                               {availabilityMap}
                            </select>
                        </label>
                        {errors.moneyExpec && <span className='text-danger '> Este campo es obligatorio</span>}
                        <div>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="moneyExpec"
                                className={errors.moneyExpec ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                ref={register({ required: true })}
                                placeholder='¿Cuáles son sus expectativas salariales?*'
                                maxLength="4000"
                            />
                        </div>

                        <div>
                            <label className='p-signup'>
                                Describir situación actual*
                            </label>

                        </div>
                        {errors.currentSituation && <span className='text-danger '> Este campo es obligatorio</span>}
                        <label>
                            <select

                                name='currentSituation'
                                className={errors.currentSituation ? ' border-danger form-control signup-fields fields-rec mx-auto long-select' : 'form-control signup-fields fields-rec mx-auto long-select'}
                                ref={register({ required: true })}
                             
                            >
                            <option value=''>Seleccionar</option>
                                { currentSitMap}
                            </select>
                        </label>

                        <div>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="otherAspects"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register}
                                placeholder='Otros Aspectos'
                                maxLength="4000"
                            />
                        </div>

                        <input type='hidden' value={wholeProps.offerId} name='offerId' />

                        {
                            infoSent ? <Loader type="ThreeDots" color="rgb(255, 188, 73)" height={80} width={80} />
                                :
                                <button onSubmitCapture={hideModal} className='btn-cacc border-0 d-block mx-auto' style={{ width: '18em', marginBottom: '2em' }}> ENVIAR RECOMENDACIÓN</button>
                        }


                    </form>


                    :
                    <div>
                        <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmitUser)} autoComplete='off'>

                            <div>
                                <label className='p-signup' style={{ fontSize: '1.2em' }}>
                                    ¿Conoces a la persona ideal para este puesto?*
                                </label>
                            </div>
                            {errors.recommendedFirstName && <span className='text-danger'>Este campo es obligatorio</span>}
                            <div>
                                <input
                                    type="text"
                                    name="recommendedFirstName"
                                    className={errors.recommendedFirstName ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                    ref={register({ required: true })}
                                    placeholder='Nombre del Recomendado*' />
                            </div>
                            {errors.recommendedLastName && <span className='text-danger'>Este campo es obligatorio</span>}
                            <div>
                                <input
                                    type="text"
                                    name="recommendedLastName"
                                    className={errors.recommendedLastName ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                    ref={register({ required: true })}
                                    placeholder='Apellidos del Recomendado*' />
                            </div>

                            <div>
                                {errors.recommendedEmail && <span className='text-danger'> {errors.recommendedEmail.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
                                <input
                                    type="text"
                                    name="recommendedEmail"
                                    placeholder='Email del recomendado*'
                                    className={errors.recommendedEmail ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                    ref={register({
                                        required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                                    })} />
                            </div>
                            {errors.recommendedPhoneNumber && <span className='text-danger'>Este campo es obligatorio</span>}
                            <div>
                                <input
                                    type="text"
                                    name="recommendedPhoneNumber"
                                    className={errors.recommendedPhoneNumber ? ' border-danger form-control signup-fields fields-rec mx-auto' : 'form-control signup-fields fields-rec mx-auto'}
                                    ref={register({ required: true })}
                                    placeholder='Número de Teléfono*' />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="recommendedLinkedin"
                                    className='form-control signup-fields  mx-auto'
                                    placeholder='Añade el Link a su perfil de Linkedin'
                                    ref={register}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="recommendedAge"
                                    className='form-control signup-fields fields-rec mx-auto'
                                    ref={register}
                                    placeholder='Edad' />
                            </div>
                            {errors.whyRec && <span className='text-danger'>Este campo es obligatorio</span>}
                            <div>
                                <textarea
                                    style={{ height: '6em' }}
                                    type="textarea"
                                    name="whyRec"
                                    className='form-control signup-fields fields-rec mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='¿Por qué recomendarías a este profesional?*'
                                    maxLength="4000"
                                />
                            </div>

                            <div>
                                <p className='p-signup'>
                                    O si lo prefieres puedes compartir esta oferta por otros medios:<br />
                                    <i className="fab fa-facebook-square icon-rec"></i> <i className="fab fa-twitter icon-rec"></i> <i className="fab fa-whatsapp icon-rec"></i> <i className="fab fa-telegram icon-rec"></i>
                                </p>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    ref={(inputToCopy) => setInputToCopy(inputToCopy)}
                                    className='form-control signup-fields mx-auto copy-input'
                                    defaultValue={`${process.env.REACT_APP_CLIENT}/offer-details/${wholeProps.offerId}`}

                                />

                                <i className="far fa-clone" onClick={copyCodeToClipboard} onClickCapture={showModal}></i>
                                {
                                    infoSent ? <Loader type="ThreeDots" color="rgb(255, 188, 73)" height={80} width={80} />
                                        :

                                        <p className='p-cacc btn-cacc border-0 mx-auto'> <input type="submit" className='btn-cacc-su' value='Recomendar' onClick={hideModal} /> </p>
                                }

                                {
                                    copySuccess === true ? <Modal className='modalBody-sendRec' centered show={isOpen} onHide={hideModal}><Modal.Body className='modal-body-sendRec'> <p className='p-signup'>Mensaje Copiado Correctamente al Portapapeles</p></Modal.Body></Modal> : null
                                }
                            </div>

                            <div>
                                <p className='p-signup' style={{ fontSize: '.8em' }}>
                                    ¿Aún no conoces a nadie para recomendar? ¡Tal vez el candidato ideal está entre <br />
                                    tus contactos de Linkedin!
                                </p>
                            </div>
                            <div>
                                <p className='p-signup' style={{ fontSize: '.8em' }}>
                                    <i className="fab fa-linkedin"></i> <u> <a href='https://www.linkedin.com/feed/' className='linkedin-link'>Buscar al candidato ideal entre tus contactos de Linkedin</a></u>
                                </p>
                            </div>
                        </form>
                    </div>
            }

        </div>
    )
}

