import React, { useState, useEffect } from 'react';
import { candidateReport } from '../../api/offers';
import '../../CSS/candidateReport.css';

export const CandidateReport = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const any = async () => {
            candidateReport(props.match.params.recommendationId).then((apiRes) => {
                setData(apiRes.data)

            })
        }
        any()
    }, [props.match.params.recommendationId])


    return (
        <div className='p-0'>
            <div className='div-report mx-auto p-0'>

                <img className=' image-candidate-report' src='\Anotación 2020-07-30 172748.png' alt='pic' />
                <h4 className='h3-report'><u>INFORME DEL CANDIDATO</u></h4>
                {
                    data ?
                        <section>

                            <div className='div-infoCandidate'>
                                <p className='names-candidate'>{data.recommendedFirstName} {data.recommendedLastName}</p>
                                <p className='email-candidate'>{data.recommendedEmail} </p>
                                <p className='phone-candidate'>{data.recommendedPhoneNumber}</p>
                                <p className='linkedin-candidate'>{data.recommendedLinkedin}</p>

                            </div>
                                <button className='btn-donwloadCV'>DESCARGAR CV DEL CANDIDATO(PDF)</button>
                        </section>

                        : null
                }
            </div>
            <img  className='abstract-back' src='\abstract background_33-01-candidate-report.png' alt='pic-2' />
            <img  className='abstract-orange' src='\abstract background_7-01-naranja.png' alt='pic-2' />
        </div>
    )
}


