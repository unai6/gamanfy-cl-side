import React from 'react'
import '../../CSS/CompanyDashboardHomePage.css';

export const UserHomePage = (customProps) => {
    return (
        <div>
            <div className='card card-homePage-user'>
            <h5 style={{ color: '#050D4D', fontWeight: 600,  margin:'.5em 1em 0 1em'}}>Bienvenido/a a tu Dashboard, {customProps.userName}</h5>
            <p className='p-inputs' style={{textAlign:'justify', margin:'3em 1em 1em 1em'}}>Estamos encantados de que formes parte de la comunidad Gamanfy.</p>
            <p className='p-inputs' style={{textAlign:'justify', margin:'0 1em 1em 1em'}}>Gamanfy es la primera solución que te permite recomendar a un profesional para una oferta de trabajo y cobrar por ello.</p>
            <p className='p-inputs' style={{textAlign:'justify', margin:'0 1em 1em 1em'}}><b>¿Estas listo/a para transformarte en un influencer de talento y desafiar el mercado laboral ahora?</b></p>
            <p className='p-inputs' style={{textAlign:'justify', margin:'0 1em 1em 1em'}}> Para comenzar, Para comenzar, <b>investiga las ofertas de trabajo</b> en el menú a tu izquierda y elige las que más correspondan a tu red de contacto o tu sector.</p>
            <p className='p-inputs' style={{textAlign:'justify', margin:'0 1em 1em 1em'}}>Tú conoces mejor que nadie a las personas que te rodean. Busca el encaje perfecto entre la oferta de empleo, la empresa y la persona que vas a recomendar. Igualmente, si no conoces a nadie, también puedes buscarle en la red. ¡Conéctate a Linkedin y empieza a buscar a la persona ideal!</p>
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
            <p className='headers-homePage-p'>GAMANFY ACADEMY:</p>
            <p className='p-inputs p-homePage-company' >En este área puedes consultar los últimos artículos que publicamos para ayudarte a mejorar en tu labor como influencer de Talento y también consejos y tips para tu vida profesional.</p>
            <p className='p-inputs p-homePage-company' >¿Aún tienes alguna duda? Escríbenos a influencers@gamanfy.com</p>
            </div>
        </div>
    )
}
