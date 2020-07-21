import React from 'react';
import '../../CSS/CompanyDashboardHomePage.css';


export const HomePage = (customProps) => {        
    return (
        <div>

            <div className='card card-homePage' >
            <h5 style={{ color: '#050D4D', fontWeight: 600,  margin:'.5em 1em 0 1em'}}>Bienvenido/a a tu Dashboard, {customProps.userName}</h5>
            <p className='p-inputs' style={{textAlign:'justify', margin:'3em 1em 1em 1em'}}>Estamos encantados de que formes parte de nuestra plataforma.</p>
            <p className='p-inputs' style={{textAlign:'justify', margin:'0 1em 1em 1em'}}> Para comenzar, <b>Publica una oferta de trabajo</b> o navega por el menú a tu izquierda para descubrir todas las herramientas que tenemos para ofrecerte.</p>
            <p className='p-inputs' style={{textAlign:'justify', margin:'0 1em 1em 1em'}}>Si lo necesitas, puedes leer esta Guía de Uso Ágil para familiarizarte con las distintas áreas de nuestro menú. </p>
            </div>

            <div className='card card-homePage-big' >
            <h5 style={{ color: '#050D4D', fontWeight: 600,  margin:'.5em 1em 0 1em'}}>Cómo sacarle el máximo partido a Gamanfy</h5>
            <p className='headers-homePage-p mt-5'>PUBLICAR OFERTA:</p>
            <p className='p-inputs p-homePage-company' >Este botón permite abrir un proceso de selección para que los posibles candidatos puedan verlo o inscribirse.</p>
            <p className='headers-homePage-p '>RECOMENDAR PROFESIONAL:</p>
            <p className='p-inputs p-homePage-company' >Si conoces a una persona con grandes habilidades y quieres ayudarla a impulsar su carrera, inscríbela en nuestra base de datos y nosotros le recomendaremos ofertas que se ajusten a su perfil.</p>
            <p className='headers-homePage-p'>MIS DATOS:</p>
            <p className='p-inputs p-homePage-company' >Aquí puedes ver tu información personal y de contacto.</p>
            <p className='headers-homePage-p'>MIS OFERTAS DE EMPLEO:</p>
            <p className='p-inputs p-homePage-company' >Listado de ofertas que has publicado, presentadas de forma resumida.</p>
            <p className='headers-homePage-p'>MIS PROCESOS DE SELECCIÓN:</p>
            <p className='p-inputs p-homePage-company' >En este área se muestran todos los procesos que tienes abiertos, cuántos candidatos están inscritos y su información profesional relevante.</p>
            <p className='headers-homePage-p'>EMPLOYER BRANDING:</p>
            <p className='p-inputs p-homePage-company' >Desde aquí puedes solicitar la creación de un microsite de tu empresa para que los posibles candidatos sepan más acerca de ti.</p>
            <p className='p-inputs p-homePage-company' >¿Aún tienes alguna duda? Escríbenos a hello@gamanfy.com</p>
            </div>
        </div>
    )
}


