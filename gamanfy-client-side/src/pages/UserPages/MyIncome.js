import React, { useState, useEffect } from 'react';
import '../../CSS/myIncome.css';
import { getUserData } from '../../api/users';

export const MyIncome = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const any = async () => {

            getUserData(props.match.params.userId).then(apiRes => {
                setData(apiRes.data);
                console.log(apiRes.data)
            })
        }
        any()
    }, [props.match.params.userId])

  
    const isNotMobile = window.innerWidth > 1100
    
    return (
        <div>
            <h3 className='rec-h3'>Mis Ganancias</h3>

            <div className= {isNotMobile ? 'card mx-auto card-offers recommend-card-big ' : 'card mx-auto card-offers recommend-card'}>
                {
                    data.isCompany && data.companyUser.companyUserPunctuation < 100 ?
                        <>
                            <hr className='income-hr' />
                            <div className='d-flex justify-content-around inputs-div-income'>  <input className='round-btn ball-1-income' type='button' /><input className='round-btn ball-2-income' type='button' /><input className='round-btn ball-3-income' type='button' /> <input className='round-btn ball-4-income' type='button' /> <input className='round-btn ball-5-income' type='button' /></div>
                            <div className='d-flex justify-content-around div-metals'><p className='p-inputs'>Bronce</p><p className='p-inputs p-input-2-income'>Plata</p><p className='p-inputs p-input-3-income'>Oro</p> <p className='p-inputs p-input-4-income'>Platino</p> <p className='p-inputs p-input-5-income'>Partner</p></div>
                        </>
                        :
                        data.isCompany && (data.companyUser.companyUserPunctuation >= 100) && (data.companyUser.companyUserPunctuation < 300) ?
                            <>
                                <hr className='income-hr' />
                                <div className='d-flex justify-content-around inputs-div-income'>  <input className='round-btn ball-1-income' type='button' /><input className='round-btn ball-2-income' type='button' /><input className='round-btn ball-3-income' type='button' /> <input className='round-btn ball-4-income' type='button' /> <input className='round-btn ball-5-income' type='button' /></div>
                                <div className='d-flex justify-content-around div-metals'><p className='p-inputs'>Bronce</p><p className='p-inputs p-input-2-income'>Plata</p><p className='p-inputs p-input-3-income'>Oro</p> <p className='p-inputs p-input-4-income'>Platino</p> <p className='p-inputs p-input-5-income'>Partner</p></div>
                            </>
                            :
                            data.isCompany && data.companyUser.companyUserPunctuation >= 300 && data.companyUser.companyUserPunctuation < 500 ?
                                <>
                                    <hr className='income-hr' />
                                    <div className='d-flex justify-content-around inputs-div-income'>  <input className='round-btn ball-1-income' type='button' /><input className='round-btn ball-2-income' type='button' /><input className='round-btn ball-3-income' type='button' /> <input className='round-btn ball-4-income' type='button' /> <input className='round-btn ball-5-income' type='button' /></div>
                                    <div className='d-flex justify-content-around div-metals'>
                                        <p className='p-inputs'>Bronce</p>
                                        <p className='p-inputs p-input-2-income'>Plata</p>
                                        <p className='p-inputs p-input-3-income'>Oro</p>
                                       
                                        <p className='p-inputs p-input-4-income'>Platino</p>
                                        <p className='p-inputs p-input-5-income'>Partner</p>
                                    </div>
                                </>
                                :
                                data.isCompany && data.companyUser.companyUserPunctuation >= 500 && data.companyUser.companyUserPunctuation < 700 ?
                                    <>
                                        <hr className='income-hr' />
                                        <div className='d-flex justify-content-around inputs-div-income'> 
                                        <i className="fas fa-check-circle check-circle-income-1"></i> 
                                        <i className="fas fa-check-circle check-circle-income-2 "></i> 
                                        <i className="fas fa-check-circle check-circle-income-3"></i> 
                                         <input className='round-btn ball-4-income' type='button' /> 
                                         <input className='round-btn ball-5-income' type='button' />
                                        </div>
                                        <div className='d-flex justify-content-around div-metals'>
                                            <p className='p-inputs'>Bronce</p>
                                            <p className='p-inputs p-input-2-income'>Plata</p>
                                            <p className='p-inputs p-input-3-income'>Oro</p>
                                            <p className='p-inputs p-input-4-income'>Platino</p>
                                            <p className='p-inputs p-input-5-income'>Partner</p>
                                        </div>
                                        {
                                            isNotMobile ?
                                        <div className='d-flex row justify-content-end'>
                                            <p className='p-inputs p-pointstoUp-platinum'> Te faltan <br/>{700 - data.companyUser.companyUserPunctuation } puntos <br/> para este nivel.</p>
                                            <p className='p-inputs  p-pointstoUp-partner'> Te faltan <br/> {800 - data.companyUser.companyUserPunctuation } puntos <br/> para este nivel.</p>
                                        </div>
                                        :
                                        <div className='d-flex row justify-content-end'>
                                            <p className='p-inputs p-pointstoUp-platinum'> -{700 - data.companyUser.companyUserPunctuation } p.</p>
                                            <p className='p-inputs  p-pointstoUp-partner'> -{800 - data.companyUser.companyUserPunctuation } p.</p>
                                        </div>

                                        }
                                    </>
                                    :
                                    data.isCompany && data.companyUser.companyUserPunctuation > 799 ?
                                        <>
                                            <hr className='income-hr' />
                                            <div className='d-flex justify-content-around inputs-div-income'>  <input className='round-btn ball-1-income' type='button' /><input className='round-btn ball-2-income' type='button' /><input className='round-btn ball-3-income' type='button' /> <input className='round-btn ball-4-income' type='button' /> <input className='round-btn ball-5-income' type='button' /></div>
                                            <div className='d-flex justify-content-around div-metals'>
                                                <p className='p-inputs'>Bronce</p>
                                                <p className='p-inputs p-input-2-income'>Plata</p>
                                                <p className='p-inputs p-input-3-income'>Oro</p>
                                                <p className='p-inputs p-input-4-income'>Platino</p>
                                                <p className='p-inputs p-input-5-income'>Partner</p>
                                            </div>
                                        </>
                                        :
                                        <h4>No tiene puntuación</h4>
                }

                {
                    data.isCompany ?
                        <div className='d-flex flex-column span-container'>
                            <span className='p-myincome'>Total puntos: {data.companyUser.companyUserPunctuation}</span>
                            <span className='p-myincome'>Total Obtenido: {data.companyUser.companyUserPunctuation} €</span>
                        </div>
                        :
                        <div>
                            <span >Total puntos: {data.influencerUserPunctuation}</span>
                            <span >Total Obtenido: {data.influencerUserPunctuation} €</span>
                        </div>

                }
            </div>
        </div>
    )
}





