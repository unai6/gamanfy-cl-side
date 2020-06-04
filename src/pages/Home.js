
import React, { Component } from 'react'
import Navbar from './Navbar';
import '../CSS/homePage.css';


export default class Home extends Component {

    render() {
        return (
            <div className='home-container'>
                <Navbar />
                <section>
                    <div>
                        <h1 className='mt-4'>Crea tu cuenta y empieza a<br /> descubrir el mejor talento</h1>
                    </div>
                    <hr className='hr-left' /> <p>En muy pocos pasos tendrás todo listo para comenzar </p> <hr className='hr-right' />

                    <div>
                        <h2>Para empezar, elige tu perfil</h2>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='mr-5 homeContainer'>
                            <h3>Soy influencer</h3>
                            <p className='homeContainer-text'>Quiero ayudar a mis amigos y conocidos a conseguir trabajo</p>
                            <p className='p-cacc'><a className='btn-cacc' href='/auth/user/signup'>Crear cuenta de influencer   <i className="fas fa-arrow-right"></i></a></p>
                        </div>

                        <div className=' ml-5 homeContainer'>
                            <h3>Soy empresa</h3>
                            <p className='homeContainer-text'>Quiero publicar ofertas de empleo y econtrar al candidato ideal</p>

                            <p className='p-cacc'> <a className='btn-cacc mx-auto' href='/auth-co/company/signup'>Crear cuenta de empresa   <i className="fas fa-arrow-right"></i></a></p>
                        </div>
                    </div>


                </section>
            </div>
        )
    }
}
