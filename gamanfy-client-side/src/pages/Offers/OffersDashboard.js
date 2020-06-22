import React, { useEffect, useState } from 'react';
import { getOffersDashBoard } from '../../api/offers';
import '../../CSS/userDashboard.css';
import {If, Then} from 'react-if-elseif-else-render';

export const OffersDashboard = () => {

    const [offers, setOffers] = useState([]);
    const [query, setQuery] = useState('');
    const [city, setCity] = useState([]);
    const [sector, setSector] = useState([]);
    const [dataFiltered, setDataFiltered]= useState();
   
    const filteredData = offers.filter((offer) => offer.jobOfferData.jobName.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
   
    
    useEffect(() => {

        getOffersDashBoard().then(apiRes => {
            
            setOffers(apiRes.data.allOffers);
            setCity(apiRes.data.allOffers.map(offer => (offer.addressId.cityForOffer)))
            setSector(apiRes.data.allOffers.map((offer =>(offer.sectorId.sector))))
        })
        getOffersDashBoard()
        
    }, []);
    
    const noRepCities = [... new Set(city)]
      
    let filtered = filteredData.filter((data) => (data.addressId.cityForOffer == dataFiltered))
    
    const noRepSectors = [...new Set(sector)]
    return (
        <div className='container-fluid d-flex'>
            {
                <div className='mx-auto'>
                    <h3>Ofertas de Empleo</h3>
                    <div className="filterOffers">
                        <span className="material-icons">
                            search
                        </span>
                        <input
                            type="text"
                            className="activeFilter"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            name="query"
                        />
                        <select className="activeFilter" onClick={(e) => setDataFiltered(e.target.value)}>
                            
                        {
                                      noRepCities.map((doc, index) => {
                                          return <option key={index}>{doc}</option>
                                      })

                                    }
                        </select>
                        <select className="activeFilter" >
                            
                        {
                                      noRepSectors.map((doc, index) => {
                                          return <option key={index}>{doc}</option>
                                      })

                                    }
                        </select>
                    </div>
        
                <If condition ={filteredData}>
                    <Then>
                    {filtered.map((doc, index) => {
                            return (
                                <div className='card card-offers' key={index}>
                                    <ul className='offersList'>
                                        <img className='offer-pic' src={doc.imgPath} alt=''/>
                                        <span className='mr-2 btn btn-light' key={index.doc} >{doc.moneyPerRec}</span>
                                        <span className='ml-2 btn btn-light' key={index.doc} >+ {doc.scorePerRec} puntos</span>
                                        <li key={index.doc} className='font-weight600' >{doc.jobOfferData.jobName}</li>
                                        <li key={index.doc} className='font-weight600'>{doc.companyData.companyName}</li>
                                        <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer} | {doc.contractId.contract} | {doc.retribution.minGrossSalary} </li>
                                    </ul>
                                    <button className='recommend-btn'>Recomendar</button>
                                </div>
                            )
                        })}
                 </Then>    
                </If>
            
                    </div>
            }
        </div>
    )
}
