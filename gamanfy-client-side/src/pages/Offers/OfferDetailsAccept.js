import React, { useState, useEffect } from 'react'
import { offerDetails } from '../../api/offers';
import '../../CSS/offerDetails.css';
import { useHistory } from "react-router-dom";
import { acceptRecommendation } from '../../api/recommendations';
import { useForm } from "react-hook-form";

export const OfferDetailsAccept = (props) => {

    const { handleSubmit } = useForm();
    const history = useHistory();
    const [data, setData] = useState(undefined);
    const [benefits, setBenefits] = useState(false);
    const [companyID, setCompanyID] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const isNotMobile = window.innerWidth < 1100;


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



    const wholeProps = {
        companyId: companyID,
        offerId: props.match.params.offerId,
        recommendationId: props.match.params.recommendationId
    }

    const onSubmit = async () => {
        await acceptRecommendation(wholeProps.offerId, wholeProps.recommendationId)
        history.push('/auth/user/signup')
    }


    return (
        <div className='container-fluid bg-white '>

            {data !== undefined ?
                <section className='text-left col-lg-8 mx-auto section-offerDetails-accept-offer'>
                    <h3>¡Si te interesa la oferta haz click en Aceptar recomendación!</h3>
                    <img className='offer-pic pic-details d-block' src={data.offerPicture} alt='' />
                    <div>
                        <div >
                            <h4 className='h4-offDetails'> {data.jobOfferData.jobName.toUpperCase()}</h4>
                            <span className='h4-offDetails'>{data.companyData.companyName}</span>
                            {
                                data.showMoney === true ?
                                    <p className='longP'>{data.addressId.cityForOffer} | {data.contractId.contract} | {data.retribution.minGrossSalary}-{data.retribution.maxGrossSalary} </p>
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

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            !isNotMobile ?
                                <button className='btn-cacc-su' style={{ width: '25em', display: 'block', margin: 'auto', position: 'relative', top: '2em', marginBottom:'2em' }}>Aceptar Recomendación y Registrarse</button>
                                :
                                <button className='btn-cacc-su' style={{ width: '22em', margin: '2em 1em' }}>Aceptar Recomendación y Registrarse</button>

                        }
                    </form>
        </div>
    )
}


