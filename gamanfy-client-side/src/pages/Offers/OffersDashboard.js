import React, { useEffect, useState } from 'react';
import { getOffersDashBoard } from '../../api/offers';
import '../../CSS/userDashboard.css';


export const OffersDashboard = (props) => {

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        getOffersDashBoard().then(apiRes => {

            setOffers(apiRes.data.allOffers);
            console.log(apiRes.data.allOffers)
        })
        getOffersDashBoard()
    }, [props])


    let offersList = offers.map(item => item)

    return (
        <div className='container-fluid d-flex'>
            {
                <div className ='mx-auto w-100'>
                <h3>Ofertas de Empleo</h3>
                {offersList ? (

                    offersList.map((doc, index) => {
                        return (
                            <div className='card card-offers' key={index}>
                                <ul className='offersList d-block'>
                                    <span className='mr-2' key={index.doc} >{doc.moneyPerRec}</span> 
                                    <span className='ml-2' key={index.doc} >+ {doc.scorePerRec} puntos</span>
                                    <li className='' key={index.doc} >{doc.jobOfferData.jobName}</li>
                                </ul>
                                    <li className='bigli' key={index.doc} >{doc.companyData.companyName}</li>
                                    <li className='bigli' key={index.doc} >{doc.addressId.cityForOffer} | {doc.contractId.contract} | {doc.retribution.minGrossSalary} </li>      
                                    <button className='btn-cacc-su recommend-btn' >Recomendar</button>
                            </div>
                        )
                    })

                ) : (<p>No hay ofertas para mostrar</p>)}</div>
            }
        </div>
    )
}
