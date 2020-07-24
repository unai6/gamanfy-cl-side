import React, { useState, useEffect } from 'react';
import '../../CSS/myIncome.css';
import { recommendationsDashboard } from '../../api/recommendations';
import Modal from "react-bootstrap/Modal";

export const MyIncome = (props) => {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [recommendedPeople, setRecommendedPeople] = useState([])

    useEffect(() => {
        const any = async () => {

            recommendationsDashboard(props.match.params.userId).then(apiRes => {
                console.log(apiRes.data.user.recommendedPeople)
                setData(apiRes.data.user);
                setRecommendedPeople(apiRes.data.user.recommendedPeople);


            })
        }
        any()
    }, [props.match.params.userId])

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    const isNotMobile = window.innerWidth > 1100

    return (
        <div>
            <h3 className='rec-h3'>Mis Ganancias</h3>

            <div className={isNotMobile ? 'card mx-auto card-offers recommend-card-big ' : 'card mx-auto card-offers recommend-card'}>
                {
                    data.isCompany && data.companyUser.companyUserPunctuation <= 100 ?
                        <>
                            <hr className='income-hr' />
                            <div className='d-flex justify-content-around inputs-div-income'>
                                <input className='round-btn ball-1-income' type='button' />
                                <input className='round-btn ball-2-income' type='button' />
                                <input className='round-btn ball-3-income' type='button' />
                                <input className='round-btn ball-4-income' type='button' />
                                <input className='round-btn ball-5-income' type='button' />
                            </div>
                            <div className='d-flex justify-content-around div-metals'><p className='p-inputs'>Bronce</p><p className='p-inputs p-input-2-income'>Plata</p><p className='p-inputs p-input-3-income'>Oro</p> <p className='p-inputs p-input-4-income'>Platino</p> <p className='p-inputs p-input-5-income'>Partner</p></div>
                        </>
                        :
                        data.isCompany && (data.companyUser.companyUserPunctuation >= 101) && (data.companyUser.companyUserPunctuation <= 300) ?
                            <>
                                <hr className='income-hr' />
                                <div className='d-flex justify-content-around inputs-div-income'>
                                    <i className="fas fa-check-circle check-circle-income-1"></i>
                                    <input className='round-btn ball-2-income' type='button' />
                                    <input className='round-btn ball-3-income' type='button' />
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
                            </>
                            :
                            data.isCompany && data.companyUser.companyUserPunctuation >= 301 && data.companyUser.companyUserPunctuation <= 500 ?
                                <>
                                    <hr className='income-hr' />
                                    <div className='d-flex justify-content-around inputs-div-income'>
                                        <i className="fas fa-check-circle check-circle-income-1"></i>
                                        <i className="fas fa-check-circle check-circle-income-2 "></i>
                                        <input className='round-btn ball-3-income' type='button' />
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
                                </>
                                :
                                data.isCompany && data.companyUser.companyUserPunctuation >= 501 && data.companyUser.companyUserPunctuation <= 700 ?
                                    <>
                                        <hr className='income-hr' />
                                        <div className='d-flex justify-content-around inputs-div-income'>
                                            <i className="fas fa-check-circle check-circle-income-1"></i>
                                            <i className="fas fa-check-circle check-circle-income-2 "></i>
                                            <i className="fas fa-check-circle check-circle-income-3"></i>
                                            <input className='round-btn ball-5-income' type='button' />
                                            <input className='round-btn ball-5-income' type='button' />
                                        </div>
                                        <div className='d-flex justify-content-around div-metals'>
                                            <p className='p-inputs'>Bronce</p>
                                            <p className='p-inputs p-input-2-income'>Plata</p>
                                            <p className='p-inputs p-input-3-income'>Oro</p>
                                            <p className='p-inputs p-input-4-income'>Platino</p>
                                            <p className='p-inputs p-input-5-income'>Partner</p>
                                        </div>
                                    </>

                                    :
                                    data.isCompany && data.companyUser.companyUserPunctuation >= 701 && data.companyUser.companyUserPunctuation <= 800 ?
                                        <>
                                            <hr className='income-hr' />
                                            <div className='d-flex justify-content-around inputs-div-income'>
                                                <i className="fas fa-check-circle check-circle-income-1"></i>
                                                <i className="fas fa-check-circle check-circle-income-2 "></i>
                                                <i className="fas fa-check-circle check-circle-income-3"></i>
                                                <i className="fas fa-check-circle check-circle-income-4"></i>
                                                <input className='round-btn ball-5-income' type='button' />
                                            </div>
                                            <div className='d-flex justify-content-around div-metals'>
                                                <p className='p-inputs'>Bronce</p>
                                                <p className='p-inputs p-input-2-income'>Plata</p>
                                                <p className='p-inputs p-input-3-income'>Oro</p>
                                                <p className='p-inputs p-input-4-income'>Platino</p>
                                                <p className='p-inputs p-input-5-income'>Partner</p>
                                            </div>
                                        </>
                                        :
                                        data.isCompany && data.companyUser.companyUserPunctuation >= 801 ?
                                            <>
                                                <hr className='income-hr' />
                                                <div className='d-flex justify-content-around inputs-div-income'>
                                                    <i className="fas fa-check-circle check-circle-income-1"></i>
                                                    <i className="fas fa-check-circle check-circle-income-2 "></i>
                                                    <i className="fas fa-check-circle check-circle-income-3"></i>
                                                    <i className="fas fa-check-circle check-circle-income-4"></i>
                                                    <i className="fas fa-check-circle check-circle-income-5"></i>

                                                </div>
                                                <div className='d-flex justify-content-around div-metals'>
                                                    <p className='p-inputs'>Bronce</p>
                                                    <p className='p-inputs p-input-2-income'>Plata</p>
                                                    <p className='p-inputs p-input-3-income'>Oro</p>
                                                    <p className='p-inputs p-input-4-income'>Platino</p>
                                                    <p className='p-inputs p-input-5-income'>Partner</p>
                                                </div>
                                            </>
                                            :
                                            null

                }
                {
                    data.isCompany && isNotMobile ?
                        <div className='d-flex row justify-content-end'>

                            {
                                data.companyUser.companyUserPunctuation <= 100 ?
                                    <div className='row'>
                                        <p className='p-inputs  p-pointstoUp-bronze'> Te faltan <br /> {101 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-silver'> Te faltan <br /> {301 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs  p-pointstoUp-golden'> Te faltan <br /> {501 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs  p-pointstoUp-platinum'> Te faltan <br /> {701 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs  p-pointstoUp-partner'> Te faltan <br /> {801 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                    </div>
                                    :
                                    data.companyUser.companyUserPunctuation >= 101 && data.companyUser.companyUserPunctuation <= 300 ?
                                        <div className='row'>

                                            <p className='p-inputs p-pointstoUp-silver'> Te faltan <br /> {301 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs  p-pointstoUp-golden'> Te faltan <br /> {501 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs  p-pointstoUp-platinum'> Te faltan <br /> {701 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs  p-pointstoUp-partner'> Te faltan <br /> {801 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        </div>
                                        :
                                        data.companyUser.companyUserPunctuation >= 301 && data.companyUser.companyUserPunctuation <= 500 ?
                                            <div className='row'>
                                                <p className='p-inputs  p-pointstoUp-golden'> Te faltan <br /> {501 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                                <p className='p-inputs  p-pointstoUp-platinum'> Te faltan <br /> {701 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                                <p className='p-inputs  p-pointstoUp-partner'> Te faltan <br /> {801 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                            </div>
                                            :
                                            data.companyUser.companyUserPunctuation >= 501 && data.companyUser.companyUserPunctuation <= 700 ?
                                                <div className='row'>
                                                    <p className='p-inputs  p-pointstoUp-platinum'> Te faltan <br /> {701 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                                    <p className='p-inputs  p-pointstoUp-partner'> Te faltan <br /> {801 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                                </div>
                                                :
                                                data.companyUser.companyUserPunctuation >= 701 && data.companyUser.companyUserPunctuation <= 800 ?
                                                    <p className='p-inputs  p-pointstoUp-partner'> Te faltan <br /> {801 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                                    :
                                                    data.companyUser.companyUserPunctuation >= 800 ?
                                                        <i className="fas fa-trophy"></i>
                                                        :
                                                        null
                            }
                        </div>

                        :

                        data.isCompany && !isNotMobile ? <div className='d-flex row justify-content-end'>

                            {
                                data.companyUser.companyUserPunctuation <= 100 ?
                                    <div className='row'>
                                        <p className='p-inputs p-pointstoUp-bronze'> Te faltan <br /> {101 - data.companyUser.companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-silver'> -{301 - data.companyUser.companyUserPunctuation} p.</p>
                                        <p className='p-inputs  p-pointstoUp-golden'> -{501 - data.companyUser.companyUserPunctuation} p.</p>
                                        <p className='p-inputs  p-pointstoUp-platinum'> -{701 - data.companyUser.companyUserPunctuation} p.</p>
                                        <p className='p-inputs  p-pointstoUp-partner'>-{801 - data.companyUser.companyUserPunctuation} p.</p>
                                    </div>
                                    :
                                    data.companyUser.companyUserPunctuation >= 101 && data.companyUser.companyUserPunctuation <= 300 ?
                                        <div className='row'>

                                            <p className='p-inputs p-pointstoUp-silver'> -{301 - data.companyUser.companyUserPunctuation} p.</p>
                                            <p className='p-inputs  p-pointstoUp-golden'> -{501 - data.companyUser.companyUserPunctuation} p.</p>
                                            <p className='p-inputs  p-pointstoUp-platinum'> -{701 - data.companyUser.companyUserPunctuation} p.</p>
                                            <p className='p-inputs  p-pointstoUp-partner'> -{801 - data.companyUser.companyUserPunctuation} p.</p>
                                        </div>
                                        :
                                        data.companyUser.companyUserPunctuation >= 301 && data.companyUser.companyUserPunctuation <= 500 ?
                                            <div className='row'>

                                                <p className='p-inputs  p-pointstoUp-golden'> -{501 - data.companyUser.companyUserPunctuation} p.</p>
                                                <p className='p-inputs  p-pointstoUp-platinum'> -{701 - data.companyUser.companyUserPunctuation} p.</p>
                                                <p className='p-inputs  p-pointstoUp-partner'> -{801 - data.companyUser.companyUserPunctuation} p.</p>
                                            </div>
                                            :
                                            data.companyUser.companyUserPunctuation >= 501 && data.companyUser.companyUserPunctuation <= 700 ?
                                                <div className='row'>

                                                    <p className='p-inputs  p-pointstoUp-platinum'> -{701 - data.companyUser.companyUserPunctuation} p.</p>
                                                    <p className='p-inputs  p-pointstoUp-partner'> -{801 - data.companyUser.companyUserPunctuation} p.</p>
                                                </div>
                                                :
                                                data.companyUser.companyUserPunctuation >= 701 && data.companyUser.companyUserPunctuation <= 800 ?
                                                    <p className='p-inputs  p-pointstoUp-partner'> -{801 - data.companyUser.companyUserPunctuation} p.</p>
                                                    :
                                                    data.companyUser.companyUserPunctuation >= 800 ?
                                                        <i className="fas fa-trophy"></i>
                                                        :
                                                        null
                            }
                        </div>

                            : null
                }

                {
                    data.isCompany ?
                        <div className='d-flex flex-column span-container'>
                            <span className='p-myincome'>Total puntos: {data.companyUser.companyUserPunctuation}</span>
                            {
                                data.companyUser.companyUserPunctuation >= 500 ?
                                    <span className='p-myincome'>Bonus por ser ORO: +500€</span>
                                    :
                                    null

                            }
                            <span className='p-myincome'>Total Obtenido: {data.companyUser.companyUserPunctuation} €</span>
                        </div>
                        :
                        <div className='d-flex flex-column span-container-noCompany'>
                            <span className='p-myincome'>Total puntos: {data.influencerUserPunctuation}</span>

                            {
                                data.influencerUserPunctuation >= 500 ?
                                    <span className='p-myincome'>Bonus por ser ORO: +500€</span>
                                    :
                                    null

                            }
                            <span className='p-myincome'>Total Obtenido: {data.influencerUserPunctuation} €</span>
                        </div>

                }


                {/*  User */}

                {
                    !data.isCompany && data.influencerUserPunctuation <= 100 ?
                        <>
                            <hr className='income-hr-noCompany' />
                            <div className='d-flex justify-content-around inputs-div-income-noCompany'>  <input className='round-btn ball-1-income' type='button' /><input className='round-btn ball-2-income' type='button' /><input className='round-btn ball-3-income' type='button' /> <input className='round-btn ball-4-income' type='button' /> <input className='round-btn ball-5-income' type='button' /></div>
                            <div className='d-flex justify-content-around div-metals-noCompany'><p className='p-inputs'>Bronce</p><p className='p-inputs p-input-2-income'>Plata</p><p className='p-inputs p-input-3-income'>Oro</p> <p className='p-inputs p-input-4-income'>Platino</p> <p className='p-inputs p-input-5-income'>Partner</p></div>
                        </>
                        :
                        !data.isCompany && (data.influencerUserPunctuation >= 101) && (data.influencerUserPunctuation <= 300) ?
                            <>
                                <hr className='income-hr-noCompany' />
                                <div className='d-flex justify-content-around inputs-div-income-noCompany'>
                                    <i className="fas fa-check-circle check-circle-income-1"></i>
                                    <input className='round-btn ball-2-income' type='button' />
                                    <input className='round-btn ball-3-income-noCompany' type='button' />
                                    <input className='round-btn ball-4-income' type='button' />
                                    <input className='round-btn ball-5-income' type='button' />
                                </div>
                                <div className='d-flex justify-content-around div-metals-noCompany'>
                                    <p className='p-inputs'>Bronce</p>
                                    <p className='p-inputs p-input-2-income'>Plata</p>
                                    <p className='p-inputs p-input-3-income'>Oro</p>
                                    <p className='p-inputs p-input-4-income'>Platino</p>
                                    <p className='p-inputs p-input-5-income'>Partner</p>
                                </div>
                            </>
                            :
                            !data.isCompany && data.influencerUserPunctuation >= 301 && data.influencerUserPunctuation <= 500 ?
                                <>
                                    <hr className='income-hr-noCompany' />
                                    <div className='d-flex justify-content-around inputs-div-income-noCompany'>
                                        <i className="fas fa-check-circle check-circle-income-1"></i>
                                        <i className="fas fa-check-circle check-circle-income-2 "></i>
                                        <input className='round-btn ball-3-income-noCompany' type='button' />
                                        <input className='round-btn ball-4-income' type='button' />
                                        <input className='round-btn ball-5-income' type='button' />
                                    </div>

                                    <div className='d-flex justify-content-around div-metals-noCompany'>
                                        <p className='p-inputs'>Bronce</p>
                                        <p className='p-inputs p-input-2-income'>Plata</p>
                                        <p className='p-inputs p-input-3-income'>Oro</p>
                                        <p className='p-inputs p-input-4-income'>Platino</p>
                                        <p className='p-inputs p-input-5-income'>Partner</p>
                                    </div>
                                </>
                                :
                                !data.isCompany && data.influencerUserPunctuation >= 501 && data.influencerUserPunctuation <= 700 ?
                                    <>
                                        <hr className='income-hr-noCompany' />
                                        <div className='d-flex justify-content-around inputs-div-income-noCompany'>
                                            <i className="fas fa-check-circle check-circle-income-1"></i>
                                            <i className="fas fa-check-circle check-circle-income-2 "></i>
                                            <i className="fas fa-check-circle check-circle-income-3"></i>
                                            <input className='round-btn ball-4-income' type='button' />
                                            <input className='round-btn ball-5-income' type='button' />
                                        </div>
                                        <div className='d-flex justify-content-around div-metals-noCompany'>
                                            <p className='p-inputs'>Bronce</p>
                                            <p className='p-inputs p-input-2-income'>Plata</p>
                                            <p className='p-inputs p-input-3-income'>Oro</p>
                                            <p className='p-inputs p-input-4-income'>Platino</p>
                                            <p className='p-inputs p-input-5-income'>Partner</p>
                                        </div>
                                    </>

                                    :
                                    !data.isCompany && data.influencerUserPunctuation >= 701 && data.influencerUserPunctuation <= 800 ?
                                        <>
                                            <hr className='income-hr-noCompany' />
                                            <div className='d-flex justify-content-around inputs-div-income-noCompany'>
                                                <i className="fas fa-check-circle check-circle-income-1"></i>
                                                <i className="fas fa-check-circle check-circle-income-2 "></i>
                                                <i className="fas fa-check-circle check-circle-income-3"></i>
                                                <i className="fas fa-check-circle check-circle-income-4"></i>
                                                <input className='round-btn ball-5-income' type='button' />
                                            </div>
                                            <div className='d-flex justify-content-around div-metals-noCompany'>
                                                <p className='p-inputs'>Bronce</p>
                                                <p className='p-inputs p-input-2-income'>Plata</p>
                                                <p className='p-inputs p-input-3-income'>Oro</p>
                                                <p className='p-inputs p-input-4-income'>Platino</p>
                                                <p className='p-inputs p-input-5-income'>Partner</p>
                                            </div>
                                        </>
                                        :
                                        !data.isCompany && data.influencerUserPunctuation >= 801 ?
                                            <>
                                                <hr className='income-hr-noCompany' />
                                                <div className='d-flex justify-content-around inputs-div-income-noCompany'>
                                                    <i className="fas fa-check-circle check-circle-income-1"></i>
                                                    <i className="fas fa-check-circle check-circle-income-2 "></i>
                                                    <i className="fas fa-check-circle check-circle-income-3"></i>
                                                    <i className="fas fa-check-circle check-circle-income-4"></i>
                                                    <i className="fas fa-check-circle check-circle-income-5"></i>
                                                </div>
                                                <div className='d-flex justify-content-around div-metals-noCompany'>
                                                    <p className='p-inputs'>Bronce</p>
                                                    <p className='p-inputs p-input-2-income'>Plata</p>
                                                    <p className='p-inputs p-input-3-income'>Oro</p>
                                                    <p className='p-inputs p-input-4-income'>Platino</p>
                                                    <p className='p-inputs p-input-5-income'>Partner</p>
                                                </div>
                                            </>
                                            :
                                            null

                }
                {
                    !data.isCompany && isNotMobile ?
                        <div className='d-flex row justify-content-end'>

                            {
                                data.influencerUserPunctuation <= 100 ?
                                    <div className='row points-div-noCompany'>
                                        <p className='p-inputs p-pointstoUp-bronze'> Te faltan <br /> {101 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-silver'> Te faltan <br /> {301 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-golden'> Te faltan <br /> {501 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-platinum'> Te faltan <br /> {701 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-partner'> Te faltan <br /> {801 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                    </div>
                                    :
                                    data.influencerUserPunctuation >= 101 && data.influencerUserPunctuation <= 300 ?
                                        <div className='row points-div-noCompany'>


                                            <p className='p-inputs p-pointstoUp-silver'> Te faltan <br /> {301 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs p-pointstoUp-golden'> Te faltan <br /> {501 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs p-pointstoUp-platinum'> Te faltan <br /> {701 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs p-pointstoUp-partner'> Te faltan <br /> {801 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                        </div>
                                        :
                                        data.influencerUserPunctuation >= 301 && data.influencerUserPunctuation <= 500 ?
                                            <div className='row points-div-noCompany'>

                                                <p className='p-inputs p-pointstoUp-golden'> Te faltan <br /> {501 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                                <p className='p-inputs p-pointstoUp-platinum'> Te faltan <br /> {701 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                                <p className='p-inputs p-pointstoUp-partner'> Te faltan <br /> {801 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                            </div>
                                            :
                                            data.influencerUserPunctuation >= 501 && data.influencerUserPunctuation <= 700 ?
                                                <div className='row points-div-noCompany'>

                                                    <p className='p-inputs p-pointstoUp-platinum'> Te faltan <br /> {701 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>

                                                    <p className='p-inputs p-pointstoUp-partner'> Te faltan <br /> {801 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                                </div>
                                                :
                                                data.influencerUserPunctuation >= 701 && data.influencerUserPunctuation <= 800 ?
                                                    <p className='p-inputs p-pointstoUp-partner'> Te faltan <br /> {801 - data.influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                                    :
                                                    data.influencerUserPunctuation >= 800 ?
                                                        <i className="fas fa-trophy"></i>
                                                        :
                                                        null
                            }
                        </div>


                        :

                        !data.isCompany && !isNotMobile ? <div className='d-flex row justify-content-end div-metals-noCompany'>

                            {
                                data.influencerUserPunctuation <= 100 ?
                                    <div className='row'>


                                        <p className='p-inputs p-pointstoUp-bronze'> -{100 - data.influencerUserPunctuation} p.</p>
                                        <p className='p-input p-pointstoUp-silver'> -{300 - data.influencerUserPunctuation} p.</p>
                                        <p className='p-inputs p-pointstoUp-golden'> -{500 - data.influencerUserPunctuation} p.</p>
                                        <p className='p-inputs p-pointstoUp-platinum'> -{700 - data.influencerUserPunctuation} p.</p>
                                        <p className='p-inputs p-pointstoUp-partner'> -{800 - data.influencerUserPunctuation} p.</p>
                                    </div>
                                    :
                                    data.influencerUserPunctuation >= 101 && data.influencerUserPunctuation <= 300 ?
                                        <div className='row'>


                                            <p className='p-inputs p-pointstoUp-silver'> -{300 - data.influencerUserPunctuation} p.</p>
                                            <p className='p-inputs p-pointstoUp-golden'> -{500 - data.influencerUserPunctuation} p.</p>
                                            <p className='p-inputs p-pointstoUp-platinum'> -{700 - data.influencerUserPunctuation} p.</p>
                                            <p className='p-inputs p-pointstoUp-partner'> -{800 - data.influencerUserPunctuation} p.</p>
                                        </div>
                                        :
                                        data.influencerUserPunctuation >= 301 && data.influencerUserPunctuation <= 500 ?
                                            <div className='row'>

                                                <p className='p-inputs p-pointstoUp-golden'> -{500 - data.influencerUserPunctuation} p.</p>
                                                <p className='p-inputs p-pointstoUp-platinum'> -{700 - data.influencerUserPunctuation} p.</p>
                                                <p className='p-inputs p-pointstoUp-partner'> -{800 - data.influencerUserPunctuation} p.</p>
                                            </div>
                                            :
                                            data.influencerUserPunctuation >= 501 && data.influencerUserPunctuation <= 700 ?
                                                <div className='row'>

                                                    <p className='p-inputs p-pointstoUp-platinum'> -{700 - data.influencerUserPunctuation} p.</p>
                                                    <p className='p-inputs p-pointstoUp-partner'> -{800 - data.influencerUserPunctuation} p.</p>
                                                </div>
                                                :
                                                data.influencerUserPunctuation >= 701 && data.influencerUserPunctuation <= 800 ?
                                                    <p className='p-inputs  p-pointstoUp-partner'> -{800 - data.influencerUserPunctuation} p.</p>
                                                    :
                                                    data.influencerUserPunctuation >= 800 ?
                                                        <i className="fas fa-trophy"></i>
                                                        :
                                                        null
                            }
                        </div>

                            : null
                }
            </div>

            <p className='p-howIncome' onClick={showModal}><u>¿Cómo funcionan Mis Ganancias/Sistema de puntos/recompensas?</u></p>
            <Modal className='recommend-modal' show={isOpen} onHide={hideModal}>
                <Modal.Body scrollable='true'>
                    <div className='card card-system mx-auto'>
                        <h5 style={{ color: '#050D4D', fontWeight: 600, marginTop: '1em', textAlign: 'center' }}>Así funciona el sistema de puntos Gamanfy</h5>

                        <p className='p-inputs mt-4 mr-3 ml-3 mt-5 p-expl-system'>
                            Cada vez que recomiendes a un candidato y este sea contratado por una empresa, recibirás a cambio una recompensa económica y una recompensa en forma de puntuación para el sistema de ránking de Gamanfy.
                        </p>
                        <p className='p-inputs mr-3 ml-3 p-expl-system'>
                            Hay varios niveles de puntuación, y cada uno aumenta la cuantía económica que recibirás con tus recomendaciones. Es decir que cuantas más personas recomiendes y sean contratadas, más puntuación y dinero recibirás a cambio.
                        </p>
                        <p className='p-inputs mr-3 ml-3 p-expl-system'>
                            Esta es la relación de niveles, puntos y recompensa económica:
                        </p>
                        <div className="divTable">
                            <div className="divTableBody">
                                <div className="divTableRow">
                                    <div className="divTableCell tableHeadings">NIVEL</div>
                                    <div className="divTableCell tableHeadings">RECOMPENSA(€)</div>
                                    <div className="divTableCell tableHeadings">PUNTOS NECESARIOS</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">BRONCE</div>
                                    <div className="divTableCell">100€</div>
                                    <div className="divTableCell">100 puntos</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">PLATA</div>
                                    <div className="divTableCell">300€</div>
                                    <div className="divTableCell">300 puntos</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">ORO</div>
                                    <div className="divTableCell">500€</div>
                                    <div className="divTableCell">500 puntos</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">PLATINO</div>
                                    <div className="divTableCell">700€</div>
                                    <div className="divTableCell">700 puntos</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell">PARTNER</div>
                                    <div className="divTableCell">800€</div>
                                    <div className="divTableCell">800 puntos</div>
                                </div>
                            </div>
                        </div>
                        <button className='modal-offer-btn d-block mx-auto mb-2' onClick={hideModal}>ENTENDIDO!</button>
                    </div>

                </Modal.Body>
            </Modal>

            {
                recommendedPeople.map((doc, index) => {
                    let month = doc.createdAt.substring(6, 7)
                    let year = doc.createdAt.substring(0, 4)

                    switch (month) {
                        case '1':
                            month = 'Enero'
                            break;
                        case '2':
                            month = 'Febrero'
                            break;
                        case '3':
                            month = 'Marzo'
                            break;
                        case '4':
                            month = 'Abril'
                            break;
                        case '5':
                            month = 'Mayo'
                            break;
                        case '6':
                            month = 'Junio'
                            break;
                        case '7':
                            month = 'Julio'
                            break;
                        case '8':
                            month = 'Agosto'
                            break;
                        case '9':
                            month = 'Septiembre'
                            break;
                        case '10':
                            month = 'Octubre'
                            break;
                        case '11':
                            month = 'Noviembre'
                            break;
                        case '12':
                            month = 'Diciembre'
                            break;
                        default: console.log('fecha')
                    }
                    return (

                        <div className='card card-process px-0 d-lg-flex row mb-3' key={index}>
                            <div className='parent-div'>
                                <span className='list-income-period'>Periodo</span>
                                <span className='list-income-short'>Recomendado</span>
                                <span className='list-income-short'>Empresa</span>
                                <span className='list-income-aside'>Ganancias</span>

                            </div>
                            <div className='parent-div'>

                                <span className='list-income-period-data'><span className='inner-span'>{month} {year}</span></span>
                                <span className='list-income-short-data'><span className='inner-span'>{doc.recommendedFirstName}</span></span>
                                <span className='list-income-short-data'><span className='inner-span'>{doc.offerId.companyData.companyId.companyName}</span></span>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}





