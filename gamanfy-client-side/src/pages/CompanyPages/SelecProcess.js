import React, { useState, useEffect } from 'react';
import { getCompanyData } from '../../api/users';
import '../../CSS/selecProcess.css';
import {Link} from 'react-router-dom';


export const SelecProcess = (props) => {
    const [postedOffers, setPostedOffers] = useState([])

    useEffect(() => {
        const any = async () => {
            getCompanyData(props.match.params.companyId).then(apiRes => {
                // console.log(apiRes.data)
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
                        let inProcess = [data.recommendedTimes.map(item => item.inProcess).filter(item => item === true).length]
                        let hired = [data.recommendedTimes.map(item => item.hired).filter(item => item === true).length]
                        return (

                            <div className='card card-process px-0 d-lg-flex row' key={index}>
                                <div className='parent-div'>
                                    <span className='list-selecProcess-top'>Puesto</span>
                                    <span className='list-selecProcess-city'>Ciudad</span>
                                    <span className='list-selecProcess-proc'>En Proceso</span>
                                    <span className='list-selecProcess-hired'>Contratados</span>

                                </div>

                                <div className='parent-div' >
                                    <span className='process-field process-field-1'><span className='inner-span'>{data.jobOfferData.jobName}</span></span>
                                    <span className='process-field process-field-2 '><span className='inner-span'>{data.addressId.cityForOffer}</span></span>

                                    {
                                        inProcess ?
                                            <span className='process-field'><span className='inner-span'>{inProcess}</span></span>
                                            :
                                            <span className='process-field'><span className='inner-span'>Ningún proceso</span></span>

                                    }
                                    {
                                        hired ?
                                            <span className='process-field'><span className='inner-span'>{hired}</span></span>
                                            :
                                            <span className='process-field'><span className='inner-span'>Ningún contratado</span></span>

                                    }
                                </div>
                               <Link to={`/company/${props.match.params.companyId}/${data._id}/candidates`}> <button type="submit" className='btn-candidates'>VER CANDIDATOS </button></Link>

                            </div>



                        )
                    })

                ) : (
                        <p style={{ color: 'black' }}> No tienes procesos en curso.</p>
                    )
            }
        </div>
    )
}


