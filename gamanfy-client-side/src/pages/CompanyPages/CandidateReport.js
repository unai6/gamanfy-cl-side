import React, { useState, useEffect } from 'react';
import { candidateReport } from '../../api/offers';
import '../../CSS/candidateReport.css';
import { updateProcessPlusCandidateInterview } from '../../api/recommendations';
import Modal from "react-bootstrap/Modal";

export const CandidateReport = (props) => {
    const [infoSent, setInfoSent] = useState(false)
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [candidateEducation, setCandidateEducation] = useState();
    const [lastJob, setLastJob] = useState();
    const [moneyExpec, setMoneyExpec] = useState();
    const [availability, setAvailability] = useState();
    const [language, setLanguage] = useState();
    const [candidateLocation, setCandidateLocation] = useState();
    const [experiences, setExperiences] = useState();
    const [similarExp, setSimilarExp] = useState();
    const [ownDescription, setOwnDescription] = useState();
    const [motivations, setMotivations] = useState();
    const [whyFits, setWhyfits] = useState();
    const [currentSituation, setCurrentSituation] = useState();
    const [otherAspects, setOtherAspects] = useState();
    const [whyRec, setWhyRec] = useState();

    useEffect(() => {
        const fetchInfo = async () => {
            const result = await candidateReport(props.match.params.recommendationId);
            console.log(result)
            setCandidateEducation(result.data.candidateInfo.candidateEducation);
            setLastJob(result.data.candidateInfo.lastJob);
            setMoneyExpec(result.data.candidateInfo.moneyExpec);
            setAvailability(result.data.candidateInfo.availability);
            setLanguage(result.data.candidateInfo.language);
            setCandidateLocation(result.data.candidateInfo.candidateLocation);
            setExperiences(result.data.candidateInfo.experiences);
            setSimilarExp(result.data.candidateInfo.similarExp);
            setOwnDescription(result.data.candidateInfo.ownDescription);
            setMotivations(result.data.candidateInfo.motivations);
            setWhyfits(result.data.candidateInfo.whyFits);
            setCurrentSituation(result.data.candidateInfo.currentSituation);
            setOtherAspects(result.data.candidateInfo.otherAspects);
            setWhyRec(result.data.whyRec)


            console.log('result', result)
            setData(result.data)
        }
        fetchInfo()
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
                                {
                                    data.howFoundCandidate ?
                                        <>
                                            <p className='p-nameCandidate text-left  mt-4'>¿CÓMO EL INFLUENCER HA ENCONTRADO AL CANDIDATO?</p>
                                            <p className='linkedin-candidate'>{data.howFoundCandidate}</p>
                                        </>
                                        :

                                        null
                                }
                                {
                                    data.curriculum
                                        ?
                                        <button className='btn-donwloadCV'><a className='a-download-cv' href={data.curriculum} download>DESCARGAR CV DEL CANDIDATO(PDF)</a></button>
                                        :
                                        null
                                }
                            </section>

                            <section>
                                {
                                    candidateEducation
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>ESTUDIOS</p>
                                            <ul>
                                                <li className='li-education'>{candidateEducation}</li>
                                            </ul>
                                        </div>
                                        :
                                        null

                                }

                                {
                                    lastJob
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>ÚLTIMO PUESTO DE TRABAJO</p>
                                            <ul>
                                                <li className='li-education'>{lastJob}</li>
                                            </ul>
                                        </div>
                                        :
                                        null
                                }



                                {
                                    moneyExpec
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>EXPECTATIVAS SALARIALES</p>
                                            <ul>
                                                <li className='li-education'>{moneyExpec}</li>
                                            </ul>
                                        </div>
                                        :
                                        null
                                }

                                {
                                    availability
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>DISPONIBILIDAD PARA CAMBIAR DE PUESTO DE TRABAJO</p>
                                            <ul>
                                                <li className='li-education'>{availability}</li>
                                            </ul>
                                        </div>
                                        :

                                        null
                                }

                                {
                                    language
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>IDIOMAS </p>
                                            <ul>
                                                <p className='li-education'>{language.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").replace(/,/g, ', ').split(', ').map((lang, index) => {

                                                    return (
                                                        <li className='longP' key={index}>{lang}</li>

                                                    )
                                                })}
                                                </p>
                                            </ul>
                                        </div>
                                        :

                                        null
                                }


                                {
                                    candidateLocation
                                        ?
                                        <div className='second-bg'>
                                            <p className='p-nameCandidate text-left  mt-4'>LOCALIZACIÓN DEL CANDIDATO</p>
                                            <ul>
                                                <li className='li-education'>{candidateLocation}</li>
                                            </ul>
                                        </div>
                                        :

                                        null
                                }

                                {
                                    experiences
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>EXPERIENCIAS PROFESIONALES MÁS RELEVANTES</p>
                                            <ul>
                                                <li className='li-education'>{experiences}</li>
                                            </ul>
                                        </div>
                                        :

                                        null
                                }


                                {
                                    similarExp
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>EXPERIENCIA EN PUESTO SIMILAR AL OFERTADO</p>
                                            <ul>
                                                <li className='li-education'>{similarExp}</li>
                                            </ul>
                                        </div>
                                        :

                                        null
                                }

                                {
                                    ownDescription
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>RASGOS PRINCIPALES DEL CANDIDATO</p>
                                            <ul>
                                                <li className='li-education'>{ownDescription}</li>
                                            </ul>
                                        </div>
                                        :

                                        null
                                }

                                {
                                    motivations
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>MOTIVACIONES PARA CAMBIAR DE PUESTO DE TRABAJO</p>
                                            <ul>
                                                <li className='li-education'>{motivations}</li>
                                            </ul>
                                        </div>
                                        :

                                        null
                                }

                                {
                                    whyRec
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>¿POR QUÉ HAN RECOMENDADO A ESTA PERSONA?</p>
                                            <ul>
                                                <li className='li-education'>{whyRec}</li>
                                            </ul>
                                        </div>
                                        :

                                        null
                                }

                                {
                                    whyFits
                                        ?
                                        <div className='third-bg'>
                                            <p className='p-nameCandidate text-left  mt-4'>¿POR QUÉ ENCAJA EN ESTE PUESTO DE TRABAJO?</p>
                                            <ul>
                                                <li className='li-education'>{whyFits}</li>
                                            </ul>
                                        </div>
                                        :

                                        null
                                }

                                {
                                    currentSituation
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>SITUACIÓN ACTUAL DEL CANDIDATO</p>
                                            <ul>
                                                <li className='li-education'>{currentSituation}</li>
                                            </ul>
                                        </div>
                                        :

                                        null
                                }

                                {
                                    otherAspects
                                        ?
                                        <div>
                                            <p className='p-nameCandidate text-left  mt-4'>OTROS ASPECTOS A TENER EN CUENTA</p>
                                            <ul>
                                                <li className='li-education'>{otherAspects}</li>
                                            </ul>
                                        </div>
                                        :

                                        null
                                }


                                {
                                    infoSent ?

                                        <Modal show={isOpen} onHide={hideModal}>
                                            <Modal.Body>
                                                <p className='p-inputs text-center pt-2'>¡El candidato ha pasado a formar parte del Proceso de Selección, nos pondremos en contacto contigo en breves! </p>
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


