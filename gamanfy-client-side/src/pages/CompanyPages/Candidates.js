import React, { useEffect, useState } from 'react';
import { candidatesInOffer } from '../../api/recommendations';
import '../../CSS/candidates.css';
import { useHistory } from "react-router-dom";
import { askForReport } from '../../api/offers';
import {rejectCandidate} from '../../api/offers';
import Moment from 'react-moment';

export const Candidates = (props) => {

    const [candidates, setCandidates] = useState([])
    const history = useHistory()
    const [infoSent, setInfoSent] = useState(false);
    const [candidateDeleted, setCandidateDeleted] = useState(false);
    const [selectedOption, setSelectedOption] = useState('')
    
    useEffect(() => {
        const any = async () => {
            candidatesInOffer(props.match.params.offerId, props.match.params.companyId).then(apiRes => {
                if(apiRes !== null){

                    setCandidates(apiRes.data)
                } else{
                   return null
                }

            });
        }

        any()
    }, [props.match.params.offerId, props.match.params.companyId, infoSent]);

    const handleClickBack = () => {
        history.goBack()
    }

    const onSubmit = (recommendationId) => {

        askForReport(props.match.params.offerId, props.match.params.companyId, recommendationId)
        setInfoSent(true)
        setSelectedOption(recommendationId)
        
    }

    const handleReject = () => {
        rejectCandidate(props.match.params.offerId, props.match.params.companyId)
        setCandidateDeleted(true)
    }

    return (
        <div>
            <button className='btn-cacc-su-backSelec' onClick={handleClickBack}>Volver a mi Dashboard</button>
            <div>
                <h3 className='offersh3 mt-3 candidates-h3'>Candidatos</h3>
                {
                    candidates.map((candidate, index) => {
                        return (

                            <div className='card candidates-card form-group mx-auto' key={index}>
                                {
                                    candidate.candidateInfo ? <p className='rec-byProf'><i className="far fa-star"></i> Recomendado por un Influencer profesional</p> : null
                                }
                                <p className='p-nameCandidate text-left ml-5 mt-3'>{candidate.recommendedFirstName.toUpperCase()} {candidate.recommendedLastName.toUpperCase()}</p>
                                <p className='p-signup'>Recomendado el <Moment format="DD/MM/YY">{candidate.createdAt}</Moment></p>
                                {
                                    candidate.candidateInfo ?

                                        <div className='mt-2'>
                                            <label className='label-candidates'>Edad</label>
                                            <input
                                                type="text"
                                                className='form-control signup-fields mx-auto'
                                                defaultValue={candidate.candidateInfo.age}
                                                placeholder='Edad'
                                                maxLength="4000"
                                            />
                                        </div>
                                        :

                                        <div className='mt-2'>
                                            <label className='label-candidates'>Edad</label>
                                            <input
                                                type="text"
                                                className='form-control signup-fields mx-auto'
                                                defaultValue={candidate.recommendedAge}
                                                placeholder='Edad'
                                                maxLength="4000"
                                            />
                                        </div>

                                }
                                {
                                    candidate.candidateInfo ?
                                        <div className='mt-2'>
                                            <label className='label-candidates'>Puesto Anterior</label>
                                            <input
                                                type="text"
                                                className='form-control signup-fields mx-auto'
                                                defaultValue={candidate.candidateInfo.lastJob}
                                                placeholder='Último puesto de trabajo'
                                                maxLength="4000"
                                            />
                                        </div>
                                        :
                                        null
                                }
                                <div className='mt-2'>
                                    <label className='label-candidates'>Perfil de Linkedin</label>
                                    <input
                                        type="text"
                                        defaultValue={candidate.recommendedLinkedin}
                                        className='form-control signup-fields mx-auto'
                                        maxLength="4000"
                                    />
                                </div>
                                {
                                    infoSent && candidate._id === selectedOption?

                                        <button className='btn-cacc-su-req-inform-succeed' > SOLICITUD ENVIADA! CHEQUEA TU EMAIL</button>

                                        :

                                        <button className='btn-cacc-su-req-inform' onClick={() => onSubmit(candidate._id)}> SOLICITAR EMAIL CON INFORME COMPLETO</button>

                                }


                                {
                                    candidateDeleted ?
                                    <p className='p-inputs'>Candidato Eliminado Correctamente</p>
                                    :
                                    <button className='rejec-candidate' onClick={handleReject}><u>Descartar candidato  <i className="fas fa-times ml-2"></i></u></button>
                                }
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
