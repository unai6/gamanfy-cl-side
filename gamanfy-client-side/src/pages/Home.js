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
                        <h1 className='mt-4'>Crea tu cuenta y empieza a<br /> descubrir el mejor talento</h1>
                    </div>
                    <hr className='hr-left' /> <p>En muy pocos pasos tendrás todo listo para comenzar </p> <hr className='hr-right' />

                    <div>
                        <h2>Para empezar, elige tu perfil</h2>
                    </div>
                    <div className='d-lg-flex container-fluid justify-content-center p-0'>
                        <div className='homeContainer-left mx-auto'>
                            <h3>Soy influencer</h3>
                            <p className='homeContainer-text'>Quiero ayudar a mis amigos y conocidos a conseguir trabajo</p>
                            <Link to='/auth/user/signup'><p className='btn-cacc mx-auto'>Crear cuenta de influencer <i className="fas fa-arrow-right"></i></p></Link>


                        </div>

                        <div className=' homeContainer-right mx-auto'>
                            <h3>Soy empresa</h3>
                            <p className='homeContainer-text'>Quiero publicar ofertas de empleo y econtrar al candidato ideal</p>

                           <Link to='/auth-co/company/signup'><p className='btn-cacc mx-auto'>Crear cuenta de empresa   <i className="fas fa-arrow-right"></i></p></Link>
                        </div>
                    </div>


                </section>
            </div>
        )
    }
}
