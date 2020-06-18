import React, {useEffect, useState} from 'react';
import {getOffersDashBoard} from '../../api/offers';



export const OffersDashboard = (props) => {

const [offers, setOffers] = useState([]);

useEffect(()=>{
    getOffersDashBoard().then(apiRes =>{
           
            setOffers(apiRes.data.allOffers);
            console.log(apiRes.data.allOffers)    
    })  
    getOffersDashBoard()
}, [props])
    
    
    let offersList = offers.map(item => item)
    
    return (
        <div>
        Ofertas de Empleo
            {
                <div>{offersList ? (
                    
                        offersList.map((doc, index) => {
                            return(
                                <div className='card' key={index}>
                                <p className='card-body' key={index.doc} style={{color:'black', border:'1px; solid; black'}}>{doc.moneyPerRec}</p>
                                <p className='card-body' key={index.doc} style={{color:'black', border:'1px; solid; black'}}>{doc.scorePerRec}</p>
                                <p className='card-body' key={index.doc} style={{color:'black', border:'1px; solid; black'}}>{doc.jobOfferData.jobName}</p>
                                <p className='card-body' key={index.doc} style={{color:'black', border:'1px; solid; black'}}>{doc.addressId.cityForOffer}</p>

                                </div>
                            )
                        })
                    
                ):( <p>no offers</p>)}</div>
            } 
        </div>
    )   
}
