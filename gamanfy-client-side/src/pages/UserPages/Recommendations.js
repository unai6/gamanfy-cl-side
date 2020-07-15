import React, { useEffect, useState } from 'react';
import { recommendationsDashboard, deleteRecommendation} from '../../api/recommendations';
import '../../CSS/recommendations.css'
import Loader from 'react-loader-spinner';

export const Recommendations = (props) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [updateState, setUpdateState] = useState(true);
    
    useEffect(() => {
        const any = async () => {

            recommendationsDashboard(props.match.params.userId).then(apiRes => {
                setData(apiRes.data.user.recommendedPeople)
                setIsLoading(false)
                console.log(apiRes.data.user.recommendedPeople)
            })
        }
        any()

    }, [props.match.params.userId, updateState])


    const handleClickDeleteRecommendation = (userId, recommendationId, data) => {
        deleteRecommendation(userId, recommendationId, data).then(() => {
            setUpdateState(!updateState)
        });
    }

    return (
        <div>
            <h3 className='rec-h3'>Recomendaciones</h3>


            {isLoading === true ? <Loader className='loader' type="ThreeDots" color="rgb(255, 188, 73)" height={80} width={80} /> :


                data !== undefined ?
                    data.map((data, index) => {
                       
                        return (
                            
                            <div className={ data.recommendationAccepted && data.inProcess && data.hired ? 'card mx-auto card-offers recommend-card-big ': 'card mx-auto card-offers recommend-card '} key={index}>
                                <ul className='recommend-list'>
                                    {
                                        data.recommendedFirstName ?
                                            <li className='font-weight600 '>{data.recommendedFirstName.toUpperCase()} {data.recommendedLastName.toUpperCase()}</li>
                                            :
                                            null
                                    }
                                    <li className='font-weight600'>{data.offerId.companyData.companyName}</li>
                                    {
                                        data.offerId.showMoney === true ?
                                            <li key={index.data} className='longSpanOffer'>{data.offerId.addressId.cityForOffer} | {data.offerId.contractId.contract} | {data.offerId.retribution.minGrossSalary} </li>
                                            :
                                            <li key={index.data} className='longSpanOffer'>{data.offerId.addressId.cityForOffer} | {data.offerId.contractId.contract} </li>
                                    }
                                    <span className='mr-2 btn btn-light btn-punc-recommend' key={index.data} >{data.offerId.moneyPerRec}</span>
                                    <span className='ml-2 btn btn-light btn-punc-recommend' key={index.data} >+ {data.offerId.scorePerRec} puntos</span>

                                    {

                                            data.recommendationAccepted && !data.inProcess  && !data.hired 

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

                                                    <div className='card-offers recommend-card'>
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
                                                        <p className='p-signup'> ¡La empresa ha contratado a tu amigo! </p>
                                                        <p className='p-signup'> Pulsa el botón OK para eliminarla de Mis Recomendaciones.</p>
                                                        <button className='modal-offer-btn d-block mx-auto' onClick={() => handleClickDeleteRecommendation(props.match.params.userId, data._id)}>ELIMINAR OFERTA</button>
                                                        </div> 

                                            )
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

