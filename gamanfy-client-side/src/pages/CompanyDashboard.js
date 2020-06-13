import React from 'react';
import {Link} from 'react-router-dom';

export const CompanyDashboard = (props) => {
 

    return (
        <div>
            <h1>Hello this is a private route</h1>
            <Link to={`/offers/${props.match.params.companyId}/post-job-offer`}>Publicar oferta de trabajo</Link>

        </div>
    )
}
