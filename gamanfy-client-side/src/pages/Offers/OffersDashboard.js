import React, {useEffect, useState} from 'react';
import {getOffersDashBoard} from '../../api/offers';



export const OffersDashboard = (props) => {

const [offers, setOffers] = useState([])
useEffect(()=>{
    getOffersDashBoard().then(apiRes =>{
           
            setOffers(apiRes.data.allOffers)          
    })
    getOffersDashBoard()
}, [props])
    
    
    let offersList = offers.map(item => item)
    
    return (
        <div>
            {
                <div>{offersList ? (
                    
                        offersList.map((doc, key) => {
                            return(
                                <p key={key}>{doc.scorePerRec}</p>
                            )
                        })
                    
                ):( <p>no offers</p>)}</div>
            } 
        </div>
    )   
}
