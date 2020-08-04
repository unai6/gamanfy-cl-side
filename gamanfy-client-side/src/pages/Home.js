import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './Navbar';
import '../CSS/homePage.css';


export default class Home extends Component {

    render() {
        return (
            <div className='home-container container-fluid'>
                <Navbar />
                <section>
                    <div>
                        <h2 className='mt-4'>Construyamos todos juntos una nueva experiencia <br /> en el mundo de la selección de personal descubrir el mejor talento</h2>
                    </div>
                    <div className='hr-wrapper'><div className='d-flex hr-right'></div><div className='hr-left'></div></div> 
                    
                    <p className='p-homepage'>Gamanfy, la plataforma que ayuda a los que quieren ayudar </p>  

                    <div>
                        <h2 className='h2-homepage'>Para empezar, elige tu perfil</h2>
                    </div>
                    <div className='d-lg-flex container-fluid justify-content-center p-0'>
                        <div className='homeContainer-left mx-auto'>
                            <h3>Soy influencer</h3>
                            <p className='homeContainer-text'>Quiero ayudar a mis amigos y conocidos a conseguir trabajo</p>
                            <Link to='/auth/user/signup' className='p-cacc'><p className='btn-cacc mx-auto'>Crear cuenta de influencer <i className="fas fa-arrow-right"></i></p></Link>


                        </div>

                        <div className=' homeContainer-right mx-auto'>
                            <h3>Soy empresa</h3>
                            <p className='homeContainer-text'>Quiero publicar ofertas de empleo y econtrar al candidato ideal</p>

                           <Link to='/auth-co/company/signup' className='p-cacc'><p className='btn-cacc p-cacc mx-auto'>Crear cuenta de empresa   <i className="fas fa-arrow-right"></i></p></Link>
                        </div>
                    </div>  
                </section>
            </div>
        )
    }
}
