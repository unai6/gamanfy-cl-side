import React, { useState, useEffect } from 'react'
import { offerDetails } from '../../api/offers';
import '../../CSS/offerDetails.css';
import { useHistory } from "react-router-dom";
import { acceptRecommendation } from '../../api/recommendations';
import { useForm } from "react-hook-form";
import DOMPurify from 'dompurify';

export const OfferDetailsAccept = (props) => {
    const sanitizer = DOMPurify.sanitize;
    const { handleSubmit } = useForm();
    const history = useHistory();
    const [data, setData] = useState(undefined);
    const [companyID, setCompanyID] = useState('');
    // const [companyDescription, setCompanyDescription] = useState('');
    const isNotMobile = window.innerWidth < 1100;


    useEffect(() => {
        const any = async () => {
            offerDetails(props.match.params.offerId).then(apiRes => {
                setData(apiRes.data.offer);
                setCompanyID(apiRes.data.offer.companyData.companyId);
                // setCompanyDescription(apiRes.data.offer.companyData.description)
            })
        }
        any()
    }, [props.match.params.offerId])



    const wholeProps = {
        companyId: companyID,
        offerId: props.match.params.offerId,
        recommendationId: props.match.params.recommendationId
    }

    const onSubmit = () => {
        acceptRecommendation(wholeProps.offerId, wholeProps.recommendationId)
    }
  

     const handleLoader = (e) => {
        onSubmit();
        if (e.target.innerHTML === 'Aceptar Recomendación y Registrarse') {
            history.push('/auth/user/signup')
        } else if (e.target.innerHTML === '¿Ya estás registrado? Acepta la Recomendación y entra en tu cuenta') {
            history.push('/auth/user/login')
        }
    }


    return (
        <div className='container-fluid bg-white '>

            {data !== undefined ?
                <section className='text-left col-lg-8 mx-auto section-offerDetails-accept-offer'>
                    <img className='pic-details mr-4 float-left' src={data.offerPicture} alt='' />
                    <div className='d-flex flex-column align-items-baseline'>
                        <h3 className='h4-offDetails d-inline'>{data.companyData.companyName}</h3>
                        <span><i className="far fa-arrow-alt-circle-right"></i> <a href='/' className='longP'>Saber más sobre la empresa</a></span>
                    </div>

                    <div>
                        <div className='mt-5'>
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
                            <div className='d-flex flex-column' style={{ marginBottom: '1.3em', color: '#050D4D' }}>

                                <span><b>Tipo de contrato</b></span>
                                <li className='font-weight-lighter'>{data.contractId.contract}</li>
                            </div>

                            <div className='div-features-long'>
                                <span><b>Sector</b></span>
                                <li className='font-weight-lighter'>{data.sectorId.sector}</li>
                            </div>
                            <div className='d-flex flex-column' style={{ marginBottom: '1.3em', color: '#050D4D' }}>

                                <span><b>Aptitudes Clave</b></span>
                                <li className='font-weight-lighter'>{data.keyKnowledge.keyKnowledge.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").split(',').join(', ')}</li>
                            </div>

                            <div className='div-features-long' style={{ marginBottom: '1.3em', color: '#050D4D' }}>
                                <span><b>Idiomas</b></span>
                                <li className='font-weight-lighter'>{data.minRequirements.language.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").split(',').join(', ')}</li>
                            </div>
                            <div className='d-flex flex-column' style={{ marginBottom: '1.3em', color: '#050D4D' }}>

                                <span><b>Competenecias Clave</b></span>
                                <li className='font-weight-lighter'>{data.keyCompetences.keyComp.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").split(',').join(', ')}</li>
                            </div>
                        </div>
                        {/* <h4 className='h4-offDetails'> Descripción de la empresa</h4> 
                                <i class="far fa-arrow-alt-circle-right"></i> <a href='/' className='longP'>Saber más sobre la empresa</a>
                                <p className='longP'>{companyDescription}</p> */}

                        <div>
                            {/* <h4 className='h4-offDetails'> Descripción de la oferta de trabajo</h4> */}

                            <p className='jobDescription font-weight-lighter mt-5' dangerouslySetInnerHTML={{ __html: sanitizer(data.jobDescription.jobDescription) }} />
                        </div>

                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            !isNotMobile ?
                                <>
                                    <button onClick={handleLoader} className='btn-cacc border-0 d-block mx-auto' style={{ width: '25em', display: 'block', margin: 'auto', position: 'relative', top: '2em', marginBottom: '2em' }}>Aceptar Recomendación y Registrarse</button>
                                    <button onClick={handleLoader} className='btn-cacc-su btn-info' style={{ width: '25em', display: 'block', margin: 'auto', position: 'relative', top: '2em', marginBottom: '2em' }}>¿Ya estás registrado? Acepta la Recomendación y entra en tu cuenta</button>
                                </>
                                :
                                <>
                                    <button onClick={handleLoader} className='btn-cacc border-0' style={{ width: '22em', margin: '2em 1em' }}>Aceptar Recomendación y Registrarse</button>
                                    <button onClick={handleLoader} className='btn-cacc-su btn-info' style={{ width: '22em', margin: '2em 1em' }}>¿Ya estás registrado? Acepta la Recomendación y entra en tu cuenta</button>
                                </>
                        }
                    </form>
                </section>
                : <p className='text-center p-inputs mt-5'>No hay ofertas para mostrar</p>}

        </div>
    )
}


