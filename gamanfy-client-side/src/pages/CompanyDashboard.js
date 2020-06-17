import React from 'react';
import { Link } from 'react-router-dom';
import { companyLogout } from '../api/auth.api.js';
import { useHistory } from "react-router-dom";

export const CompanyDashboard = (props) => {
    /*   let token = localStorage.getItem('user');
      let parsedCurrentUserId = JSON.parse(token);
      let currentUserId = parsedCurrentUserId.userId; */
    const history = useHistory();

    const handleClickLogout = () => {
        companyLogout()
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history.push('/');

    }

    return (
        <div>
            <h1>Hello {}</h1>
            <Link to={`/offers/${props.match.params.companyId}/post-job-offer`}>Publicar oferta de trabajo</Link>
            <button type="button" className="btn btn-lg btn-block  text-uppercase btn-danger text-light " onClick={handleClickLogout}>Desconectar</button>
        </div>
    )
}
