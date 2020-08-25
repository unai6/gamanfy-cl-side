import React, { useState, useEffect } from 'react';
import '../../CSS/myIncome.css';
import { recommendationsDashboard } from '../../api/recommendations';
import Modal from "react-bootstrap/Modal";

export const MyIncome = (props) => {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [recommendedPeople, setRecommendedPeople] = useState([])
    const [companyUserPunctuation, setCompanyUserPunctuation] = useState(0);
    const [influencerUserPunctuation, setInfluencerUserPunctuation] = useState(0)

    useEffect(() => {
        const any = async () => {

            recommendationsDashboard(props.match.params.userId).then(apiRes => {
                console.log(apiRes.data.user)
                setCompanyUserPunctuation(apiRes.data.user.isCompany === true ? apiRes.data.user.companyUser.companyUserPunctuation : null)
                setData(apiRes.data.user);
                setRecommendedPeople(apiRes.data.user.recommendedPeople);
                setInfluencerUserPunctuation(apiRes.data.user.isCompany === false ? apiRes.data.user.influencerUserPunctuation : null)
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
    let isHired = data.recommendedPeople ? data.recommendedPeople.map(rec => rec.hired) : null
    let filteredHired = isHired ? isHired.filter(rec => rec === true) : null;
    let totalMoney;

    if (influencerUserPunctuation > 0 && influencerUserPunctuation <= 199 && isHired !== null) {
        totalMoney = filteredHired.length * 100
    } else if (influencerUserPunctuation >= 200 && influencerUserPunctuation <= 299 && isHired !== null) {
        totalMoney = filteredHired.length * 200
    } else if (influencerUserPunctuation >= 300 && influencerUserPunctuation <= 399 && isHired !== null) {
        totalMoney = filteredHired.length * 300
    } else if (influencerUserPunctuation >= 400 && influencerUserPunctuation <= 499 && isHired !== null) {
        totalMoney = filteredHired.length * 400
    } else if ((influencerUserPunctuation >= 500 && influencerUserPunctuation <= 599 && isHired !== null) || (companyUserPunctuation >= 500 && companyUserPunctuation <= 599 && isHired !== null)) {
        totalMoney = filteredHired.length * 500
    } else if ((influencerUserPunctuation >= 600 && influencerUserPunctuation <= 699 && isHired !== null) || (companyUserPunctuation >= 600 && companyUserPunctuation <= 699 && isHired !== null)) {
        totalMoney = filteredHired.length * 600
    } else if ((influencerUserPunctuation >= 700 && influencerUserPunctuation <= 799 && isHired !== null) || (companyUserPunctuation >= 700 && companyUserPunctuation <= 799 && isHired !== null)) {
        totalMoney = filteredHired.length * 700
    } else if ((influencerUserPunctuation >= 800 && isHired !== null) || (companyUserPunctuation >= 800 && isHired !== null)) {
        totalMoney = filteredHired.length * 800
    }


    return (
        <div>
            <h3 className='myInc-h3'>Mis Ganancias</h3>

            <div className={isNotMobile ? 'card mx-auto card-offers recommend-card-big ' : 'card mx-auto card-offers recommend-card'}>
                {
                    data.isCompany && companyUserPunctuation <= 99
                        ?
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
                        data.isCompany && (companyUserPunctuation >= 100) && (companyUserPunctuation <= 299) ?
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
                            data.isCompany && companyUserPunctuation >= 300 && companyUserPunctuation <= 499 ?
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
                                data.isCompany && companyUserPunctuation >= 500 && companyUserPunctuation <= 699 ?
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
                                    data.isCompany && companyUserPunctuation >= 700 && companyUserPunctuation <= 799 ?
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
                                        data.isCompany && companyUserPunctuation >= 800 ?
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
                                companyUserPunctuation <= 99 ?
                                    <div className='row'>
                                        <p className='p-inputs  p-pointstoUp-bronze'> Te faltan <br /> {100 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-silver'> Te faltan <br /> {300 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs  p-pointstoUp-golden'> Te faltan <br /> {500 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs  p-pointstoUp-platinum'> Te faltan <br /> {700 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs  p-pointstoUp-partner'> Te faltan <br /> {800 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                    </div>
                                    :
                                    companyUserPunctuation >= 100 && companyUserPunctuation <= 299 ?
                                        <div className='row'>

                                            <p className='p-inputs p-pointstoUp-silver'> Te faltan <br /> {300 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs  p-pointstoUp-golden'> Te faltan <br /> {500 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs  p-pointstoUp-platinum'> Te faltan <br /> {700 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs  p-pointstoUp-partner'> Te faltan <br /> {800 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        </div>
                                        :
                                        companyUserPunctuation >= 300 && companyUserPunctuation <= 499 ?
                                            <div className='row'>
                                                <p className='p-inputs  p-pointstoUp-golden'> Te faltan <br /> {501 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                                <p className='p-inputs  p-pointstoUp-platinum'> Te faltan <br /> {701 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                                <p className='p-inputs  p-pointstoUp-partner'> Te faltan <br /> {801 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                            </div>
                                            :
                                            companyUserPunctuation >= 500 && companyUserPunctuation <= 699 ?
                                                <div className='row'>
                                                    <p className='p-inputs  p-pointstoUp-platinum'> Te faltan <br /> {700 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                                    <p className='p-inputs  p-pointstoUp-partner'> Te faltan <br /> {800 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                                </div>
                                                :
                                                companyUserPunctuation >= 700 && companyUserPunctuation <= 799 ?
                                                    <p className='p-inputs  p-pointstoUp-partner'> Te faltan <br /> {800 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                                    :
                                                    companyUserPunctuation >= 800 ?
                                                        <i className="fas fa-trophy"></i>
                                                        :
                                                        null
                            }
                        </div>

                        :

                        data.isCompany && !isNotMobile ? <div className='d-flex row justify-content-end'>

                            {
                                companyUserPunctuation <= 99 ?
                                    <div className='row'>
                                        <p className='p-inputs p-pointstoUp-bronze'> Te faltan <br /> {100 - companyUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-silver'> -{300 - companyUserPunctuation} p.</p>
                                        <p className='p-inputs  p-pointstoUp-golden'> -{500 - companyUserPunctuation} p.</p>
                                        <p className='p-inputs  p-pointstoUp-platinum'> -{700 - companyUserPunctuation} p.</p>
                                        <p className='p-inputs  p-pointstoUp-partner'>-{800 - companyUserPunctuation} p.</p>
                                    </div>
                                    :
                                    companyUserPunctuation >= 100 && companyUserPunctuation <= 299 ?
                                        <div className='row'>

                                            <p className='p-inputs p-pointstoUp-silver'> -{300 - companyUserPunctuation} p.</p>
                                            <p className='p-inputs  p-pointstoUp-golden'> -{500 - companyUserPunctuation} p.</p>
                                            <p className='p-inputs  p-pointstoUp-platinum'> -{700 - companyUserPunctuation} p.</p>
                                            <p className='p-inputs  p-pointstoUp-partner'> -{800 - companyUserPunctuation} p.</p>
                                        </div>
                                        :
                                        companyUserPunctuation >= 300 && companyUserPunctuation <= 499 ?
                                            <div className='row'>

                                                <p className='p-inputs  p-pointstoUp-golden'> -{500 - companyUserPunctuation} p.</p>
                                                <p className='p-inputs  p-pointstoUp-platinum'> -{700 - companyUserPunctuation} p.</p>
                                                <p className='p-inputs  p-pointstoUp-partner'> -{800 - companyUserPunctuation} p.</p>
                                            </div>
                                            :
                                            companyUserPunctuation >= 500 && companyUserPunctuation <= 699 ?
                                                <div className='row'>

                                                    <p className='p-inputs  p-pointstoUp-platinum'> -{700 - companyUserPunctuation} p.</p>
                                                    <p className='p-inputs  p-pointstoUp-partner'> -{800 - companyUserPunctuation} p.</p>
                                                </div>
                                                :
                                                companyUserPunctuation >= 700 && companyUserPunctuation <= 799 ?
                                                    <p className='p-inputs  p-pointstoUp-partner'> -{800 - companyUserPunctuation} p.</p>
                                                    :
                                                    companyUserPunctuation >= 800 ?
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
                            <span className='p-myincome'>Total puntos: {companyUserPunctuation}</span>
                            {
                                companyUserPunctuation > 0 && companyUserPunctuation <= 199 ?

                                    <span className='p-myincome'>Bonus por ser BRONCE: +100€</span>
                                    :
                                    companyUserPunctuation >= 200 && companyUserPunctuation <= 299 ?
                                        <span className='p-myincome'>Bonus por ser BRONCE+: +200€</span>
                                        :
                                        companyUserPunctuation >= 300 && companyUserPunctuation <= 399 ?
                                            <span className='p-myincome'>Bonus por ser PLATA: +300€</span>
                                            :
                                            companyUserPunctuation >= 400 && companyUserPunctuation <= 499 ?
                                                <span className='p-myincome'>Bonus por ser PLATA+: +400€</span>
                                                :
                                                companyUserPunctuation >= 500 && companyUserPunctuation <= 599 ?
                                                    <span className='p-myincome'>Bonus por ser ORO: +500€</span>
                                                    :
                                                    companyUserPunctuation >= 600 && companyUserPunctuation <= 699 ?
                                                        <span className='p-myincome'>Bonus por ser ORO+: +600€</span>
                                                        :
                                                        companyUserPunctuation >= 700 && companyUserPunctuation <= 799 ?
                                                            <span className='p-myincome'>Bonus por ser PLATINO: +700€</span>
                                                            :
                                                            companyUserPunctuation > 800 ?
                                                                <span className='p-myincome'>Bonus por ser PARTNER: +800€</span>
                                                                :
                                                                null
                            }
                            {
                                companyUserPunctuation >= 500 && companyUserPunctuation <= 599 ?
                                    <span className='p-myincome'>Total Obtenido: {totalMoney} €</span>
                                    :
                                    companyUserPunctuation >= 600 && companyUserPunctuation <= 699 ?
                                        <span className='p-myincome'>Total Obtenido:{totalMoney} €</span>
                                        :
                                        companyUserPunctuation >= 700 && companyUserPunctuation <= 799 ?
                                            <span className='p-myincome'>Total Obtenido: {totalMoney} €</span>
                                            :
                                            companyUserPunctuation > 800 ?
                                                <span className='p-myincome'>Total Obtenido: {totalMoney} €</span>
                                                :
                                                null
                            }

                        </div>
                        :
                        <div className='d-flex flex-column span-container-noCompany'>
                            <span className='p-myincome'>Total puntos: {influencerUserPunctuation}</span>

                            {
                                influencerUserPunctuation > 0 && influencerUserPunctuation <= 199 ?

                                    <span className='p-myincome'>Bonus por ser BRONCE: +100€</span>
                                    :
                                    influencerUserPunctuation >= 200 && influencerUserPunctuation <= 299 ?
                                        <span className='p-myincome'>Bonus por ser BRONCE+: +200€</span>
                                        :
                                        influencerUserPunctuation >= 300 && influencerUserPunctuation <= 399 ?
                                            <span className='p-myincome'>Bonus por ser PLATA: +300€</span>
                                            :
                                            influencerUserPunctuation >= 400 && influencerUserPunctuation <= 499 ?
                                                <span className='p-myincome'>Bonus por ser PLATA+: +400€</span>
                                                :
                                                influencerUserPunctuation >= 500 && influencerUserPunctuation <= 599 ?
                                                    <span className='p-myincome'>Bonus por ser ORO: +500€</span>
                                                    :
                                                    influencerUserPunctuation >= 600 && influencerUserPunctuation <= 699 ?
                                                        <span className='p-myincome'>Bonus por ser ORO+: +600</span>
                                                        :
                                                        influencerUserPunctuation >= 700 && influencerUserPunctuation <= 799 ?
                                                            <span className='p-myincome'>Bonus por ser PLATINO: +700€</span>
                                                            :
                                                            influencerUserPunctuation > 800 ?
                                                                <span className='p-myincome'>Bonus por ser PARTNER: +800€</span>
                                                                :
                                                                <span className='p-myincome'>Total Obtenido: 0 €</span>
                            }
                            {
                                influencerUserPunctuation > 0 && influencerUserPunctuation <= 199 ?

                                    <span className='p-myincome'>Total Obtenido: {totalMoney} €</span>
                                    :
                                    influencerUserPunctuation >= 200 && influencerUserPunctuation <= 299 ?
                                        <span className='p-myincome'>Total Obtenido: {totalMoney} €</span>
                                        :
                                        influencerUserPunctuation >= 300 && influencerUserPunctuation <= 399 ?
                                            <span className='p-myincome'>Total Obtenido: {totalMoney} €</span>
                                            :
                                            influencerUserPunctuation >= 400 && influencerUserPunctuation <= 499 ?
                                                <span className='p-myincome'>Total Obtenido: {totalMoney} €</span>
                                                :
                                                influencerUserPunctuation >= 500 && influencerUserPunctuation <= 599 ?
                                                    <span className='p-myincome'>Total Obtenido: {totalMoney} €</span>
                                                    :
                                                    influencerUserPunctuation >= 600 && influencerUserPunctuation <= 699 ?
                                                        <span className='p-myincome'>Total Obtenido: {totalMoney} €</span>
                                                        :
                                                        influencerUserPunctuation >= 700 && influencerUserPunctuation <= 799 ?
                                                            <span className='p-myincome'>Total Obtenido: {totalMoney} €</span>
                                                            :
                                                            influencerUserPunctuation > 800 ?
                                                                <span className='p-myincome'>Total Obtenido: {totalMoney} €</span>
                                                                :
                                                                <span className='p-myincome'>Total Obtenido: 0 €</span>
                            }

                        </div>

                }


                {/*  User */}

                {
                    !data.isCompany && influencerUserPunctuation <= 99 ?
                        <>
                            <hr className='income-hr-noCompany' />
                            <div className='d-flex justify-content-around inputs-div-income-noCompany'>  <input className='round-btn ball-1-income' type='button' /><input className='round-btn ball-2-income' type='button' /><input className='round-btn ball-3-income' type='button' /> <input className='round-btn ball-4-income' type='button' /> <input className='round-btn ball-5-income' type='button' /></div>
                            <div className='d-flex justify-content-around div-metals-noCompany'><p className='p-inputs'>Bronce</p><p className='p-inputs p-input-2-income'>Plata</p><p className='p-inputs p-input-3-income'>Oro</p> <p className='p-inputs p-input-4-income'>Platino</p> <p className='p-inputs p-input-5-income'>Partner</p></div>
                        </>
                        :
                        !data.isCompany && (influencerUserPunctuation >= 100) && (influencerUserPunctuation <= 299) ?
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
                            !data.isCompany && influencerUserPunctuation >= 300 && influencerUserPunctuation <= 499 ?
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
                                !data.isCompany && influencerUserPunctuation >= 500 && influencerUserPunctuation <= 599 ?
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
                                    !data.isCompany && influencerUserPunctuation >= 700 && influencerUserPunctuation <= 799 ?
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
                                        !data.isCompany && influencerUserPunctuation >= 800 ?
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
                                influencerUserPunctuation <= 100 ?
                                    <div className='row points-div-noCompany'>
                                        <p className='p-inputs p-pointstoUp-bronze'> Te faltan <br /> {100 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-silver'> Te faltan <br /> {300 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-golden'> Te faltan <br /> {500 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-platinum'> Te faltan <br /> {700 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                        <p className='p-inputs p-pointstoUp-partner'> Te faltan <br /> {800 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                    </div>
                                    :
                                    influencerUserPunctuation >= 100 && influencerUserPunctuation <= 300 ?
                                        <div className='row points-div-noCompany'>


                                            <p className='p-inputs p-pointstoUp-silver'> Te faltan <br /> {300 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs p-pointstoUp-golden'> Te faltan <br /> {500 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs p-pointstoUp-platinum'> Te faltan <br /> {700 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                            <p className='p-inputs p-pointstoUp-partner'> Te faltan <br /> {800 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                        </div>
                                        :
                                        influencerUserPunctuation >= 300 && influencerUserPunctuation <= 499 ?
                                            <div className='row points-div-noCompany'>

                                                <p className='p-inputs p-pointstoUp-golden'> Te faltan <br /> {500 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                                <p className='p-inputs p-pointstoUp-platinum'> Te faltan <br /> {700 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                                <p className='p-inputs p-pointstoUp-partner'> Te faltan <br /> {800 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                            </div>
                                            :
                                            influencerUserPunctuation >= 500 && influencerUserPunctuation <= 699 ?
                                                <div className='row points-div-noCompany'>

                                                    <p className='p-inputs p-pointstoUp-platinum'> Te faltan <br /> {700 - influencerUserPunctuation} puntos <br /> para este nivel.</p>

                                                    <p className='p-inputs p-pointstoUp-partner'> Te faltan <br /> {800 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                                </div>
                                                :
                                                influencerUserPunctuation >= 700 && influencerUserPunctuation <= 799 ?
                                                    <p className='p-inputs p-pointstoUp-partner'> Te faltan <br /> {800 - influencerUserPunctuation} puntos <br /> para este nivel.</p>
                                                    :
                                                    influencerUserPunctuation >= 800 ?
                                                        <i className="fas fa-trophy"></i>
                                                        :
                                                        null
                            }
                        </div>


                        :

                        !data.isCompany && !isNotMobile ? <div className='d-flex row justify-content-end div-metals-noCompany'>

                            {
                                influencerUserPunctuation <= 99 ?
                                    <div className='row'>


                                        <p className='p-inputs p-pointstoUp-bronze'> -{100 - influencerUserPunctuation} p.</p>
                                        <p className='p-input p-pointstoUp-silver'> -{300 - influencerUserPunctuation} p.</p>
                                        <p className='p-inputs p-pointstoUp-golden'> -{500 - influencerUserPunctuation} p.</p>
                                        <p className='p-inputs p-pointstoUp-platinum'> -{700 - influencerUserPunctuation} p.</p>
                                        <p className='p-inputs p-pointstoUp-partner'> -{800 - influencerUserPunctuation} p.</p>
                                    </div>
                                    :
                                    influencerUserPunctuation >= 100 && influencerUserPunctuation <= 299 ?
                                        <div className='row'>


                                            <p className='p-inputs p-pointstoUp-silver'> -{300 - influencerUserPunctuation} p.</p>
                                            <p className='p-inputs p-pointstoUp-golden'> -{500 - influencerUserPunctuation} p.</p>
                                            <p className='p-inputs p-pointstoUp-platinum'> -{700 - influencerUserPunctuation} p.</p>
                                            <p className='p-inputs p-pointstoUp-partner'> -{800 - influencerUserPunctuation} p.</p>
                                        </div>
                                        :
                                        influencerUserPunctuation >= 300 && influencerUserPunctuation <= 499 ?
                                            <div className='row'>

                                                <p className='p-inputs p-pointstoUp-golden'> -{500 - influencerUserPunctuation} p.</p>
                                                <p className='p-inputs p-pointstoUp-platinum'> -{700 - influencerUserPunctuation} p.</p>
                                                <p className='p-inputs p-pointstoUp-partner'> -{800 - influencerUserPunctuation} p.</p>
                                            </div>
                                            :
                                            influencerUserPunctuation >= 500 && influencerUserPunctuation <= 699 ?
                                                <div className='row'>

                                                    <p className='p-inputs p-pointstoUp-platinum'> -{700 - influencerUserPunctuation} p.</p>
                                                    <p className='p-inputs p-pointstoUp-partner'> -{800 - influencerUserPunctuation} p.</p>
                                                </div>
                                                :
                                                influencerUserPunctuation >= 700 && influencerUserPunctuation <= 799 ?
                                                    <p className='p-inputs  p-pointstoUp-partner'> -{800 - influencerUserPunctuation} p.</p>
                                                    :
                                                    influencerUserPunctuation >= 800 ?
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

                        <p className='p-inputs mt-4 mr-3 ml-3 mt-4 text-justify p-expl-system'>
                            Cada vez que recomiendes a un candidato y este sea contratado por una empresa, recibirás a cambio una recompensa económica y una recompensa en forma de puntuación para el sistema de ránking de Gamanfy.
                        </p>

                        <p className='p-inputs mt-4 mr-3 ml-3 mt-4 text-justify p-expl-system'>
                            Si el candidato que has recomendado finalmente no ha sido contratado, no te preocupes porque si ha estado cerca de serlo tú acumularás 5 puntos , por lo que cuanto mayor sea el número de recomendaciones de calidad, mayor será el número de puntos que acumules.
                        </p>

                        <p className='p-inputs mt-4 mr-3 ml-3 mt-4 text-justify p-expl-system'>
                            Sin embargo, si el perfil que has recomendado no corresponde a lo que pide la oferta de trabajo, perderás el mismo numero de puntos, es decir 5 puntos.
                        </p>

                        <p className='p-inputs mr-3 ml-3 text-justify p-expl-system'>
                            Hay varios niveles de puntuación, y cada uno aumenta la cuantía económica que recibirás con tus recomendaciones. Es decir que cuantas más personas recomiendes y sean contratadas, más puntuación y dinero recibirás a cambio.
                        </p>
                        <p className='p-inputs mr-3 ml-3 text-justify p-expl-system'>
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
                                    <div className="divTableCell text-left">BRONCE</div>
                                    <div className="divTableCell">100€</div>
                                    <div className="divTableCell">100 puntos</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell text-left">BRONCE+</div>
                                    <div className="divTableCell">200€</div>
                                    <div className="divTableCell">200 puntos</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell text-left">PLATA</div>
                                    <div className="divTableCell">300€</div>
                                    <div className="divTableCell">300 puntos</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell text-left">PLATA+</div>
                                    <div className="divTableCell">400€</div>
                                    <div className="divTableCell">400 puntos</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell text-left">ORO</div>
                                    <div className="divTableCell">500€</div>
                                    <div className="divTableCell">500 puntos</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell text-left">ORO+</div>
                                    <div className="divTableCell">600€</div>
                                    <div className="divTableCell">600 puntos</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell text-left">PLATINO</div>
                                    <div className="divTableCell">700€</div>
                                    <div className="divTableCell">700 puntos</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell text-left">PARTNER</div>
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

                        <div className='card card-process-rec mb-3' key={index}>

                            {
                                isNotMobile ?
                                    <div className='parent-div mb-3'>
                                        <span className='list-income-period'>Periodo</span>
                                        <span className='list-income-short'>Recomendado</span>
                                        <span className='list-income-short'>Empresa</span>
                                        <span className='list-income-aside'>Ganancias</span>
                                    </div>
                                    :
                                    <div className='parent-div mb-3'>
                                        <span className='list-income-period'>Periodo</span>
                                        <span className='list-income-short-recommended'>Recom.</span>
                                        <span className='list-income-short-company'>Empresa</span>
                                        <span className='list-income-aside'>Gan. (€)</span>
                                    </div>

                            }

                            {
                                isNotMobile && doc.offerId !== null
                                    ?
                                    <div className='parent-div'>

                                        <span className='list-income-period-data'><span className='inner-span'>{month} {year}</span></span>
                                        <span className='list-income-short-data-rec'><span className='inner-span'>{doc.recommendedFirstName} {doc.recommendedLastName}</span></span>
                                        <span className='list-income-short-data-company '><span className='inner-span'>{doc.offerId.companyData.companyId.companyName}</span></span>

                                        {
                                            doc.moneyForRec > 0 && doc.moneyForRec <= 199 ?

                                                <span className='list-income-aside-money'><span className='inner-span'>100 €</span></span>
                                                :
                                                doc.moneyForRec >= 200 && doc.moneyForRec <= 299 ?
                                                    <span className='list-income-aside-money'><span className='inner-span'>200 €</span></span>
                                                    :
                                                    doc.moneyForRec >= 300 && doc.moneyForRec <= 399 ?
                                                        <span className='list-income-aside-money'><span className='inner-span'>300 €</span></span>
                                                        :
                                                        doc.moneyForRec >= 400 && doc.moneyForRec <= 499 ?
                                                            <span className='list-income-aside-money'><span className='inner-span'>400 €</span></span>
                                                            :
                                                            doc.moneyForRec >= 500 && doc.moneyForRec <= 599 ?
                                                                <span className='list-income-aside-money'><span className='inner-span'>500 €</span></span>
                                                                :
                                                                doc.moneyForRec >= 600 && doc.moneyForRec <= 699 ?
                                                                    <span className='list-income-aside-money'><span className='inner-span'>600 €</span></span>
                                                                    :
                                                                    doc.moneyForRec >= 700 && doc.moneyForRec <= 799 ?
                                                                        <span className='list-income-aside-money'><span className='inner-span'>700 €</span></span>
                                                                        :
                                                                        doc.moneyForRec > 800 ?
                                                                            <span className='list-income-aside-money'><span className='inner-span'>800 €</span></span>
                                                                            :
                                                                            null
                                        }
                                        <span className='list-income-aside-punctuation'><span className='inner-span'>+5 puntos</span></span>
                                    </div>
                                    :
                                    <div className='parent-div'>

                                        <span className='list-income-period-data'><span className='inner-span'>{month.substring(3,-1)+'.'} {year}</span></span>
                                        <span className='list-income-short-data-rec'><span className='inner-span'>{doc.recommendedFirstName} {doc.recommendedLastName.charAt(0) + '.'}</span></span>
                                        <span className='list-income-short-data-company '><span className='inner-span'>{doc.offerId ? doc.offerId.companyData.companyId.companyName : null}</span></span>
                                        {
                                            doc.moneyForRec > 0 && doc.moneyForRec <= 199 ?

                                                <span className='list-income-aside-money'><span className='inner-span'>100 €</span></span>
                                                :
                                                doc.moneyForRec >= 200 && doc.moneyForRec <= 299 ?
                                                    <span className='list-income-aside-money'><span className='inner-span'>200 €</span></span>
                                                    :
                                                    doc.moneyForRec >= 300 && doc.moneyForRec <= 399 ?
                                                        <span className='list-income-aside-money'><span className='inner-span'>300 €</span></span>
                                                        :
                                                        doc.moneyForRec >= 400 && doc.moneyForRec <= 499 ?
                                                            <span className='list-income-aside-money'><span className='inner-span'>400 €</span></span>
                                                            :
                                                            doc.moneyForRec >= 500 && doc.moneyForRec <= 599 ?
                                                                <span className='list-income-aside-money'><span className='inner-span'>500 €</span></span>
                                                                :
                                                                doc.moneyForRec >= 600 && doc.moneyForRec <= 699 ?
                                                                    <span className='list-income-aside-money'><span className='inner-span'>600 €</span></span>
                                                                    :
                                                                    doc.moneyForRec >= 700 && doc.moneyForRec <= 799 ?
                                                                        <span className='list-income-aside-money'><span className='inner-span'>700 €</span></span>
                                                                        :
                                                                        doc.moneyForRec > 800 ?
                                                                            <span className='list-income-aside-money'><span className='inner-span'>800 €</span></span>
                                                                            :
                                                                            null
                                        }
                                        {
                                            !isNotMobile ?
                                                <span className='list-income-aside-punctuation'><span className='inner-span'>+5 p.</span></span>
                                                :
                                                null
                                        }
                                    </div>
                            }
                        </div>
                    )
                })
            }

        </div>
    )
};





