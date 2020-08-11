import React, { useState, useEffect } from 'react';
import { getCompanyData } from '../../api/users';
import '../../CSS/selecProcess.css';
import { Link } from 'react-router-dom'
import Moment from 'react-moment';

export const SelecProcess = (props) => {

    const [postedOffers, setPostedOffers] = useState([])
    

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
                                            <span className='list-selecProcess-insc'>Inscritos</span>
                                            <span className='list-selecProcess-proc'>En Proceso</span>
                                            <span className='list-selecProcess-hired'>Contratados</span>

                                        </div>

                                        <div className='parent-div job-data' >
                                            <span className=' process-field-1'><span className='inner-span'>{data.jobOfferData.jobName.toUpperCase()}</span></span>
                                            <span className='process-field process-field-2 '><span className='inner-span'>{data.addressId.cityForOffer}</span></span>
                                            <span className='process-field process-field-3 '><span className='inner-span'><Moment format="DD/MM/YYYY">{data.jobOfferData.onDate}</Moment></span></span>
                                            <span className='process-field process-field-insc'><span className='inner-span'>{data.recommendedTimes.length}</span></span>
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
                                            
                                             <Link key={index} to={`/candidates/${data._id}/${props.match.params.companyId}`} ><button  type="submit" className='btn-candidates' >VER CANDIDATOS </button></Link>
                                        </div>
                                    </div>

                                )
                            })

                        ) : (
                                <p className='p-inputs mx-auto mt-5'> No tienes procesos en curso.</p>
                            )
                    
                    }
                     
        </div>
    )
}


