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
    const [companyDescription, setCompanyDescription] = useState('');
    const isNotMobile = window.innerWidth < 1100;


    useEffect(() => {
        const any = async () => {
            offerDetails(props.match.params.offerId).then(apiRes => {
                setData(apiRes.data.offer);
                setCompanyID(apiRes.data.offer.companyData.companyId);
                setCompanyDescription(apiRes.data.offer.companyData.description)
            })
        }
        any()
    }, [props.match.params.offerId])



    const wholeProps = {
        companyId: companyID,
        offerId: props.match.params.offerId,
        recommendationId: props.match.params.recommendationId
    }

    const onSubmit = async (e) => {
        await acceptRecommendation(wholeProps.offerId, wholeProps.recommendationId)
    }

    const handleLoader = (e) => {
        console.log(e.target.innerHTML)
        if (e.target.innerHTML === 'Aceptar Recomendación y Registrarse') {
            history.push('/auth/user/signup')
        } else if (e.target.innerHTML === '¿Ya estás registrado ? Acepta la Recomendación y entra en tu cuenta') {
            history.push('/auth/user/login')
        }
    }


    return (
        <div className='container-fluid bg-white '>

            {data !== undefined ?
                <section className='text-left col-lg-8 mx-auto section-offerDetails-accept-offer'>
                    <h3>¡Si te interesa la oferta haz click en Aceptar recomendación!</h3>
                    <img className='offer-pic pic-details d-block' src={data.offerPicture} alt='' />

                    <div>
                        <div >
                            <h4 className='h4-offDetails'> {data.jobOfferData.jobName.charAt(0).toUpperCase() + data.jobOfferData.jobName.slice(1)}</h4>

                            {
                                data.showMoney === true ?
                                    <p className='longP'>{data.addressId.cityForOffer} | {data.contractId.contract} | {data.retribution.minGrossSalary} €-{data.retribution.maxGrossSalary} € | {data.retribution.quantityVariableRetribution ? data.retribution.quantityVariableRetribution + '% Variable' : null}</p>
                                    :
                                    <p className='longP'>{data.addressId.cityForOffer} | {data.contractId.contract}</p>

                            }
                            
                        </div>
                        <div className='d-flex flex-column float-left' style={{ marginRight: '12.8em ', color: '#050D4D' }}>
                            <span>Años de experiencia</span>
                            <li>{data.minRequirements.minExp}</li>
                        </div>
                        <div className='d-flex flex-column' style={{ marginBottom: '1.3em', color: '#050D4D' }}>

                            <span>Tipo de contrato</span>
                            <li>{data.contractId.contract}</li>
                        </div>

                        <div className='d-flex flex-column float-left' style={{ marginRight: '11.4em', color: '#050D4D' }}>
                            <span>Sector</span>
                            <li>{data.sectorId.sector}</li>
                        </div>
                        <div className='d-flex flex-column' style={{ marginBottom: '1.3em', color: '#050D4D' }}>

                            <span>Aptitudes</span>
                            <li>{data.keyCompetences.keyComp.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").split(',').join(', ')}</li>
                        </div>

                        <div className='d-flex flex-column' style={{ marginBottom: '1.3em', color: '#050D4D' }}>
                            <span>Idiomas</span>
                            <li>{data.minRequirements.language.toString().replace(/\[|]|['"]+/g, '').replace(/\s/g, " ").split(',').join(', ')}</li>
                        </div>

                        <h4 className='h4-offDetails'> Descripción de la empresa</h4> 
                                <i class="far fa-arrow-alt-circle-right"></i> <a href='/' className='longP'>Saber más sobre la empresa</a>
                                <p className='longP'>{companyDescription}</p>

                            <div>
                                <h4 className='h4-offDetails'> Descripción de la oferta de trabajo</h4>
                                <p className='longP' dangerouslySetInnerHTML={{ __html: sanitizer(data.jobDescription.jobDescription) }}/>
                            </div>    



                    </div>

                </section>
                : <p>No hay ofertas para mostrar</p>}

            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    !isNotMobile ?
                        <>
                            <button onClick={handleLoader} className='btn-cacc border-0 d-block mx-auto' style={{ width: '25em', display: 'block', margin: 'auto', position: 'relative', top: '2em', marginBottom: '2em' }}>Aceptar Recomendación y Registrarse</button>
                            <button onClick={handleLoader} className='btn-cacc-su btn-info' style={{ width: '25em', display: 'block', margin: 'auto', position: 'relative', top: '2em', marginBottom: '2em' }}>¿Ya estás registrado ? Acepta la Recomendación y entra en tu cuenta</button>
                        </>
                        :
                        <>
                            <button onClick={handleLoader} className='btn-cacc border-0' style={{ width: '22em', margin: '2em 1em' }}>Aceptar Recomendación y Registrarse</button>
                            <button onClick={handleLoader} className='btn-cacc-su btn-info' style={{ width: '22em', margin: '2em 1em' }}>¿Ya estás registrado ? Acepta la Recomendación y entra en tu cuenta</button>
                        </>
                }
            </form>
        </div>
    )
}


