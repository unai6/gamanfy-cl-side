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
import { uploadPDF } from '../../api/recommendations';

export const SendRecommendation = ({ ...wholeProps }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [, setInfoSent] = useState(true);
    const animatedComponents = makeAnimated();
    const { register, errors, handleSubmit } = useForm();
    const [, setData] = useState([]);
    const [isCompany, setIsCompany] = useState(false);
    const [foundCandidate, setHowFoundCandidate] = useState(howFoundCandidate);
    const [availab, setAvailab] = useState(availability);
    const [currentSit, setCurrentSit] = useState(currentSituation);
    const [language, setLanguage] = useState([]);
    const [copySuccess, setCopysuccess] = useState(false);
    const [inputToCopy, setInputToCopy] = useState('');
    const [curriculum, setCurriculum] = useState('');
    const [uploaded, setUploaded] = useState({})
    const [filename, setFilename] = useState('')

    const foundCandidateMap = foundCandidate.map(foundCandidateMap => foundCandidateMap);
    const availabilityMap = availab.map(availabilityMap => availabilityMap);
    const currentSitMap = currentSit.map(currentSitMap => currentSitMap)

    const handleChange = (e) => {
        setCurriculum(e.target.files[0])
        setFilename(e.target.files[0].name)
    }
    console.log(curriculum)


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

    const onSubmit = async (data) => {

        const formData = new FormData();
        formData.append('curriculum', curriculum);

        try {
             await companyUserSendRecommendation(wholeProps.userId, wholeProps.offerId, wholeProps.companyId, data)
            setInfoSent(true)
            document.location.reload(true)

            const res = await uploadPDF(wholeProps.userId, formData, {
                headers: {

                    'Content-type': 'multipart/form-data '
                }
            });

            const { filename, filePath } = res.data;
            setUploaded({ filename, filePath })
        } catch (error) {
            if (error.response.status === 500) {
                console.log('error 500 servidor')
            } else {
                console.log(error.response.data.error)
            }

        }




    }

    const onSubmitUser = (data) => {
        influencerUserSendRecommendation(wholeProps.companyId, wholeProps.userId, wholeProps.offerId, data)
            .then(function (result) {

                if (result.status === 200) {
                    setInfoSent(true)
                    document.location.reload(true)

                }
            })
            .catch(function (error) {

                if (error.response.status !== 200) {

                    setInfoSent(false);

                };
            });
    }



    return (


        <div>

            {
                isCompany === true && isCompany !== null ?

                    <form className='signUp-form send-rec-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                        <h4 className='h4-sendRec' style={{ textAlign: 'center' }}>¿Conoces a la persona ideal para <br />este puesto?</h4>
                        <div>
                            <p className='p-signup'>
                                ¡No olvides llamarla o comunicarte con ella primero para preguntarte si tiene interés en participar en este oferta!
                                    </p>

                        </div>
                        <div>
                            <p className='p-signup'>
                                ¿Cómo has encontrado al candidato?
                                    </p>

                        </div>
                        <label>

                            <select
                                name='howFoundCandidate'
                                className='form-control signup-fields fields-rec mx-auto'
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
                                Escribe sus datos personales y de contacto
                                    </p>

                        </div>
                        <div>
                            <input
                                type="text"
                                name="recommendedFirstName"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: true })}
                                placeholder='Nombre del Recomendado' />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="recommendedLastName"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: true })}
                                placeholder='Apellidos del Recomendado' />
                        </div>

                        <div></div>
                        <div>
                            <input
                                type="text"
                                name="recommendedPhoneNumber"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: false })}
                                placeholder='Número de Teléfono (opcional)' />
                        </div>


                        <div>
                            <input
                                type="text"
                                name="age"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: false })}
                                placeholder='Edad' />
                        </div>

                        <div>

                            {errors.email && <span> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
                            <input
                                type="text"
                                name="recommendedEmail"
                                placeholder='Escribe su email'
                                className='form-control signup-fields fields-rec mx-auto'
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
                                ref={register({ required: false })}
                            />
                        </div>
                        <div>
                            <label>Sube aquí su CV (en PDF o Word)</label>
                            <input
                                type="file"
                                name='curriculum'
                                onChange={handleChange}
                                className='form-control signup-fields fields-rec mx-auto'
                                placeholder='Sube aquí su CV (en PDF o Word)'
                                ref={register}
                            />

                            {/*      */}
                        </div>
                        <h4 className='h4-sendRec mb-4' style={{ textAlign: 'center' }}>Ahora, cuéntanos más detalles sobre la <br />persona que vas a recomendar</h4>


                        <div>
                            <label>¿Qué formación tiene el candidato?</label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="candidateEducation"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
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

                        <div className='mt-3'>
                            <label>¿Donde se localiza el candidato?</label>
                            <input
                                type="text"
                                name="candidateLocation"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: false })}
                                placeholder='Madrid' />

                        </div>
                        <div>
                            <label>¿Cuáles son sus experiencias más importantes? Destacar empresa, tiempo, posición y responsabilidades </label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="experiences"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: true })}
                                placeholder='Escribe aquí '
                                maxLength="4000"
                            />
                        </div>

                        <div>
                            <label>Describe su experiencia en un puesto similar al ofertado</label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="similarExp"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
                                maxLength="4000"
                            />
                        </div>


                        <div>
                            <label>¿Cuál fué su último puesto de trabajo?</label>
                            <input

                                type="text"
                                name="lastJob"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
                                maxLength="4000"
                            />
                        </div>

                        <div>
                            <label>¿Si tuvieras que describirle ¿Cuál dirías que son sus 3 rasgos clave?</label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="ownDescription"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
                                maxLength="4000"
                            />
                        </div>

                        <div>
                            <label>¿Cuales son sus motivaciones para cambiar de puesto de trabajo?</label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="motivations"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
                                maxLength="4000"
                            />
                        </div>
                        <div>
                            <label>¿Porqué crees que esta persona encaja para ese puesto de trabajo?</label>
                            <textarea
                                style={{ height: '6em' }}
                                type="textarea"
                                name="whyFits"
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: true })}
                                placeholder='Escribe aquí'
                                maxLength="4000"
                            />
                        </div>

                        <div>
                            <p className='p-signup'>
                                ¿Cuál es su disponibilidad para cambiar de puesto de trabajo?
                                    </p>

                        </div>
                        <label>

                            <select
                                name='availability'
                                className='form-control signup-fields fields-rec mx-auto'
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
                                className='form-control signup-fields fields-rec mx-auto'
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
                                className='form-control signup-fields fields-rec mx-auto'
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
                                className='form-control signup-fields fields-rec mx-auto'
                                ref={register({ required: true })}
                                placeholder='Otros Aspectos'
                                maxLength="4000"
                            />
                        </div>

                        <input type='hidden' value={wholeProps.offerId} name='offerId' />
                        <button onSubmitCapture={hideModal} className='btn-cacc-su d-block mx-auto' style={{ width: '18em', marginBottom: '2em' }}> ENVIAR RECOMENDACIÓN</button>
                    </form>


                    :
                    <div>
                        <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmitUser)} autoComplete='off'>
                            <div>
                                <p className='p-signup' style={{ fontSize: '1.2em' }}>
                                    ¿Conoces a la persona ideal para este puesto?
                                </p>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="recommendedFirstName"
                                    className='form-control signup-fields  mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='Nombre del Recomendado' />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="recommendedLastName"
                                    className='form-control signup-fields  mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='Apellidos del Recomendado' />
                            </div>

                            <div>
                                {errors.email && <span> {errors.email.message ? errors.email.message : 'Este campo es obligatorio'} </span>}
                                <input
                                    type="text"
                                    name="recommendedEmail"
                                    placeholder='Email del recomendado'
                                    className='form-control signup-fields  mx-auto'
                                    ref={register({
                                        required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'La dirección no es válida' }
                                    })} />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="recommendedPhoneNumber"
                                    className='form-control signup-fields  mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='Número de Teléfono' />
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
                                    ref={register({ required: false })}
                                    placeholder='Edad' />
                            </div>

                            <div>
                                <textarea
                                    style={{ height: '6em' }}
                                    type="textarea"
                                    name="whyRec"
                                    className='form-control signup-fields fields-rec mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='¿Porque recomendarías a este profesional?'
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
                                    className='form-control signup-fields mx-auto'
                                    defaultValue={`${process.env.REACT_APP_CLIENT}/offer-details/${wholeProps.offerId}`}

                                />

                                <i className="far fa-clone" onClick={copyCodeToClipboard} onClickCapture={showModal}></i>
                                <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Recomendar' onClick={hideModal} /> </p>

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

