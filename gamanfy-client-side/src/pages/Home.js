import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import '../CSS/homePage.css';
import CookieConsent from "react-cookie-consent";

export const Home = () => {


    return (
        <div className='home-container'>
            <Navbar />

            <h2 className='mt-4 text-white'>Construyamos todos juntos una nueva experiencia <br /> en el mundo de la selección de personal </h2>

            <div className='hr-wrapper'>
                <div className='hr-right'></div>
                <p className='p-homepage text-center text-white'>Gamanfy, la plataforma que ayuda a los que quieren ayudar </p>
                <div className='hr-left'></div>
            </div>
            <h2 className='h2-homepage text-white'>¿Empezamos?</h2>
            <h5 style={{ color: 'white', textAlign: 'center' }}>Crea tu cuenta de forma sencilla en menos de 2 minutos</h5>

            <div className='homeContainer-wrapper'>
                <div className='homeContainer-left'>
                    <h3>Registrarse como INFLUENCER</h3>
                    <p className='homeContainer-text text-center'>Recomienda a tus mejores contactos y cobra por ello</p>
                    <Link to='/auth/user/signup' className='p-cacc'><p className='btn-cacc mx-auto'>Crear cuenta de influencer <i className="fas fa-arrow-right"></i></p></Link>
                    <p className='p-inputs text-center'>¡Ayuda y gana!</p>
                </div>
                <div className=' homeContainer-right'>
                    <h3>Registrarse como EMPRESA</h3>
                    <p className='homeContainer-text text-center'>Contrata al mejor Talento sin desviarte de tus presupuesto</p>
                    <Link to='/auth-co/company/signup' className='p-cacc'><p className='btn-cacc p-cacc mx-auto'>Crear cuenta de empresa   <i className="fas fa-arrow-right"></i></p></Link>
                    <p className='p-inputs text-center' style={{ bottom: '1.8em' }}>¡Publica tus ofertas gratuitamente!</p>
                </div>
            </div>

            {

                <CookieConsent
                    location="bottom"
                    buttonText="Aceptar"
                    cookieName="gamanfyCookie"
                    style={{ background: "white", height: 'auto' }}
                    buttonClasses={' btn-cookies pl-2 pr-2 rounded border border-warning bg-white mb-3 mt-0'}
                    expires={150}
                    // debug={true}
                    overlay={true}
                >
                    <div className='text-center'>
                        <p className='p-inputs mt-4 pr-2 p-2' style={{ fontSize: '12px' }}> Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios. Si acepta o continúa navegando, consideramos que acepta su uso.</p>
                        <span className='p-inputs mt-4 pr-2 p-2' style={{ fontSize: "12px" }}>Puede obtener más información <a style={{ color: 'orange' }} href=' https://gamanfy.com/politica-de-cookies'>aquí</a></span>
                    </div>
                </CookieConsent>
            }


        </div>
    )
}
