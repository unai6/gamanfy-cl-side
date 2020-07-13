import React, { useState, useEffect } from 'react';
import { getCompanyData } from '../../api/users';
import '../../CSS/selecProcess.css';

export const SelecProcess = (props) => {
    const [postedOffers, setPostedOffers] = useState([])

    useEffect(() => {
        const any = async () => {
            getCompanyData(props.match.params.companyId).then(apiRes => {
                console.log(apiRes.data)
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
                        return (
                            
                            <div className='card card-process px-0 d-lg-flex row' key={index}>
                            <div className='parent-div'>
                                    <span className='list-selecProcess-top'>Puesto</span>   
                                    <span className='list-selecProcess-city'>Ciudad</span>
                                    <span  className='list-selecProcess-proc'>En Proceso</span>
                                    <span  className='list-selecProcess-hired'>Contratados</span>
                            
                            </div>
                            
                                <div  className='parent-div' >
                                    <span className='process-field process-field-1'>{data.jobOfferData.jobName}</span>
                                    <span className='process-field process-field-2 '>{data.addressId.cityForOffer}</span>
                                    <span className='process-field'>10</span>
                                    <span className='process-field'>8</span>
                                </div>
                                     <p> <input type="submit" className='btn-candidates' value='VER CANDIDATOS' /> </p>
                                   
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


