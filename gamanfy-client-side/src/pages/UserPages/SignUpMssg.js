import React from 'react';
import { resendToken } from '../../api/auth.api';
import Modal from "react-bootstrap/Modal";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import '../../CSS/signupmssg.css'
import '../../CSS/signupForm.css'


export const SignUpMssg = () => {
    const { register, handleSubmit } = useForm();
    const [infoSent, setInfoSent] = useState(false)
    const [isOpen, setIsOpen] = React.useState(false);
    const [data, setData] = useState({})

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    const onSubmit = (data) => {

        resendToken(data.email).then(setData(data.email)).then(setInfoSent(true))
    };

    return (
        <div className='container-fluid div-wrapper'>
            <img className='gamanfy-logo' src='/LOGO_BLANCO_ALTA_CALIDAD_LARGO.png' alt='logo-gamanfy' />
            {!infoSent ?
                <div className='card card-signupMssg col-lg-4 mx-auto'>
                    <img className='tick-logo-user' src='/tick_logo.png' alt='logo-gamanfy' />

                    <div>
                        <p className=' card-body p-signup text-center' style={{ fontWeight: '700' }}>Acabamos de crear tu cuenta</p>
                        <p className=' dar-body p-signup text-center'> Para empezar a ver las mejores ofertas de empleo, verifica tu bandeja den entrada y haz click en el link que te hemos enviado para completar la validación.</p>
                    </div>

                    <p className='card-body p-signup user-terms-signupMssg mt-5 text-center'>¿No ves nuestro correo en tu bandeja de entrada? Prueba a <u>
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


                </div> : <p style={{marginTop:'4em', color:'white'}}>Nuevo email de confirmación enviado correctamente a {<input className='resend-email' type='text' name='userEmail' defaultValue={data} />}</p>}
        </div>
    )
}
