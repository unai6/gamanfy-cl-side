import React, { useState, useEffect } from 'react';
import { offerDetails } from '../../api/offers'

export const OfferDetails = (props) => {


    const [data, setData] = useState(undefined)

    useEffect(() => {
        const any = async () => {
          await offerDetails(props.match.params.offerId).then(apiRes => {
            setData(apiRes.data.offer)
            })
        }
        any()
    }, [props.match.params.offerId])

    

    return (
        <div className='container-fluid d-flex'>
        
         { data !== undefined ?
             <div className='card card-offers mx-auto'>
                <ul className='offersList'>
                    <img className='offer-pic' src={data.imgPath} alt='' />
                    <span className='mr-2 btn btn-light' >{data.moneyPerRec}</span>
                    <span className='ml-2 btn btn-light' >+ {data.scorePerRec} puntos</span>
                    <li className='font-weight600'>{data.companyData.companyName}</li>
                    <li className='longSpanOffer'>{data.addressId.cityForOffer} | {data.contractId.contract} | {data.retribution.minGrossSalary} </li>
                </ul>
                <button className='recommend-btn'>Recomendar</button>
            </div>  : null }
            
        </div>
    )
}


