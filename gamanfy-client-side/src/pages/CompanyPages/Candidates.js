import React, { useEffect, useState } from 'react';
import { candidatesInOffer } from '../../api/recommendations';
import '../../CSS/candidates.css';
import { useHistory } from "react-router-dom";
import { askForReport } from '../../api/offers';

export const Candidates = (props) => {

    const [candidates, setCandidates] = useState([])
    const history = useHistory()
    const [infoSent, setInfoSent] = useState(false);

    useEffect(() => {
        const any = async () => {
            candidatesInOffer(props.match.params.offerId, props.match.params.companyId).then(apiRes => {

                setCandidates(apiRes.data)

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

    }

    return (
        <div>
            <button className='btn-cacc-su-backSelec' onClick={handleClickBack}>Volver a mis Procesos</button>
            <div>
                <h3 className='offersh3 mt-3 candidates-h3'>Candidatos</h3>
                {
                    candidates.map((candidate, index) => {
                        return (

                            <div className='card candidates-card form-group mx-auto' key={index}>
                                <p className='p-nameCandidate text-left ml-5 mt-3'>{candidate.recommendedFirstName.toUpperCase()} {candidate.recommendedLastName.toUpperCase()}</p>
                                <p className='p-signup'>Recomendado el {candidate.createdAt.substring(0, 10)}</p>

                                <div className='mt-2'>
                                    <label className='label-candidates'>Edad</label>
                                    <input
                                        type="text"
                                        className='form-control signup-fields mx-auto'
                                        placeholder='Edad'
                                        maxLength="4000"
                                    />
                                </div>
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
                                    infoSent ?

                                        <button className='btn-cacc-su-req-inform-succeed' > SOLICITUD ENVIADA! CHEQUEA TU EMAIL</button>

                                        :

                                        <button className='btn-cacc-su-req-inform' onClick={() => onSubmit(candidate._id)}> SOLICITAR EMAIL CON INFORME COMPLETO</button>


                                }

                                <button className='rejec-candidate'><u>Descartar candidato  <i className="fas fa-times ml-2"></i></u></button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
