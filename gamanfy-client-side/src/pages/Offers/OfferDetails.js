import React, { useState, useEffect } from 'react';
import { offerDetails } from '../../api/offers'

export const OfferDetails = (props) => {


    const [data, setData] = useState(undefined);
    const [benefits, setBenefits] = useState(false)

    useEffect(() => {
        const any = async () => {
          offerDetails(props.match.params.offerId).then(apiRes => {
              console.log(apiRes.data.offer.benefits)
            setData(apiRes.data.offer);
            if(apiRes.data.offer.benefits !== undefined || null){
                setBenefits(true)
            }
        
           
            })
        }
        any()
    }, [props.match.params.offerId])

    console.log(benefits)

    return (
        <div className='container-fluid bg-light h-100'>
        
         { data !== undefined ?
         <section className='text-center'>
         
        <div> desc oferta</div>
        
         <div>
            <div>
                <h4> {data.jobOfferData.jobName}</h4>
                <span>{data.companyData.companyName}</span>
                <p style={{color:'black'}}>{data.addressId.cityForOffer} | {data.contractId.contract} | {data.retribution.minGrossSalary} </p>
            
            </div>
            <div>
                <h4> Descripción</h4>
                <p style={{color:'black'}}>{data.jobDescription.jobDescription}</p>    
            </div>
            
                <h4>Beneficios</h4>
            {   
                benefits === true ? 
                <div>
                {
                    data.benefits.map((ben, index) => {
                        return (
                            <ul>
                            <li>{ben}</li>
                            </ul>
                        )
                    })
                } </div> : null
            }
            <div>Requisitios</div>
            <div>Conocimientos clave</div>
         </div>

             </section>
              : null }
        </div>
    )   
}


