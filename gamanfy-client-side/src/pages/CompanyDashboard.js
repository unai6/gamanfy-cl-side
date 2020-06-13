import React from 'react';
import {Link} from 'react-router-dom';

export const CompanyDashboard = (props) => {
    let token = localStorage.getItem('user');
    let parsedCurrentUserId = JSON.parse(token);
    let currentUserId = parsedCurrentUserId.userId;


    return (
        <div>
            <h1>Hello {}</h1>
            <Link to={`/offers/${props.match.params.companyId}/post-job-offer`}>Publicar oferta de trabajo</Link>

        </div>
    )
}
