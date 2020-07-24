import React, { useEffect, useState } from 'react';
import { recommendationsDashboard, deleteRecommendation } from '../../api/recommendations';
import '../../CSS/recommendations.css'
import Loader from 'react-loader-spinner';

export const Recommendations = (props) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [updateState, setUpdateState] = useState(true);
    const [, setCompaniesData] = useState([])
    const [influencerUserPunctuation, setinfluencerUserPunctuation] = useState(0);
    const [isCompany, setIsCompany] = useState(Boolean());
    const [companyUserPunctuation, setCompanyUserPunctuation] = useState(0)

    useEffect(() => {
        const any = async () => {

            recommendationsDashboard(props.match.params.userId).then(apiRes => {
                console.log(apiRes)
                setData(apiRes.data.user.recommendedPeople)
                setCompanyUserPunctuation(apiRes.data.user.companyUser.companyUserPunctuation)
                setIsLoading(false)
                setCompaniesData(apiRes.data.user.recommendedPeople);
                setinfluencerUserPunctuation(apiRes.data.user.influencerUserPunctuation)
                setIsCompany(apiRes.data.user.isCompany)
            })
        }
        any()

    }, [props.match.params.userId, updateState])



    let punctuationForInfluencer;
    let punctuationForCompanyUser;

    if (influencerUserPunctuation >= 0 && influencerUserPunctuation <= 100) {
        punctuationForInfluencer = 100
    } else if (influencerUserPunctuation > 100 && influencerUserPunctuation <= 200) {
        punctuationForInfluencer = 100
    } else if (influencerUserPunctuation > 200 && influencerUserPunctuation <= 300) {
        punctuationForInfluencer = 200
    } else if (influencerUserPunctuation > 300 && influencerUserPunctuation <= 400) {
        punctuationForInfluencer = 300
    } else if (influencerUserPunctuation > 400 && influencerUserPunctuation <= 500) {
        punctuationForInfluencer = 400
    } else if (influencerUserPunctuation > 500 && influencerUserPunctuation <= 600) {
        punctuationForInfluencer = 500
    } else if (influencerUserPunctuation > 600 && influencerUserPunctuation <= 700) {
        punctuationForInfluencer = 600
    } else if (influencerUserPunctuation > 700 && influencerUserPunctuation <= 800) {
        punctuationForInfluencer = 700
    } else if (influencerUserPunctuation > 800 && influencerUserPunctuation <= 900) {
        punctuationForInfluencer = 800
    } else if (influencerUserPunctuation > 900 && influencerUserPunctuation <= 1000) {
        punctuationForInfluencer = 900
    } else if (influencerUserPunctuation > 1000) {
        punctuationForInfluencer = 1000
    };

    if(companyUserPunctuation >= 500 && companyUserPunctuation < 601) {
        punctuationForCompanyUser = 500
    } else if (companyUserPunctuation >= 601 && companyUserPunctuation <= 700) {
        punctuationForCompanyUser = 600
    } else if (companyUserPunctuation >= 701 && companyUserPunctuation <= 800) {
        punctuationForCompanyUser = 700
    } else if (companyUserPunctuation >= 801 && companyUserPunctuation <= 900) {
        punctuationForCompanyUser = 800
    } else if (companyUserPunctuation >= 901 && companyUserPunctuation <= 1000) {
        punctuationForCompanyUser = 900
    } else if (companyUserPunctuation > 1000) {
        punctuationForCompanyUser = 1000
    };


    const handleClickDeleteRecommendation = (userId, recommendationId, offerId, data) => {
        deleteRecommendation(userId, recommendationId, offerId, data).then(() => {
            setUpdateState(!updateState)
        });
    }
    // console.log(punctuationForCompanyUser)
    return (
        <div>
            <h3 className='rec-h3'>Recomendaciones</h3>


            {isLoading === true ? <Loader className='loader' type="ThreeDots" color="rgb(255, 188, 73)" height={80} width={80} /> :


                data !== undefined ?
                    data.map((data, index) => {

                        return (

                            <div className={data.recommendationAccepted && data.inProcess && data.hired ? 'card mx-auto card-offers recommend-card-big ' : data.recommendationRejected ? 'card mx-auto card-offers recommend-card-big ' : 'card mx-auto card-offers recommend-card '} key={index}>
                                <ul className='recommend-list'>
                                    {
                                        isCompany
                                            ?
                                            <span className='mr-2 btn btn-light' key={index.doc} >{punctuationForCompanyUser} €</span>
                                            :
                                            <span className='mr-2 btn btn-light' key={index.doc} >{punctuationForInfluencer} €</span>
                                    }
                                    {
                                        data.recommendedFirstName ?
                                            <li className='font-weight600 '>{data.recommendedFirstName.toUpperCase()} {data.recommendedLastName.toUpperCase()}</li>
                                            :
                                            null
                                    }
                                    <li className='font-weight600 longSpanOffer'>{data.offerId.companyData.companyId.companyName} | {data.offerId.jobOfferData.jobName.toUpperCase()}</li>
                                    {
                                        data.offerId.showMoney === true ?
                                            <li key={index.data} className='longSpanOffer'>{data.offerId.addressId.cityForOffer} | {data.offerId.contractId.contract} | {data.offerId.retribution.minGrossSalary} </li>
                                            :
                                            <li key={index.data} className='longSpanOffer'>{data.offerId.addressId.cityForOffer} | {data.offerId.contractId.contract} </li>
                                    }


                                    {

                                        data.recommendationAccepted && !data.inProcess && !data.hired

                                            ?
                                            (
                                                <div className='card-offers recommend-card'>
                                                    <hr className='rec-hr' />
                                                    <div className='d-flex justify-content-around inputs-div'>  <i className="fas fa-check-circle check-circle-1" style={{ fontSize: '2em' }}></i> <input className='round-btn ball-2' type='button' /><input className='round-btn ball-3' type='button' /></div>
                                                    <div className='d-flex justify-content-between p-inputs'><p className='p-inputs'>Postulación Aceptada</p><p className='p-inputs p-input-2 mr-5'>En Proceso de Selección</p><p className='p-inputs p-input-3'>¡Contratado!</p></div>
                                                </div>
                                            )

                                            :

                                            data.recommendationAccepted && data.inProcess && !data.hired
                                                ?
                                                (

                                                    <div>
                                                        <hr className='rec-hr' />
                                                        <div className='d-flex justify-content-around inputs-div'>  <i className="fas fa-check-circle check-circle-1" style={{ fontSize: '2em' }}></i>  <i className="fas fa-check-circle " style={{ fontSize: '2em' }}></i> <input className='round-btn ball-3' type='button' /></div>
                                                        <div className='d-flex justify-content-between p-inputs'><p className='p-inputs'>Postulación Aceptada</p><p className='p-inputs p-input-2 mr-5'>En Proceso de Selección</p><p className='p-inputs p-input-3'>¡Contratado!</p></div>
                                                    </div>
                                                )

                                                :

                                                data.recommendationAccepted && data.inProcess && data.hired
                                                    ?
                                                    (

                                                        <div>
                                                            <hr className='rec-hr' />
                                                            <div className='d-flex justify-content-around inputs-div'>  <i className="fas fa-check-circle check-circle-1" style={{ fontSize: '2em' }}></i>  <i className="fas fa-check-circle " style={{ fontSize: '2em' }}></i> <i className="fas fa-check-circle " style={{ fontSize: '2em' }}></i> </div>
                                                            <div className='d-flex justify-content-between p-inputs'><p className='p-inputs'>Postulación Aceptada</p><p className='p-inputs p-input-2 mr-5'>En Proceso de Selección</p><p className='p-inputs p-input-3-hired'>¡Contratado!</p></div>
                                                            <p className='p-signup mr-5'> ¡La empresa ha contratado a tu amigo! </p>
                                                            <p className='p-signup mr-5'> Pulsa el botón OK para eliminarla de Mis Recomendaciones.<br />
                                                            Se guardará en el Histórico de Recomendaciones
                                                            </p>
                                                            <button className='modal-offer-btn d-block mx-auto' onClick={() => handleClickDeleteRecommendation(props.match.params.userId, data._id, data.offerId._id)}>ELIMINAR OFERTA</button>
                                                        </div>

                                                    )
                                                    :

                                                    data.recommendationRejected ?
                                                        <div>
                                                            <hr className='rec-hr' />
                                                            <div className='d-flex justify-content-around inputs-div'> <i className="fas fa-times-circle  check-circle-1"></i><input className='round-btn ball-2' type='button' /><input className='round-btn ball-3' type='button' /></div>
                                                            <div className='d-flex justify-content-between p-inputs'><p className='p-inputs'>Postulación Aceptada</p><p className='p-inputs p-input-2 mr-5'>En Proceso de Selección</p><p className='p-inputs p-input-3'>¡Contratado!</p></div>
                                                            <p className='p-signup mr-5'> Esta recomendación ha sido rechazada. </p>
                                                            <p className='p-signup mr-5'> Pulsa el botón OK para eliminarla de Mis Recomendaciones.<br />
                                                            Se guardará en el Histórico de Recomendaciones
                                                            </p>
                                                            <button className='modal-offer-btn d-block mx-auto' onClick={() => handleClickDeleteRecommendation(props.match.params.userId, data._id, data.offerId._id)}>ELIMINAR OFERTA</button>
                                                        </div>
                                                        :
                                                        (
                                                            <div>
                                                                <hr className='rec-hr' />
                                                                <div className='d-flex justify-content-around inputs-div'>  <input className='round-btn ball-1' type='button' /><input className='round-btn ball-2' type='button' /><input className='round-btn ball-3' type='button' /></div>
                                                                <div className='d-flex justify-content-between p-inputs'><p className='p-inputs'>Postulación Aceptada</p><p className='p-inputs p-input-2 mr-5'>En Proceso de Selección</p><p className='p-inputs p-input-3'>¡Contratado!</p></div>
                                                            </div>
                                                        )



                                    }

                                </ul>
                            </div>
                        )
                    })

                    : null
            }
        </div>
    )
}

