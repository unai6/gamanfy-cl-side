import React from 'react';
import {Link} from 'react-router-dom';
import {companyLogout } from '../api/auth.api.js';

export const CompanyDashboard = (props) => {
  /*   let token = localStorage.getItem('user');
    let parsedCurrentUserId = JSON.parse(token);
    let currentUserId = parsedCurrentUserId.userId; */


    return (
        <div>
            <h1>Hello {}</h1>
            <Link to={`/offers/${props.match.params.companyId}/post-job-offer`}>Publicar oferta de trabajo</Link>
            <button type="button" className="btn btn-lg btn-block  text-uppercase btn-danger text-light " onClick={companyLogout}>Desconectar</button>
        </div>
    )
}
