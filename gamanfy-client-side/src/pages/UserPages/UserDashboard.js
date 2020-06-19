import React, { useState, useEffect } from 'react';
import { logout } from '../../api/auth.api.js';
import { useHistory, Link } from "react-router-dom";
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
                {/* <Link to='/' className='menu-icon'> <p className='menu-icon'>&#60; Menú</p></Link> */}
                <img className='logo-gamanfy-blue' src='/gamanfy_logo_dashboard_influencer.png' alt='logo-gamanfy' />
                <div>
                    <Link to='/'><button className='offers-btn' style={{ position: 'relative', right: '8.4em' }}><i className="fas fa-home"></i> Inicio</button><br /></Link>
                    <button className='offers-btn' style={{ position: 'relative', right: '7.7em' }}><i className="fas fa-user-alt"></i> Mi perfil</button><br />
                    <button className='offers-btn' onClick={handleClickShowOffers} style={{ position: 'relative', right: '5.1em' }}> <i className="fas fa-briefcase"></i> Ofertas de Empleo</button>
                    <button className='offers-btn' style={{ position: 'relative', right: '5.3em' }}> <i className="fas fa-check-circle"></i>Recomendaciones</button>
                    <button className='offers-btn' style={{ position: 'relative', right: '6.3em' }}><i className="fas fa-bars"></i> Mis ganancias</button>
                    <button className='offers-btn' style={{ position: 'relative', right: '5em' }}><i className="fas fa-book-open"></i> Gamanfy Academy</button><br />
                    <button className='offers-btn' style={{ position: 'relative', right: '8.3em' }}> <i className="fas fa-question"></i> Ayuda</button>
                </div>

            </section>

            <section className='col-10 offersPage'>
                <div>
                    <div className='userLog'>
                        <h1 className='userName d-inline'>¡Hola {data.firstName}!</h1><button type="button" className="btn" onClick={handleClickLogout}><u>[ Cerrar Sesión ]</u></button>
                    </div>
                    <div>
                        {offers ? <OffersDashboard /> : null}
                    </div>
                </div>
            </section>
        </div>

    )
}
