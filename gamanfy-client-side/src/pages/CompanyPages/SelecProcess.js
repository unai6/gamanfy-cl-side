import React, { useState, useEffect } from 'react';
import { getCompanyData } from '../../api/users';
import '../../CSS/selecProcess.css';
import { Candidates } from './Candidates';


export const SelecProcess = (props, candidateProps) => {
    console.log(props)
    const [postedOffers, setPostedOffers] = useState([])
    const [candidates, setCandidates] = useState(false)
    const [selecProcess, setSelecProcess] = useState(true)

    useEffect(() => {
        const any = async () => {
            getCompanyData(props.match.params.companyId).then(apiRes => {
                setPostedOffers(apiRes.data.user.postedOffers);

            });

        }
        any()
    }, [props.match.params.companyId]);

    const handleShowCandidates = () => {
        setCandidates(true)
        setSelecProcess(false)
    }
    const handleReturnProcesses = () => {
        setCandidates(false)
        setSelecProcess(true)

    }

    return (
        <div>
            {
                !selecProcess ?
                    <button className='btn-cacc-su-backSelec' onClick={handleReturnProcesses}> Volver a mis procesos de selección</button>
                    :
                    null
            }
            {selecProcess ?
                <>
                    {
                        postedOffers.length > 0 ? (
                            postedOffers.map((data, index) => {
                                let inProcess = data.recommendedTimes.map(item => item.inProcess);
                                let filteredProcess = inProcess.filter(item => item === true);
                                let hired = data.recommendedTimes.map(item => item.hired);
                                let filteredHired = hired.filter(item => item === true).length;
                                let stillInProcess = data.recommendedTimes.map(item => item.stillInProcess);
                                let filteredStill = stillInProcess.filter(item => item === true);

                                return (

                                    <div className='card card-process px-0 d-lg-flex row mb-3' key={index}>
                                        <div className='parent-div'>
                                            <span className='list-selecProcess-top'>Puesto</span>
                                            <span className='list-selecProcess-city'>Ciudad</span>
                                            <span className='list-selecProcess-date'>Fecha de Inicio</span>
                                            <span className='list-selecProcess-proc'>En Proceso</span>
                                            <span className='list-selecProcess-hired'>Contratados</span>

                                        </div>

                                        <div className='parent-div job-data' >
                                            
                                                
                                                
                                                    
                                            <span className=' process-field-1'><span className='inner-span'>{data.jobOfferData.jobName.toUpperCase()}</span></span>
                                            <span className='process-field process-field-2 '><span className='inner-span'>{data.addressId.cityForOffer}</span></span>
                                            <span className='process-field process-field-3 '><span className='inner-span'>{data.jobOfferData.onDate}</span></span>

                                            {
                                                filteredHired && filteredStill.find(item => item === true) ?
                                                    <span className='process-field'><span className='inner-span'>{filteredStill.length}</span></span>
                                                    :
                                                    !filteredHired && filteredProcess ?
                                                        <span className='process-field process-field-4'><span className='inner-span'>{filteredProcess.length}</span></span>
                                                        :
                                                        <span className='process-field process-field-4'><span className='inner-span'>0</span></span>

                                            }
                                            {
                                                filteredHired ?
                                                    <span className='process-field process-field-5'><span className='inner-span'>{filteredHired}</span></span>
                                                    :
                                                    <span className='process-field process-field-5'><span className='inner-span'>0</span></span>

                                            }
                                        </div>
                                        {
                                            data.recommendedTimes.map((offer, index) => 
                                            
                                            {
                                                return (

                                                    offer.offerId === data._id
                                                        ?   
                                                        <button key={index} type="submit" className='btn-candidates' onClick={handleShowCandidates}>VER CANDIDATOS </button>
                                                        :
                                                        <button key={index} type="submit" className='btn-candidates'>NO HAY CANDIDATOS </button>
                                                )
                                            }

                                            )
                                        }

                                    </div>

                                )
                            })

                        ) : (
                                <p style={{ color: 'black' }}> No tienes procesos en curso.</p>
                            )
                    }
                </>
                : null
            }

            {
                candidates ?
                    <Candidates {...props} />
                    :
                    null
            }
        </div>
    )
}


