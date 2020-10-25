import React from 'react'
import '../CSS/homePage.css';

export const PreLogin = () => {
    return (
        <div className='div-wrapper'>
        <img className=' mt-5 gamanfy-logo' src='/LOGO_BLANCO_ALTA_CALIDAD_LARGO.png' alt='pic'/>
        <hr className='hr-preLog'/>
            <div className='d-lg-flex justify-content-center wrapper-sm-prelog'>
                <div className=' homeContainer-left-preLog'>
                    <h3>Iniciar sesión como INFLUENCER</h3>
                    <p className='homeContainer-text text-center'>Recomienda a tus mejores contactos y cobra por ello</p>
                   

                    <p className='p-cacc text-center'><a className='btn-cacc' href='/auth/user/login'>Iniciar Sesión <i className="fas fa-arrow-right"></i></a></p>
                    <p className='p-recPassword text-center'><a href='/user/reset-password-email'>¿Has olvidado tu contraseña ?</a></p>
                </div>
            

                <div className='homeContainer-right-preLog'>
                    <h3>Iniciar sesión como EMPRESA</h3>
                    <p className='homeContainer-text text-center'>Contrata al mejor Talento sin desviarte de tus presupuesto</p>
                    <p className='p-cacc text-center'> <a className='btn-cacc mx-auto' href='/auth-co/company/login'>Iniciar Sesión <i className="fas fa-arrow-right"></i></a></p>
            
                    <p className='p-recPassword text-center'><a href='/company/reset-password-email'>¿Has olvidado tu contraseña ?</a></p>
                    
                </div>
            </div>
        </div>
    )
}
