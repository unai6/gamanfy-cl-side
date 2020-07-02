import React, { useEffect, useState } from 'react';
import { recommendationsDashboard } from '../../api/recommendations';
import '../../CSS/recommendations.css'

export const Recommendations = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const any = async () => {

            recommendationsDashboard(props.match.params.userId).then(apiRes => {
                setData(apiRes.data.user.recommendedPeople);
                console.log(apiRes.data.user.recommendedPeople)
            })
        }
        any()

    }, [props.match.params.userId])
    console.log('data', data)
    return (
        <div>
            <h3 className='rec-h3'>Recomendaciones</h3>
             {
                    data !== undefined?
                        data.map((data, index) => {
                            return (
                                <div className='card card-offers recommend-card mx-auto ' key={index}>
                                    <ul className='recommend-list'>
                                    {
                                        data.recommendedFirstName ?
                                        <li className='font-weight600 '>{data.recommendedFirstName.toUpperCase()} {data.recommendedLastName.toUpperCase()}</li>
                                        :
                                        null
                                    }
                                        <li className='font-weight600'>{data.offerId.companyData.companyName}</li>
                                        {
                                            data.offerId.showMoney === true ?
                                                <li key={index.data} className='longSpanOffer'>{data.offerId.addressId.cityForOffer} | {data.offerId.contractId.contract} | {data.offerId.retribution.minGrossSalary} </li>
                                                :
                                                <li key={index.data} className='longSpanOffer'>{data.offerId.addressId.cityForOffer} | {data.offerId.contractId.contract} </li>
                                        }
                                        <span className='mr-2 btn btn-light btn-punc-recommend' key={index.data} >{data.offerId.moneyPerRec}</span>
                                        <span className='ml-2 btn btn-light btn-punc-recommend' key={index.data} >+ {data.offerId.scorePerRec} puntos</span>
                                        <hr className='rec-hr'/>
                                        <div className='d-flex justify-content-around inputs-div'>  <input className='round-btn ball-1' type='button'/><input className='round-btn ball-2' type='button'/><input className='round-btn ball-3' type='button'/></div>
                                        <div className='d-flex justify-content-between p-inputs'><p className='p-inputs'>Postulación Aceptada</p><p className='p-inputs p-input-2 mr-5'>En Proceso de Selección</p><p className='p-inputs p-input-3'>¡Contratado!</p></div>
                                    
                                    </ul>
                                </div>
                            )
                        })

                        : null
                } 
        </div>
    )
}

