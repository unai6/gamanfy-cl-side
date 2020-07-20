import React from 'react'
import '../../CSS/CompanyDashboardHomePage.css';

export const UserHomePage = (customProps) => {
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
            <p className='headers-homePage-p mt-5'>MI PERFIL:</p>
            <p className='p-inputs p-homePage-company' >Aquí puedes ver tu información personal y de contacto.</p>
            <p className='headers-homePage-p'>OFERTAS DE EMPLEO:</p>
            <p className='p-inputs p-homePage-company' >Aquí podrás ver todos los procesos de selección abiertos por las empresas y desde dónde podrás recomendar a candidatos.</p>
            <p className='headers-homePage-p'>RECOMENDACIONES:</p>
            <p className='p-inputs p-homePage-company' >Listado de los candidatos que has recomendado a un proceso de selección y en qué estado se encuentra su candidatura.</p>
            <p className='headers-homePage-p '>MIS GANANCIAS:</p>
            <p className='p-inputs p-homePage-company' >Información detallada de cuánto has ganado en Gamanfy (dinero y puntos).</p>
            <p className='headers-homePage-p'>MIS PROCESOS DE SELECCIÓN:</p>
            <p className='p-inputs p-homePage-company' >En este área se muestran todos los procesos que tienes abiertos, cuántos candidatos están inscritos y su información profesional relevante.</p>
            <p className='headers-homePage-p'>GAMANFY ACADEMY:</p>
            <p className='p-inputs p-homePage-company' >En este área puedes consultar los últimos artículos que publicamos para ayudarte a mejorar en tu labor como influencer de Talento y también consejos y tips para tu vida profesional.</p>
            <p className='p-inputs p-homePage-company' >¿Aún tienes alguna duda? Escríbenos a hello@gamanfy.com</p>
            </div>
        </div>
    )
}
