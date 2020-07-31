import React, { useEffect, useState } from 'react';
import { getOffersDashBoard } from '../../api/offers';
import '../../CSS/userDashboard.css';
import { sectors } from '../../FolderForSelects/htmlSelects';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Modal from "react-bootstrap/Modal";
import { SendRecommendation } from '../UserPages/SendRecommendation';

export const OffersDashboard = (props, wholeProps) => {
    const [sector, setSector] = useState([]);
    const [offers, setOffers] = useState([]);
    const [query, setQuery] = useState('');
    const [city, setCity] = useState([]);
    const [dataFiltered, setDataFiltered] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeItem, setActiveItem] = useState('')

    useEffect(() => {

        getOffersDashBoard().then(apiRes => {
        
            if (apiRes.data.offers !== undefined) {
                setOffers(apiRes.data.offers);
                setCity(apiRes.data.offers.map(offer => (offer.addressId.cityForOffer.charAt(0).toUpperCase() + offer.addressId.cityForOffer.slice(1))))
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        });

        getOffersDashBoard();
        setSector(sectors);


    }, []);

    const showModal = (doc) => {
        setIsOpen(true);
        setActiveItem(doc)
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    const noRepCities = [...new Set(city)];

    let filterActive = offers !== undefined ? offers.filter((data) => data.jobOfferData.jobName.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : null
    let filterBySectorAndCity = offers !== undefined ? filterActive.filter((data) => data ? data.addressId.cityForOffer === dataFiltered || data.sectorId.sector === dataFiltered : null) : null
    let filterAllAndActiveFilter = offers !== undefined ? filterBySectorAndCity.filter((data) => data.jobOfferData.jobName.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : null


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
                isLoading ?
                    <Loader className='loader' type="ThreeDots" color="rgb(255, 188, 73)" height={80} width={80} />
                    :
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

                        {
                            filterAllAndActiveFilter.length > 0

                                ?
                                filterAllAndActiveFilter.map((doc, index) => {


                                    return (
                                        <div className='card card-offers bg-white' key={index}>
                                            <ul className='offersList'>
                                                <img className='offer-pic' src={doc.imgPath} alt='' />

                                                <span className='ml-2 btn btn-light' key={index.doc} >+ {doc.scorePerRec} puntos</span>
                                                <Link to={`/offer-details/${doc._id}`}> <li key={index.doc} className='font-weight600 link-offer-details'>{doc.jobOfferData.jobName.toUpperCase()}</li></Link>
                                                <li key={index.doc} className='font-weight600'>{doc.companyData.companyName}</li>
                                                {
                                                    doc.showMoney === true ?
                                                        <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer.charAt(0).toUpperCase() + doc.addressId.cityForOffer.slice(1)} | {doc.contractId.contract} | {doc.retribution.minGrossSalary} </li>
                                                        :
                                                        <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer.charAt(0).toUpperCase() + doc.addressId.cityForOffer.slice(1)} | {doc.contractId.contract} </li>
                                                }
                                            </ul>
                                            <button className='recommend-btn' onClick={() => showModal(doc)}>Recomendar</button>
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

                                                    <span className='ml-2 btn btn-light' key={index.doc} >+ {doc.scorePerRec} puntos</span>
                                                    <Link to={`/offer-details/${doc._id}`}><li key={index.doc} className='font-weight600 link-offer-details' >{doc.jobOfferData.jobName.toUpperCase()}</li></Link>
                                                    <li key={index.doc} className='font-weight600'>{doc.companyData.companyName}</li>
                                                    {
                                                        doc.showMoney === true ?
                                                            <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer.charAt(0).toUpperCase() + doc.addressId.cityForOffer.slice(1)} | {doc.contractId.contract} | {doc.retribution.minGrossSalary} </li>
                                                            :
                                                            <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer.charAt(0).toUpperCase() + doc.addressId.cityForOffer.slice(1)} | {doc.contractId.contract}</li>

                                                    }
                                                </ul>
                                                <button className='recommend-btn' onClick={() => showModal(doc)}>Recomendar</button>
                                            </div>
                                        )
                                    })

                                    :

                                    dataFiltered === undefined
                                        ?
                                        filterActive.map((doc, index) => {
                                                
                                            return (
                                                <div className='card card-offers bg-white' key={index}>
                                                    <ul className='offersList'>
                                                        <img className='offer-pic' src={doc.imgPath} alt='' />

                                                        <span className='ml-2 btn btn-light' key={index.doc} >+ {doc.scorePerRec} puntos</span>
                                                        <Link to={`/offer-details/${doc._id}`}> <li key={index.doc} className='font-weight600 link-offer-details' >{doc.jobOfferData.jobName.toUpperCase()}</li></Link>
                                                        <li key={index.doc} className='font-weight600'>{doc.companyData.companyName}</li>
                                                        {
                                                            doc.showMoney === true ?
                                                                <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer.charAt(0).toUpperCase() + doc.addressId.cityForOffer.slice(1)} | {doc.contractId.contract} | {doc.retribution.minGrossSalary} </li>
                                                                :
                                                                <li key={index.doc} className='longSpanOffer'>{doc.addressId.cityForOffer.charAt(0).toUpperCase() + doc.addressId.cityForOffer.slice(1)} | {doc.contractId.contract} </li>  
                                                        }

                                                    </ul>
                                                    <button className='recommend-btn' onClick={() => showModal(doc)}>Recomendar</button>

                                                </div>
                                            )
                                        })

                                        :

                                        <p className='p-inputs mt-5'>No hay ofertas para mostrar</p>


                        }

                        {
                            offers.length === 0 ?
                                <p className='p-inputs mt-5'>No hay ofertas para mostrar</p>
                                :
                                null
                        }

                        {
                            activeItem ?
                                <Modal className='recommend-modal' show={isOpen} onHide={hideModal}>
                                    <Modal.Body scrollable='true'>

                                        <SendRecommendation {
                                            ...wholeProps = {
                                                companyId: activeItem.companyData.companyId,
                                                offerId: activeItem._id,
                                                userId: props.match.params.userId
                                            }} />
                                    </Modal.Body>

                                </Modal>
                                :
                                null
                            }

                    </div>
            }
        </div>
    )
}
