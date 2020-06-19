import React, { useEffect, useState } from 'react';
import { getOffersDashBoard } from '../../api/offers';
import '../../CSS/userDashboard.css';


export const OffersDashboard = () => {

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        getOffersDashBoard().then(apiRes => {

            setOffers(apiRes.data.allOffers);

        })
        getOffersDashBoard()
    }, [])


    let offersList = offers.map(item => item)

    return (
        <div className='container-fluid d-flex'>
            {
                <div className='mx-auto w-100'>
                    <h3>Ofertas de Empleo</h3>
                    {offersList ? (

                        offersList.map((doc, index) => {
                            return (
                                <div className='card card-offers' key={index}>
                                    <ul className='offersList'>
                                        <span className='mr-2 btn btn-light' key={index.doc} >{doc.moneyPerRec}</span>
                                        <span className='ml-2 btn btn-light' key={index.doc} >+ {doc.scorePerRec} puntos</span>
                                        <li key={index.doc} className='font-weight600' >{doc.jobOfferData.jobName}</li>
                                        <li key={index.doc} className='font-weight600'>{doc.companyData.companyName}</li>
                                        <li key={index.doc} >{doc.addressId.cityForOffer} | {doc.contractId.contract} | {doc.retribution.minGrossSalary} </li>
                                    </ul>
                                    <button className='btn-cacc-su recommend-btn' >Recomendar</button>
                                </div>
                            )
                        })

                    ) : (<p>No hay ofertas para mostrar</p>)}</div>
            }
        </div>
    )
}
