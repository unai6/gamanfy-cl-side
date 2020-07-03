import React from 'react';
import { companyResendToken } from '../../api/auth.api';
import Modal from "react-bootstrap/Modal";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import '../../CSS/signupmssg.css'
import '../../CSS/signupForm.css'


export const CompanySignUpMssg = () => {
    const { register, handleSubmit } = useForm();
    const [infoSent, setInfoSent] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({})

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    const onSubmit = (data) => {

        companyResendToken(data.email).then(setData(data.email)).then(setInfoSent(true))
    };

    return (
        <div className='container d-lg-flex div-wrapper'>
            <img className='gamanfy-logo' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />
            {!infoSent ?
                <div className='card row justify-content-center align-self-center col-lg-6 col-sm-3'>
                    <img className='tick-logo' src='/Anotación 2020-06-03 114022.png' alt='logo-gamanfy' />

                    <div>
                        <p className=' card-body p-signup mr-5 ml-5' style={{ fontWeight: '700' }}>Acabamos de crear tu cuenta</p>
                        <p className=' dar-body p-signup mr-5 ml-5'> Para empezar a encontrar el mejor talento, verifica tu bandeja de entrada y haz click en el link que te hemos enviado para completar la validación.</p>
                    </div>

                    <p className='card-body user-terms mt-5'>¿No ves nuestro correo en tu bandeja de entrada? Prueba a <u>
                        <input className='email-resend' type="submit" onClick={showModal} value='Reenviar el email de verificación' /></u>
                    </p>
                    <Modal show={isOpen} onHide={hideModal}>
                        <Modal.Header>
                            <Modal.Title> <p className='p-signup'>Escriba su dirección de correo</p> </Modal.Title>
                        </Modal.Header>
                        <form onSubmit={handleSubmit(onSubmit)}> <input className='signup-fields ml-5 mt-3' type='email' name='email' placeholder='Email' ref={register({ required: true })} autoComplete='off' />
                            <Modal.Body>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={hideModal} className='btn-danger p-1' style={{ borderRadius: '3px' }}>Cancel</button>
                                <input type='submit' className='btn-cacc-su' value='Reenviar' />
                            </Modal.Footer>
                        </form>
                    </Modal>


                </div> : <p >Nuevo email de confirmación enviado correctamente a {<input className='resend-email' type='text' name='userEmail' defaultValue={data} />}</p>}
        </div>
    )
}
