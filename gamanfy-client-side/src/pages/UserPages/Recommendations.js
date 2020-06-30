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

    return (
        <div>
            <h3 className='rec-h3'>Recomendaciones</h3>
            {
                data ?
                    data.map((data, index) => {
                        return (
                            <div className='card card-offers recommend-card mx-auto ' key={index}>
                                <ul className='recommend-list'>
                                    <li className='font-weight600 '>{data.recommendedFirstName.toUpperCase()} {data.recommendedLastName.toUpperCase()}</li>
                                    <li className='font-weight600'>{data.offerId.companyData.companyName}</li>
                                    <span className='mr-2 btn btn-light btn-punc-recommend' key={index.data} >{data.offerId.moneyPerRec}</span>
                                    <span className='ml-2 btn btn-light btn-punc-recommend' key={index.data} >+ {data.offerId.scorePerRec} puntos</span>
                                    {
                                        data.offerId.showMoney === true ?
                                            <li key={index.data} className='longSpanOffer'>{data.offerId.addressId.cityForOffer} | {data.offerId.contractId.contract} | {data.offerId.retribution.minGrossSalary} </li>
                                            :
                                            <li key={index.data} className='longSpanOffer'>{data.offerId.addressId.cityForOffer} | {data.offerId.contractId.contract} </li>
                                    }

                                </ul>
                            </div>
                        )
                    })

                    : null
            }
        </div>
    )
}

