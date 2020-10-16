import React, { useState, useEffect } from 'react';
import { candidateReport } from '../../api/offers';
import '../../CSS/candidateReport.css';
import {updateProcessPlusCandidateInterview} from '../../api/recommendations';
import Modal from "react-bootstrap/Modal";

export const CandidateReport = (props) => {
    const [infoSent, setInfoSent] = useState(false)
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const any = async () => {
            const result = await candidateReport(props.match.params.recommendationId);
            console.log('result', result.data)
                setData(result.data)
        }
        any()
    }, [props.match.params.recommendationId])


    const handleWantInterview = () => {
        updateProcessPlusCandidateInterview(data.offerId, props.match.params.recommendationId)
        setInfoSent(true)
    }
    
    const showModal = () => {
        setIsOpen(true);
      
    };
    const hideModal = () => {
        setIsOpen(false);
    };


    return (
        <div>
            <div className='div-report'>
                
                <img className=' image-candidate-report' src='/Gamanfy-logo-email-candidate-report.png' alt='pic' />
               
                <h4 className='h3-report'><u>INFORME DEL CANDIDATO</u></h4>
                {
                    data ?
                        <>
                            <section>
                                
                                <div className='div-infoCandidate'>
                                    <p className='names-candidate'>{data.recommendedFirstName} {data.recommendedLastName}</p>
                                    <p className='email-candidate'>{data.recommendedEmail} </p>
                                    <p className='phone-candidate'>{data.recommendedPhoneNumber}</p>
                                    <p className='linkedin-candidate'>{data.recommendedLinkedin}</p>

                                </div>
                                    <p className='p-nameCandidate text-left  mt-4'>¿CÓMO EL INFLUENCER HA ENCONTRADO AL CANDIDATO?</p>
                                    <p className='linkedin-candidate'>{data.howFoundCandidate}</p>
                                {
                                    data.curriculum 
                                    ?
                                    <button className='btn-donwloadCV'><a className='a-download-cv' href={data.curriculum} download>DESCARGAR CV DEL CANDIDATO(PDF)</a></button>
                                    :
                                    <p className='p-signup text-left text-danger'> No hay ningún curriculum disponible</p>
                                }
                            </section>

                            <section>

                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>ESTUDIOS</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.candidateEducation : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>ÚLTIMO PUESTO DE TRABAJO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.lastJob : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>EXPECTATIVAS SALARIALES</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.moneyExpec : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>DISPONIBILIDAD PARA CAMBIAR DE PUESTO DE TRABAJO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.availability : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>
                               
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>IDIOMAS </p>
                                    <ul>
                                        <p className='li-education'>{data.candidateInfo ? data.candidateInfo.language.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").replace(/,/g, ', ').split(', ').map((lang, index) => {

                                            return (
                                                <li className='longP' key={index}>{lang}</li>

                                            )
                                        }) : <span className='p-inputs'>Información no disponible</span>}
                                        </p>
                                    </ul>
                                </div>
                                <div className='second-bg'>
                                    <p className='p-nameCandidate text-left  mt-4'>LOCALIZACIÓN DEL CANDIDATO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.candidateLocation : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>EXPERIENCIAS PROFESIONALES MÁS RELEVANTES</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.experiences : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>EXPERIENCIA EN PUESTO SIMILAR AL OFERTADO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.similarExp : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>RASGOS PRINCIPALES DEL CANDIDATO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.ownDescription : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>MOTIVACIONES PARA CAMBIAR DE PUESTO DE TRABAJO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.motivations : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>
                                <div className='third-bg'>
                                    <p className='p-nameCandidate text-left  mt-4'>¿PORQUE ENCAJA EN ESTE PUESTO DE TRABAJO?</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.whyFits : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>SITUACIÓN ACTUAL DEL CANDIDATO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.currentSituation : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>OTROS ASPECTOS A TENER EN CUENTA</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.otherAspects : <p className='p-inputs'>Información no disponible</p>}</li>
                                    </ul>
                                </div>
                                {
                                    infoSent ? 
                                   
                                    <Modal show={isOpen} onHide={hideModal}>
                                        <Modal.Body>
                                            <p className='p-inputs'>¡El candidato ha pasado a formar parte del Proceso de Selección, nos pondremos en contacto contigo en breves! </p>
                                        </Modal.Body>
                                    </Modal>
                                

                                :

                                <button className='btn-test' onClick={handleWantInterview} onClickCapture={showModal}>QUIERO HACER UNA VIDEOENTREVISTA Y UN TEST PSICOTÉCNICO AL CANDIDATO</button>
                                }

                            </section>
                            
                                        
                        </>
                        : null
                }
            </div>
        
        </div>
    )
}


