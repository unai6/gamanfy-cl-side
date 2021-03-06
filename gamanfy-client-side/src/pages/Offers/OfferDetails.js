import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { offerDetails } from '../../api/offers';
import '../../CSS/offerDetails.css';
import { logout } from '../../api/auth.api.js';
import { useHistory } from "react-router-dom";
import { getCompanyData } from '../../api/users';
import { getUserData } from '../../api/users';
import { SendRecommendation } from '../UserPages/SendRecommendation';
import Modal from "react-bootstrap/Modal";
import DOMPurify from 'dompurify';

export const OfferDetails = (props) => {
    const sanitizer = DOMPurify.sanitize;
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.userId;
    const firstName = user.firstName
    const history = useHistory();
    const [data, setData] = useState(undefined);
    const [company, setCompany] = useState([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [companyID, setCompanyID] = useState('');
    const [punctuation, setPunctuation] = useState([]);
    const isNotMobile = window.innerWidth > 1024
    // const [companyDescription, setCompanyDescription] = useState('');

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };



    useEffect(() => {
        const any = async () => {
            offerDetails(props.match.params.offerId).then(apiRes => {
                console.log(apiRes)
                setData(apiRes.data.offer);
                setCompanyID(apiRes.data.offer.companyData.companyId);
                // setCompanyDescription(apiRes.data.offer.companyData.description)

            })
        }
        any()
    }, [props.match.params.offerId])

    useEffect(() => {
        const any = async () => {
            getCompanyData(userId).then(apiRes => {
                setCompany(apiRes.data.user)

            })
        }
        any()
    }, [userId]);

    useEffect(() => {
        const any = async () => {

            getUserData(userId).then(apiRes => {

                if (apiRes.data === null) {
                    return null

                } else if (apiRes.data.companyUser !== null && apiRes.data.companyUser !== undefined) {
                    setPunctuation(apiRes.data.companyUser.companyUserPunctuation)

                } else if (apiRes.data.influencerUserPunctuation) {
                    setPunctuation(apiRes.data.influencerUserPunctuation)
                }


            })
        }
        any()
    }, [userId])


    const handleClickLogout = () => {
        logout()
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history.push('/');

    }

    const wholeProps = {
        companyId: companyID,
        offerId: props.match.params.offerId,
        userId: userId
    }

    return (
        <div className='container-fluid bg-white wrapperOfferDetails'>
            <div className='userLog'>
                <h1 className='userName d-inline'>¡Hola {firstName}!</h1><button type="button" className="btn" onClick={handleClickLogout}><u>[ Cerrar Sesión ]</u></button>
            </div>
            {
                company ?
                    <Link className='back-btn' to={`/company/${userId}/dashboard`}> &#60; Volver a Ofertas</Link>
                    :
                    <Link className='back-btn' to={`/user/${userId}/dashboard`}> &#60; Volver a Ofertas</Link>

            }

            {data !== undefined ?
                <section className='text-left col-lg-8 mx-auto section-offerDetails'>
                    {

                        company ?
                            <div className='no-offerDetails-aside bg-transparent'> </div>

                            :
                            <div className='card offerDetails-aside bg-white'>
                                <h6 className='text-center'> Con esta recomendación, <br /> podrás ganar</h6>
                                {
                                    punctuation > 0 && punctuation <= 199 ?

                                        <span className='mr-2 text-center aside-span'>100 €</span>
                                        :
                                        punctuation >= 200 && punctuation <= 299 ?
                                            <span className='mr-2 text-center aside-span'>200 €</span>
                                            :
                                            punctuation >= 300 && punctuation <= 399 ?
                                                <span className='mr-2 text-center aside-span'>300 €</span>
                                                :
                                                punctuation >= 400 && punctuation <= 499 ?
                                                    <span className='mr-2 text-center aside-span'>400 €</span>
                                                    :
                                                    punctuation >= 500 && punctuation <= 599 ?
                                                        <span className='mr-2 text-center aside-span'>500 €</span>
                                                        :
                                                        punctuation >= 600 && punctuation <= 699 ?
                                                            <span className='mr-2 text-center aside-span'>600 €</span>
                                                            :
                                                            punctuation >= 700 && punctuation <= 799 ?
                                                                <span className='mr-2 text-center aside-span'>700 €</span>
                                                                :
                                                                punctuation > 800 ?
                                                                    <span className='mr-2 text-center aside-span'>800 €</span>
                                                                    :
                                                                    null
                                }
                                <span className='mr-2 text-center aside-span'> + {data.scorePerRec} puntos</span>
                                <button className='btn-cacc-su mx-auto mt-4 ' onClick={showModal}>Recomendar</button>
                                <Modal className='recommend-modal' show={isOpen} onHide={hideModal}>
                                    <Modal.Body scrollable='true'>
                                        <SendRecommendation {...wholeProps} />
                                    </Modal.Body>
                                </Modal>
                                <small className='text-center mt-3'> <u><a style={{ color: '#050D4D' }} href='https://gamanfy.com/comofunciona'>¿ Te recordamos cómo funciona?</a></u></small>
                            </div>

                    }

                    <img className={ isNotMobile ? 'pic-details mr-4 float-left' : 'pic-details mr-4'} src={data.offerPicture} alt='' />
                    <div className='d-flex flex-column align-items-baseline'>
                        <h3 className='h4-offDetails d-inline'>{data.companyData.companyName}</h3>
                        {
                            data.knowMore !== '' ? 
                            <span><i className="far fa-arrow-alt-circle-right"></i> <a href={data.knowMore} className='longP'>Saber más sobre la empresa</a></span>
                            :
                            null
                        }
                    </div>

                    <div>
                        <div className='mt-5 col-lg-8'>
                            <h4 className='h4-offDetails'> {data.jobOfferData.jobName.charAt(0).toUpperCase() + data.jobOfferData.jobName.slice(1)}</h4>

                            {
                                data.showMoney === true ?
                                    <p className='longP'>{data.addressId.cityForOffer} | {data.contractId.contract} | {data.retribution.minGrossSalary} -{data.retribution.maxGrossSalary}  | {data.retribution.quantityVariableRetribution ? data.retribution.quantityVariableRetribution + 'Variable' : null}</p>
                                    :
                                    <p className='longP'>{data.addressId.cityForOffer} | {data.contractId.contract}</p>

                            }

                            <div className='div-features-long'>
                                <span><b>Años de experiencia</b></span>
                                <li className='font-weight-lighter'>{data.minRequirements.minExp}</li>
                            </div>
                            <div className='d-flex flex-column mt-2' style={{ marginBottom: '1.3em', color: '#050D4D' }}>

                                <span><b>Tipo de contrato</b></span>
                                <li className='font-weight-lighter'>{data.contractId.contract}</li>
                            </div>

                            <div className='div-features-long mt-2'>
                                <span><b>Sector</b></span>
                                <li className='font-weight-lighter'>{data.sectorId.sector}</li>
                            </div>

                            {
                                data.keyKnowledge.keyKnowledge !== "[]" ?
                                    <div className='d-flex flex-column mt-2' style={{ marginBottom: '1.3em', color: '#050D4D' }}>
                                        <>
                                            <span><b>Aptitudes Clave</b></span>
                                            <li className='font-weight-lighter'>{data.keyKnowledge.keyKnowledge.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").split(',').join(', ')}</li>
                                        </>

                                    </div>
                                    :
                                    null
                            }
                            {
                                data.minRequirements.language !== "[]" ?

                                    <div className='div-features-long mt-2' style={{ marginBottom: '1.3em', color: '#050D4D' }}>
                                        <span><b>Idiomas</b></span>
                                        <li className='font-weight-lighter'>{data.minRequirements.language.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").split(',').join(', ')}</li>
                                    </div>
                                    :
                                    null
                            }

                            {
                                data.keyCompetences.keyComp !== "[]" ?

                                    <div className='d-flex flex-column mt-2' style={{ marginBottom: '1.3em', color: '#050D4D' }}>

                                        <span><b>Competencias Clave</b></span>
                                        <li className='font-weight-lighter'>{data.keyCompetences.keyComp.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").split(',').join(', ')}</li>
                                    </div>
                                    :
                                    null
                            }

                            {/* 
                                <h4 className='h4-offDetails'> Descripción de la empresa</h4> 
                                
                                <p className='longP'>{companyDescription}</p> */}

                        </div>

                        <div>
                            {/* <h4 className='h4-offDetails'> Descripción de la oferta de trabajo</h4> */}
                            <p className='jobDescription font-weight-lighter' style={{marginTop:'11em'}} dangerouslySetInnerHTML={{ __html: sanitizer(data.jobDescription.jobDescription) }} />
                        </div>
                    </div>
                    {/* call to action */}
                    {

                        company ?
                            null
                            :
                            <div className='card transformate-influencer-card bg-white'>
                                <h6 className='text-center font-weight-bold pr-2 pl-2'> ¡Transfórmate en Influencer de Talento para {data.companyData.companyName}!</h6>
                                <button className='btn-cacc-su d-block mx-auto mt-4 ' onClick={showModal}>Recomendar</button>
                            </div>

                    }
                </section>
                : <p className='text-center p-inputs' style={{ marginTop: '10em' }}>No hay ofertas para mostrar</p>}

        </div>
    )
}


