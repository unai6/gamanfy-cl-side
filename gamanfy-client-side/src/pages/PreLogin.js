import React from 'react'
import '../CSS/homePage.css';

export const PreLogin = () => {
    return (
        <div className='div-wrapper'>
        <img className='d-block mx-auto mt-5' src='/logo_gamanfy_claro.png' alt='pic'/>
        <hr className='hr-preLog'/>
            <div className='d-lg-flex justify-content-center wrapper-sm-prelog'>
                <div className=' homeContainer-left-preLog'>
                    <h3>Iniciar sesión como INFLUENCER</h3>
                    <p className='homeContainer-text'>Recomienda a tus mejores contactos y cobra por ello</p>
                   

                    <p className='p-cacc'><a className='btn-cacc' href='/auth/user/login'>Iniciar Sesión <i className="fas fa-arrow-right"></i></a></p>
                </div>
            

                <div className='homeContainer-right-preLog'>
                    <h3>Iniciar sesión como EMPRESA</h3>
                    <p className='homeContainer-text'>Contrata al mejor Talento sin desviarte de tus presupuesto</p>
                    <p className='p-cacc'> <a className='btn-cacc mx-auto' href='/auth-co/company/login'>Iniciar Sesión <i className="fas fa-arrow-right"></i></a></p>
                </div>
            </div>
        </div>
    )
}
