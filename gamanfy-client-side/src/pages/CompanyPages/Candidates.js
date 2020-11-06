import React, { useEffect, useState } from 'react';
import { candidatesInOffer } from '../../api/recommendations';
import '../../CSS/candidates.css';
import { useHistory } from "react-router-dom";
import { askForReport } from '../../api/offers';
import { rejectCandidate } from '../../api/offers';
import Moment from 'react-moment';
import Modal from "react-bootstrap/Modal";

export const Candidates = (props) => {

    const [candidates, setCandidates] = useState([])
    const history = useHistory()
    const [infoSent, setInfoSent] = useState(false);
    const [candidateDeleted, setCandidateDeleted] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const any = async () => {
            candidatesInOffer(props.match.params.offerId, props.match.params.companyId).then(apiRes => {
                console.log(apiRes)
                if (apiRes !== null) {

                    setCandidates(apiRes.data)

                } else {
                    return null
                }

            });
        }

        any()
    }, [props.match.params.offerId, props.match.params.companyId, infoSent]);

    const handleClickBack = () => {
        history.goBack()
    }

    const onSubmit = async (recommendationId) => {

        setInfoSent(true);
        await askForReport(props.match.params.offerId, props.match.params.companyId, recommendationId);
        setSelectedOption(recommendationId);

    }

    const handleReject = async (candidateId) => {
        setInfoSent(true);  
        await rejectCandidate(props.match.params.offerId, props.match.params.companyId, candidateId);
        setCandidateDeleted(true);
        showModal()
    }

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };



    return (
        <div>
            <button className='btn-cacc-su-backSelec' onClick={handleClickBack}>Volver a mi Dashboard</button>
            <div>
                <h3 className='offersh3 mt-3 candidates-h3'>Candidatos</h3>
                {
                    candidates.length > 0 ?
                        <>
                            {
                                candidates.map((candidate, index) => {
                                    return (

                                        <div key={index}>
                                            {
                                                candidate.recommendationValidated ?
                                                    <div>
                                                        <div className='card candidates-card form-group mx-auto'>
                                                            {
                                                                candidate.recommendedByInfluencerPro ? <p className='rec-byProf'><i className="far fa-star"></i> Recomendado por un Influencer profesional</p> : null
                                                            }
                                                            <p className='p-nameCandidate text-left ml-5 mt-3'>{candidate.recommendedFirstName.toUpperCase()} {candidate.recommendedLastName.toUpperCase()}</p>
                                                            <p className='p-signup ml-5'>Recomendado el <Moment format="DD/MM/YY">{candidate.createdAt}</Moment></p>
                                                            {
                                                                candidate.recommendedByInfluencerPro ?

                                                                    <div className='mt-2'>
                                                                        <label className='label-candidates'>Edad</label>
                                                                        {
                                                                            candidate.candidateInfo.age ?
                                                                                <input
                                                                                    type="text"
                                                                                    className='form-control signup-fields mx-auto w-75'
                                                                                    defaultValue={candidate.candidateInfo.age}
                                                                                    placeholder='Edad'
                                                                                    maxLength="4000"
                                                                                />
                                                                                : <input
                                                                                    type="text"
                                                                                    className='form-control signup-fields mx-auto w-75'
                                                                                    defaultValue='Información no disponible'
                                                                                    placeholder='Edad'
                                                                                    maxLength="4000"
                                                                                />


                                                                        }
                                                                    </div>
                                                                    :

                                                                    <div className='mt-2'>
                                                                        <label className='label-candidates'>Edad</label>
                                                                        {
                                                                            candidate.recommendedAge ?
                                                                                <input
                                                                                    type="text"
                                                                                    className='form-control signup-fields mx-auto w-75'
                                                                                    defaultValue={candidate.recommendedAge}
                                                                                    placeholder='Edad'
                                                                                    maxLength="4000"
                                                                                />
                                                                                :

                                                                                <input
                                                                                    type="text"
                                                                                    className='form-control signup-fields mx-auto w-75'
                                                                                    defaultValue='Información no disponible'
                                                                                    placeholder='Edad'
                                                                                    maxLength="4000"
                                                                                />

                                                                        }

                                                                    </div>

                                                            }
                                                            {
                                                                candidate.candidateInfo.lastJob ?
                                                                    <div className='mt-2'>
                                                                        <label className='label-candidates'>Puesto Anterior</label>
                                                                        <input
                                                                            type="text"
                                                                            className='form-control signup-fields mx-auto w-75'
                                                                            defaultValue={candidate.candidateInfo.lastJob}
                                                                            placeholder='Último puesto de trabajo'
                                                                            maxLength="4000"
                                                                        />
                                                                    </div>
                                                                    :
                                                                    <div className='mt-2'>
                                                                        <label className='label-candidates'>Puesto Anterior</label>
                                                                        <input
                                                                            type="text"
                                                                            className='form-control signup-fields mx-auto w-75'
                                                                            defaultValue='Información no disponible'
                                                                            placeholder='Último puesto de trabajo'
                                                                            maxLength="4000"
                                                                        />
                                                                    </div>
                                                            }

                                                            {
                                                                candidate.recommendedLinkedin ?
                                                                    <div className='mt-2'>
                                                                        <label className='label-candidates'>Perfil de Linkedin</label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue={candidate.recommendedLinkedin}
                                                                            className='form-control signup-fields mx-auto w-75'
                                                                            maxLength="4000"
                                                                        />
                                                                    </div>

                                                                    :
                                                                    <div className='mt-2'>
                                                                        <label className='label-candidates'>Perfil de Linkedin</label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue={candidate.recommendedLinkedin}
                                                                            className='form-control signup-fields mx-auto w-75'
                                                                            maxLength="4000"
                                                                            placeholder='Información no disponible'
                                                                        />
                                                                    </div>
                                                            }
                                                            {
                                                                infoSent && candidate._id === selectedOption ?

                                                                    <button className='btn-cacc-su-req-inform-succeed' > SOLICITUD ENVIADA! CHEQUEA TU EMAIL</button>

                                                                    :

                                                                    <button className='btn-cacc-su-req-inform' onClick={() => onSubmit(candidate._id)}> SOLICITAR EMAIL CON INFORME COMPLETO</button>

                                                            }


                                                            {
                                                                candidateDeleted && infoSent ?
                                                                    <>
                                                                        <Modal show={isOpen} onHide={hideModal}>
                                                                            <Modal.Body scrollable='true'>

                                                                                <p className='p-inputs'>Candidato Eliminado Correctamente</p>

                                                                            </Modal.Body>

                                                                        </Modal>
                                                                        <button className='rejec-candidate' onClick={() => handleReject(candidate._id)}><u>Descartar candidato  <i className="fas fa-times ml-2"></i></u></button>

                                                                    </>
                                                                    :
                                                                    <button className='rejec-candidate' onClick={() => handleReject(candidate._id)}><u>Descartar candidato  <i className="fas fa-times ml-2"></i></u></button>
                                                            }
                                                        </div>
                                                    </div>

                                                    :

                                                    null

                                            }
                                        </div>

                                    )
                                })
                            }
                        </>
                        :
                        <p className='p-inputs text-center' style={{ marginTop: '6em' }}>No hay candidatos inscritos en esta oferta</p>
                }



            </div>
        </div>
    )
}
