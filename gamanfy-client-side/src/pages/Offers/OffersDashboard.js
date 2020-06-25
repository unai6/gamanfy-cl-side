import React, { useEffect, useState } from 'react';
import { getOffersDashBoard } from '../../api/offers';
import '../../CSS/userDashboard.css';
import { sectors } from '../../FolderForSelects/htmlSelects';


export const OffersDashboard = () => {
    const [sector, setSector] = useState([]);
    const [offers, setOffers] = useState([]);
    const [query, setQuery] = useState('');
    const [city, setCity] = useState([]);
    const [dataFiltered, setDataFiltered] = useState();


    useEffect(() => {

        getOffersDashBoard().then(apiRes => {

            setOffers(apiRes.data.allOffers);
            setCity(apiRes.data.allOffers.map(offer => (offer.addressId.cityForOffer)))

        });
        getOffersDashBoard();
        setSector(sectors);


    }, []);

    const noRepCities = [...new Set(city)];
    let filteredByJobName = offers.filter((offer) => offer ? offer.jobOfferData.jobName.toLocaleLowerCase().includes(query.toLocaleLowerCase()): null);
    let filterAll = filteredByJobName.filter((data) => data ? data.addressId.cityForOffer === dataFiltered || data.sectorId.sector === dataFiltered : null)
    
    const handleEvent = (e) => {
            if(e.target.value === 'Muestra todas') {
               setDataFiltered(offers)
            } else {
                setDataFiltered(e.target.value)
             
            }
        }
        
        console.log('length',filterAll.length)
        console.log('data', filterAll)
        console.log('datafiltered', dataFiltered)
    return (
        <div className='container-fluid d-flex'>
            {
                <div className='mx-auto'>
                    <h3 className='offersh3'>Ofertas de Empleo</h3>
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
                        <select className="activeFilter" defaultValue='Ciudad' onChange={handleEvent}>
                            <option disabled={true}> Ciudad</option>
                            <option> Muestra todas</option>
                           
                            {
                                noRepCities.map((doc, index) => {
                                    return <option key={index}>{doc}</option>
                                })

                            }
                        </select>
                        <select className="activeFilter" defaultValue='Sector' onChange={handleEvent}>
                            <option style={{color:'grey'}} disabled={true}> Sector</option>
                            <option> Muestra todas</option>
                            
                          {
                                sector.map((doc, index) => {
                                    return <option key={index}>{doc}</option>
                                })

                            }
                        </select>
                    </div>

                    {filterAll.length > 0?
                        filterAll.map((doc, index) => {
                            return (
                                <div className='card card-offers' key={index}>
                                    <ul className='offersList'>
                                        <img className='offer-pic' src={doc.imgPath} alt='' />
                                        <span className='mr-2 btn btn-light' key={index.doc} >{doc.moneyPerRec}</span>
                                        <span className='ml-2 btn btn-light' key={index.doc} >+ {doc.scorePerRec} puntos</span>
                                        <li key={index.doc} className='font-weight600' >{doc.jobOfferData.jobName}</li>
                                        <li key={index.doc} className='font-weight600'>{doc.companyData.companyName}</li>
                                        <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer} | {doc.contractId.contract} | {doc.retribution.minGrossSalary} </li>
                                    </ul>
                                    <button className='recommend-btn'>Recomendar</button>
                                </div>
                            )
                        }) :
                            (filterAll.length === 0 ? 
                            
                            filteredByJobName.map((doc, index) => {
                            return (
                                <div className='card card-offers' key={index}>
                                    <ul className='offersList'>
                                        <img className='offer-pic' src={doc.imgPath} alt='' />
                                        <span className='mr-2 btn btn-light' key={index.doc} >{doc.moneyPerRec}</span>
                                        <span className='ml-2 btn btn-light' key={index.doc} >+ {doc.scorePerRec} puntos</span>
                                        <li key={index.doc} className='font-weight600' >{doc.jobOfferData.jobName}</li>
                                        <li key={index.doc} className='font-weight600'>{doc.companyData.companyName}</li>
                                        <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer} | {doc.contractId.contract} | {doc.retribution.minGrossSalary} </li>
                                    </ul>
                                    <button className='recommend-btn'>Recomendar</button>
                                </div>
                            )
                        }): <p>No hay ofertas para mostrar</p>)
                        
                    }

                </div>
            }
        </div>
    )
}
