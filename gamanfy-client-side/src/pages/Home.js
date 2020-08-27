import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './Navbar';
import '../CSS/homePage.css';
import Modal from "react-bootstrap/Modal";

export const Home = () => {

    const token = localStorage.getItem('user');



    const [isOpen, setIsOpen] = useState(true);
    const hideModal = () => {
        setIsOpen(false);
    };


    return (
        <div className='home-container'>
            <Navbar />

            <h2 className='mt-4'>Construyamos todos juntos una nueva experiencia <br /> en el mundo de la selección de personal </h2>

            <div className='hr-wrapper'>
                <div className='hr-right'></div>
                <p className='p-homepage text-center'>Gamanfy, la plataforma que ayuda a los que quieren ayudar </p>
                <div className='hr-left'></div>
            </div>
            <h2 className='h2-homepage'>¿Empezamos?</h2><h5 style={{ color: 'white', textAlign: 'center' }}>Crea tu cuenta ahora</h5>

            <div className='homeContainer-wrapper'>
                <div className='homeContainer-left'>
                    <h3>Registrarse como INFLUENCER</h3>
                    <p className='homeContainer-text'>Recomienda a tus mejores contactos y cobra por ello</p>
                    <Link to='/auth/user/signup' className='p-cacc'><p className='btn-cacc mx-auto'>Crear cuenta de influencer <i className="fas fa-arrow-right"></i></p></Link>
                    <p className='p-inputs'>¡Ayuda y gana!</p>
                </div>
                <div className=' homeContainer-right'>
                    <h3>Registrarse como EMPRESA</h3>
                    <p className='homeContainer-text'>Contrata al mejor Talento sin desviarte de tus presupuesto</p>
                    <Link to='/auth-co/company/signup' className='p-cacc'><p className='btn-cacc p-cacc mx-auto'>Crear cuenta de empresa   <i className="fas fa-arrow-right"></i></p></Link>
                    <p className='p-inputs' style={{ bottom: '1.8em' }}>¡Publica tus ofertas gratuitamente!</p>
                </div>
            </div>

            {
                !token ?
                    <Modal show={isOpen} >
                        <p className='p-inputs mt-4 pr-2 p-2' style={{fontSize:'10px'}}> Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios. Si acepta o continúa navegando, consideramos que acepta su uso. Puede obtener más información <a style={{color:'orange'}} href='/'>aquí</a>.</p>
                        <button className='btn pl-2 pr-2 rounded border-warning d-block mx-auto mb-3 mt-0' style={{fontSize:'10px'}} onClickCapture={hideModal}> Aceptar Cookies</button>
                    </Modal>
                    :
                    null
            }


        </div>
    )
}
