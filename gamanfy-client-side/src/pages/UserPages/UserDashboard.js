import React, { useState, useEffect } from 'react';
import { logout } from '../../api/auth.api.js';
import { useHistory, Link  } from "react-router-dom";
import { OffersDashboard } from '../Offers/OffersDashboard';
import { getUserData } from '../../api/users';
import '../../CSS/userDashboard.css';

export const UserDashboard = (props) => {
    const history = useHistory();
    const [offers, setOffers] = useState(false);
    const [data, setData] = useState([]);

    const handleClickLogout = () => {
        logout()
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history.push('/');

    }

    useEffect(() => {
        getUserData(props.match.params.userId).then(apiRes => {
            setData(apiRes.data)
        })
        getUserData(props.match.params.userId)

    }, [props.match.params.userId])

    const handleClickShowOffers = () => {
        setOffers(!offers)

    }

    return (
        <div className='row'>
            <section className='col-2 leftSide-bar'>
            <Link to='/'>Menú</Link>
            <img className ='logo-gamanfy-blue' src='/gamanfy_logo_dashboard_influencer.png' alt='logo-gamanfy'/>
             <button className='offers-btn' onClick={handleClickShowOffers}> <i className="fas fa-briefcase"></i> Ofertas de Empleo</button>
            
            </section>
             

            <div className='col-10 offersPage' > 
            <div><h1 className='userName'>¡Hola {data.firstName}!</h1><button type="button" className="btn" onClick={handleClickLogout}><u>[ Cerrar Sesión ]</u></button>
            </div>
            {offers ? <OffersDashboard /> : null}
            </div>
        </div>
    )
}
