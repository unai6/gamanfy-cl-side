import React, { useEffect, useState } from 'react';
import { getCompanyData } from '../../api/users';
import '../../CSS/candidates.css';

export const Candidates = (props) => {

    const [postedOffers, setPostedOffers] = useState([]);

    useEffect(() => {
        const any = async () => {
            getCompanyData(props.match.params.companyId).then(apiRes => {
                setPostedOffers(apiRes.data.user.postedOffers);

            });

        }
        any()
    }, [props.match.params.companyId]);



    return (
        <div>

            <div>
                <h3 className='offersh3 mt-3 candidates-h3'>Candidatos</h3>
                {
                    postedOffers.length > 0 ?
                        postedOffers.map((data) => {
                            return data.recommendedTimes.map((candidate, index) => {
                                
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
                                        <button className='btn-cacc-su-req-inform' > SOLICITAR EMAIL CON INFORME COMPLETO</button>
                                        <button className='rejec-candidate'><u>Descartar candidato  <i className="fas fa-times ml-2"></i></u></button>
                                    </div>

                                )
                            });
                        })
                        : <p>No hay candidatos en esta oferta</p>
                }
            </div>
        </div>
    )
}
