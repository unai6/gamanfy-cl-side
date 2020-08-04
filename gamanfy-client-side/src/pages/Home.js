import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './Navbar';
import '../CSS/homePage.css';


export default class Home extends Component {

    render() {
        return (
            <div className='home-container container-fluid'>
                <Navbar />
                <section>
                <h2 className='mt-4'>Construyamos todos juntos una nueva experiencia <br /> en el mundo de la selección de personal descubrir el mejor talento</h2>
                
                    <div className='d-flex hr-right'></div>
                    <div className='hr-left'></div>
                    <p className='p-homepage'>Gamanfy, la plataforma que ayuda a los que quieren ayudar </p>
                    <h2 className='h2-homepage'>¿Empezamos?</h2><h5 style={{ color: 'white', textAlign: 'center' }}>Crea tu cuenta ahora</h5>
                        <div className='homeContainer-left mx-auto'>
                            <h3>Registrarse como INFLUENCER</h3>
                            <p className='homeContainer-text'>Recomienda a tus mejores contactos y cobra por ello</p>
                            <Link to='/auth/user/signup' className='p-cacc'><p className='btn-cacc mx-auto'>Crear cuenta de influencer <i className="fas fa-arrow-right"></i></p></Link>
                            <p className='p-inputs'>¡Ayuda y gana!</p>
                        </div>
                        <div className=' homeContainer-right mx-auto'>
                            <h3>Registrarse como EMPRESA</h3>
                            <p className='homeContainer-text'>Contrata al mejor Talento sin desviarte de tus presupuesto</p>
                            <Link to='/auth-co/company/signup' className='p-cacc'><p className='btn-cacc p-cacc mx-auto'>Crear cuenta de empresa   <i className="fas fa-arrow-right"></i></p></Link>
                            <p className='p-inputs' style={{bottom:'1.8em'}}>¡Publica tus ofertas gratuitamente!</p>
                        </div>
                     
                </section>
            </div>
        )
    }
}
