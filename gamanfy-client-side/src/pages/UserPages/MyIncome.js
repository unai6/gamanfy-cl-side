import React from 'react';
import '../../CSS/myIncome.css';

export const MyIncome = () => {
    return (
        <div>
            <h3 className='rec-h3'>Mis Ganancias</h3>

            <div className='card mx-auto card-offers recommend-card-big '>

                <hr className='income-hr' />
                <div className='d-flex justify-content-around inputs-div-income'>  <input className='round-btn ball-1-income' type='button' /><input className='round-btn ball-2-income' type='button' /><input className='round-btn ball-3-income' type='button' /> <input className='round-btn ball-4-income' type='button' /> <input className='round-btn ball-5-income' type='button' /></div>
                <div className='d-flex justify-content-around div-metals'><p className='p-inputs'>Bronce</p><p className='p-inputs p-input-2-income'>Plata</p><p className='p-inputs p-input-3-income'>Oro</p> <p className='p-inputs p-input-4-income'>Platino</p> <p className='p-inputs p-input-5-income'>Partner</p></div>

            </div>
        </div>
    )
}





