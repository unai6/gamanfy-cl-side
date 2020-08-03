import React, { useState, useEffect } from 'react';
import { candidateReport } from '../../api/offers';
import '../../CSS/candidateReport.css';
import {updateProcessPlusCandidateInterview} from '../../api/recommendations';
import Modal from "react-bootstrap/Modal";

export const CandidateReport = (props) => {
    const [infoSent, setInfoSent] = useState(false)
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        const any = async () => {
            candidateReport(props.match.params.recommendationId).then((apiRes) => {
                console.log(apiRes)
                setData(apiRes.data)

            })
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
        <div className='p-0'>
            <div className='div-report mx-auto p-0'>

                <img className=' image-candidate-report' src='\Anotación 2020-07-30 172748.png' alt='pic' />
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
                                <button className='btn-donwloadCV'>DESCARGAR CV DEL CANDIDATO(PDF)</button>
                            </section>

                            <section>

                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>ESTUDIOS</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.candidateEducation : null}</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>ÚLTIMO PUESTO DE TRABAJO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.lastJob : null}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>EXPECTATIVAS SALARIALES</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.moneyExpec : null}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>DISPONIBILIDAD PARA CAMBIAR DE PUESTO DE TRABAJO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.availability : null}</li>
                                    </ul>
                                </div>
                               
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>IDIOMAS </p>
                                    <ul>
                                        <p className='li-education'>{data.candidateInfo ? data.candidateInfo.language.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").replace(/,/g, ', ').split(', ').map((lang, index) => {

                                            return (
                                                <li className='longP' key={index}>{lang}</li>

                                            )
                                        }) : null}
                                        </p>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>LOCALIZACIÓN DEL CANDIDATO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.candidateLocation : null}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>EXPERIENCIA EN PUESTO SIMILAR AL OFERTADO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.similarExp : null}</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>RASGOS PRINCIPALES DEL CANDIDATO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.ownDescription : null}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>MOTIVACIONES PARA CAMBIAR DE PUESTO DE TRABAJO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.motivations : null}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>¿PORQUE ENCAJA EN ESTE PUESTO DE TRABAJO?</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.whyFits : null}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>SITUACIÓN ACTUAL DEL CANDIDATO</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.currentSituation : null}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='p-nameCandidate text-left  mt-4'>OTROS ASPECTOS A TENER EN CUENTA</p>
                                    <ul>
                                        <li className='li-education'>{data.candidateInfo ? data.candidateInfo.otherAspects : null}</li>
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
            <img className='abstract-back' src='\abstract background_33-01-candidate-report.png' alt='pic-2' />
            <img className='abstract-orange' src='\abstract background_7-01-naranja.png' alt='pic-2' />
        </div>
    )
}


