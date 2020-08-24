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

    export const OfferDetails = (props) => {

        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user.userId;
        const firstName = user.firstName
        const history = useHistory();
        const [data, setData] = useState(undefined);
        const [benefits, setBenefits] = useState(false);
        const [company, setCompany] = useState([]);
        const [isOpen, setIsOpen] = React.useState(false);
        const [companyID, setCompanyID] = useState('');
        const [punctuation, setPunctuation] = useState([]);
        const [companyDescription, setCompanyDescription] = useState('');

        const showModal = () => {
            setIsOpen(true);
        };
        const hideModal = () => {
            setIsOpen(false);
        };



        useEffect(() => {
            const any = async () => {
                offerDetails(props.match.params.offerId).then(apiRes => {
                    setData(apiRes.data.offer);
                    setCompanyID(apiRes.data.offer.companyData.companyId);
                    setCompanyDescription(apiRes.data.offer.companyData.description)
                    
                    if (apiRes.data.offer.benefits !== undefined || null) {
                        setBenefits(true)
                    }

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
              
                if(apiRes.data === null){
                    return null
                
                }else if (apiRes.data.companyUser !== null && apiRes.data.companyUser !== undefined) {
                    setPunctuation(apiRes.data.companyUser.companyUserPunctuation)
                  
                } else if(apiRes.data.influencerUserPunctuation) {
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
                                    <button className='btn-cacc-su ml-5 mt-4 ml-5' onClick={showModal}>Recomendar</button>
                                    <Modal className='recommend-modal' show={isOpen} onHide={hideModal}>
                                        <Modal.Body scrollable='true'>
                                            <SendRecommendation {...wholeProps} />
                                        </Modal.Body>
                                    </Modal>
                                    <small className='text-center mt-3'> <u><a style={{color:'#050D4D'}} href='https://gamanfy.com/comofunciona'>¿ Te recordamos cómo funciona?</a></u></small>
                                </div>

                        }

                        <img className='offer-pic pic-details d-block' src={data.offerPicture} alt='' />

                        <div>
                            <div >
                                <h4 className='h4-offDetails'> {data.jobOfferData.jobName.toUpperCase()}</h4>
                                <span className='h4-offDetails'>{data.companyData.companyName}</span>
                                {
                                    data.showMoney === true ?
                                        <p className='longP'>{data.addressId.cityForOffer} | {data.contractId.contract} | {data.retribution.minGrossSalary} €-{data.retribution.maxGrossSalary} €</p>
                                        :
                                        <p className='longP'>{data.addressId.cityForOffer} | {data.contractId.contract}</p>

                                }
                                <h4 className='h4-offDetails'> Descripción de la empresa</h4> 
                                <p className='longP'>{companyDescription}</p>

                            </div>
                            <h4 className='h4-offDetails'> Misión principal del puesto de trabajo</h4>
                            <p className='longP'>{data.jobDescription.mainMission}</p>
                            <div>
                                <h4 className='h4-offDetails'> Descripción</h4>
                                <p className='longP'>{data.jobDescription.jobDescription}</p>
                            </div>

                            {
                                benefits === true ?
                                    <div>
                                        <h4 className='h4-offDetails'>Beneficios</h4>
                                        {

                                            data.benefits.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").replace(/,/g, ', ').split(', ').map((ben, index) => {

                                                return (
                                                    <li className='longP' key={index}>{ben}</li>

                                                )
                                            })
                                        } </div> : null
                            }

                            <div className='mt-3'>
                                <h4 className='h4-offDetails'>Requisitos</h4>

                                {
                                    data.minRequirements ?
                                        <div>
                                            {

                                                data.minRequirements.language.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").replace(/,/g, ', ').split(', ').map((ben, index) => {

                                                    return (
                                                        <li className='longP' key={index}>{ben}</li>

                                                    )
                                                })

                                            }
                                            <li className='longP'> Experiencia: {data.minRequirements.minExp}</li>
                                            <li className='longP'> Estudios: {data.minRequirements.minStudies}</li>
                                            <li className='longP'>{data.minRequirements.minReqDescription}</li>
                                        </div> : null
                                }

                            </div>
                            <div className='mt-3'>
                                <h4 className='h4-offDetails'>Conocimientos clave</h4>
                                {
                                    data.keyKnowledge !== undefined ?
                                        <div className='mb-3'>
                                            {

                                                data.keyKnowledge.keyKnowledge.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").replace(/,/g, ', ').split(', ').map((ben, index) => {

                                                    return (
                                                        <li className='longP' key={index}>{ben}</li>

                                                    )
                                                })

                                            }

                                        </div> : null
                                }
                            </div>
                        </div>

                    </section>
                    : <p>No hay ofertas para mostrar</p>}

            </div>
        )
    }


