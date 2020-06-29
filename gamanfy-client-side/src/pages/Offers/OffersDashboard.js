import React, { useEffect, useState } from 'react';
import { getOffersDashBoard } from '../../api/offers';
import '../../CSS/userDashboard.css';
import { sectors } from '../../FolderForSelects/htmlSelects';
import { Link } from 'react-router-dom';


export const OffersDashboard = () => {
    const [sector, setSector] = useState([]);
    const [offers, setOffers] = useState([]);
    const [query, setQuery] = useState('');
    const [city, setCity] = useState([]);
    const [dataFiltered, setDataFiltered] = useState();


    useEffect(() => {

        getOffersDashBoard().then(apiRes => {
            setOffers(apiRes.data.allOffers);
            console.log(apiRes.data.allOffers)
            setCity(apiRes.data.allOffers.map(offer => (offer.addressId.cityForOffer)))

        });

        getOffersDashBoard();
        setSector(sectors);


    }, []);

    const noRepCities = [...new Set(city)];

    let filterActive = offers.filter((data) => data.jobOfferData.jobName.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    let filterBySectorAndCity = filterActive.filter((data) => data ? data.addressId.cityForOffer === dataFiltered || data.sectorId.sector === dataFiltered : null)
    let filterAllAndActiveFilter = filterBySectorAndCity.filter((data) => data.jobOfferData.jobName.toLocaleLowerCase().includes(query.toLocaleLowerCase()))


    const handleEvent = (e) => {
        if (e.target.value === 'Muestra todas') {
            setDataFiltered(offers)

        } else {
            setDataFiltered(e.target.value)
        }
    }

    return (
        <div className='container-fluid d-flex bg-white'>
            {
                <div className='mx-auto bg-white offers-wrapper mb-5'>
                    <h3 className='offersh3 mt-3'>Ofertas de Empleo</h3>
                    <div className="filterOffers">
                        <span className="material-icons">
                            search
                        </span>
                        <input
                            type="text"
                            className="activeFilter"
                            value={query}
                            placeholder='Filtrar por puesto'
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
                            <option style={{ color: 'grey' }} disabled={true}> Sector</option>
                            <option> Muestra todas</option>

                            {
                                sector.map((doc, index) => {
                                    return <option key={index}>{doc}</option>
                                })

                            }
                        </select>
                    </div>

                    {filterAllAndActiveFilter.length > 0

                        ?
                        filterAllAndActiveFilter.map((doc, index) => {
                            console.log(doc)
                            return (
                                <div className='card card-offers' key={index}>
                                    <ul className='offersList'>
                                        <img className='offer-pic' src={doc.imgPath} alt='' />
                                        <span className='mr-2 btn btn-light' key={index.doc} >{doc.moneyPerRec}</span>
                                        <span className='ml-2 btn btn-light' key={index.doc} >+ {doc.scorePerRec} puntos</span>
                                        <Link to={`/offer-details/${doc._id}`}> <li key={index.doc} className='font-weight600 link-offer-details'>{doc.jobOfferData.jobName}</li></Link>
                                        <li key={index.doc} className='font-weight600'>{doc.companyData.companyName}</li>
                                        {
                                            doc.showMoney === true ?
                                                <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer} | {doc.contractId.contract} | {doc.retribution.minGrossSalary} </li>
                                                :
                                                <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer} | {doc.contractId.contract} </li>
                                        }
                                    </ul>
                                    <button className='recommend-btn'>Recomendar</button>
                                </div>
                            )
                        })

                        :

                        dataFiltered === offers

                            ?
                            filterActive.map((doc, index) => {
                                return (
                                    <div className='card card-offers bg-white' key={index}>
                                        <ul className='offersList'>
                                            <img className='offer-pic' src={doc.imgPath} alt='' />
                                            <span className='mr-2 btn btn-light' key={index.doc} >{doc.moneyPerRec}</span>
                                            <span className='ml-2 btn btn-light' key={index.doc} >+ {doc.scorePerRec} puntos</span>
                                            <Link to={`/offer-details/${doc._id}`}><li key={index.doc} className='font-weight600 link-offer-details' >{doc.jobOfferData.jobName}</li></Link>
                                            <li key={index.doc} className='font-weight600'>{doc.companyData.companyName}</li>
                                            {
                                                doc.showMoney === true ?
                                                    <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer} | {doc.contractId.contract} | {doc.retribution.minGrossSalary} </li>
                                                    :
                                                    <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer} | {doc.contractId.contract}</li>

                                            }
                                        </ul>
                                        <button className='recommend-btn'>Recomendar</button>
                                    </div>
                                )
                            })

                            :

                            dataFiltered === undefined
                                ?
                                filterActive.map((doc, index) => {
                                    return (
                                        <div className='card card-offers' key={index}>
                                            <ul className='offersList'>
                                                <img className='offer-pic' src={doc.imgPath} alt='' />
                                                <span className='mr-2 btn btn-light' key={index.doc} >{doc.moneyPerRec}</span>
                                                <span className='ml-2 btn btn-light' key={index.doc} >+ {doc.scorePerRec} puntos</span>
                                                <Link to={`/offer-details/${doc._id}`}> <li key={index.doc} className='font-weight600 link-offer-details' >{doc.jobOfferData.jobName}</li></Link>
                                                <li key={index.doc} className='font-weight600'>{doc.companyData.companyName}</li>
                                                {
                                                    doc.showMoney === true ?
                                                        <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer} | {doc.contractId.contract} | {doc.retribution.minGrossSalary} </li>
                                                        :
                                                        <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer} | {doc.contractId.contract} </li>

                                                }
                                            </ul>
                                            <button className='recommend-btn'>Recomendar</button>
                                        </div>
                                    )
                                })

                                :
                                <p style={{ color: 'black' }}>No hay ofertas para mostrar</p>

                    }

                </div>
            }
        </div>
    )
}
