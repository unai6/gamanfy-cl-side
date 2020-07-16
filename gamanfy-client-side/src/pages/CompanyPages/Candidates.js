import React, { useEffect, useState } from 'react';
import { getCompanyData } from '../../api/users';
import '../../CSS/candidates.css';

export const Candidates = (props) => {

    const [postedOffers, setPostedOffers] = useState([]);

    useEffect(() => {
        const any = async () => {
            getCompanyData(props.match.params.companyId).then(apiRes => {
                console.log(apiRes.data)
                setPostedOffers(apiRes.data.user.postedOffers);

            });

        }
        any()
    }, [props.match.params.companyId]);



    return (
        <div className='div-wrapper'>

            <div>
                <h3 className='offersh3 mt-3'>Candidatos</h3>
                {
                    postedOffers.length > 0 ?
                        postedOffers.map((data) => {
                            return data.recommendedTimes.map((candidate, index) => {
                                console.log(candidate)
                                return (
                                    <div className='card candidates-card mx-auto' key={index}>
                                        <p className='p-signup'>{candidate.recommendedFirstName} {candidate.recommendedLastName}</p>
                                        <p className='p-signup'>Aplicado el {candidate.createdAt.substring(0, 10)}</p>
                                        <button type="submit" className='btn-moreinfo'><i className="fas fa-plus-circle"></i>INFO</button>
                                    </div>
                                )
                            });
                        })
                        : <p>No hay candidatos en esta oferta</p>
                }
            </div>
        </div>
    )
}
