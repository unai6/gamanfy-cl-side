import React, { useEffect, useState } from 'react';
import { editCompanyProfile } from '../../api/users';
import { getCompanyData } from '../../api/users';
import { useForm } from "react-hook-form";
import '../../CSS/userEditProfile.css'
import { Calendly } from './Calendly';
import Modal from "react-bootstrap/Modal";

export const CompanyEditProfile = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [numberOfEmployees, setNumberOfEmployees] = useState('');
    const [sector, setSector] = useState('');
    const [description, setDescription] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [website, setWebsite] = useState('');
    const [taxId, setTaxId] = useState('');
    const [taxCountry, setTaxCountry] = useState('');
    const [taxAddress, setTaxAddress] = useState([]);
    const [updateState, setUpdateState] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    const [isValidated, setIsValidated] = useState(Boolean())
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const any = async () => {
            getCompanyData(props.match.params.companyId).then(apiRes => {
                setIsValidated(apiRes.data.user.isValidated)
                setFirstName(apiRes.data.user.firstName);
                setLastName(apiRes.data.user.lastName);
                setCity(apiRes.data.user.city);
                setEmail(apiRes.data.user.email);
                setCompanyName(apiRes.data.user.companyName);
                setNumberOfEmployees(apiRes.data.user.numberOfEmployees);
                setSector(apiRes.data.user.sectorId.sector);
                setDescription(apiRes.data.user.description);
                setCountry(apiRes.data.user.countryName);
                setAddress(apiRes.data.user.addressId);
                setPhoneNumber(apiRes.data.user.phoneNumber);
                setWebsite(apiRes.data.user.website);
                setTaxId(apiRes.data.user.taxId);
                setTaxCountry(apiRes.data.user.taxCountry);
                setTaxAddress(apiRes.data.user.taxAddress);

            });

        }
        any()
    }, [props.match.params.companyId]);

    const onSubmit = data => {

        editCompanyProfile(props.match.params.companyId, data).then(() => {
            setUpdateState(!updateState)
            setIsLoading(true)
        })

    };


    const hideModal = () => {
        setIsOpen(false);
    };


    return (
        <div className='bg-white h-100'>
            {
                !isValidated ?
                    <Modal className='modal-calendly' show={isOpen} onHide={hideModal}>
                        <Modal.Header>
                            <Modal.Title>
                                <h4 className='p-modal-offer'>Elije una fecha para que te hagamos una llamada de seguimiento</h4>
                                <p className='p-inputs mt-5' style={{ fontSize: '.7em', marginTop: '1.5em' }}>Para mejorar la experiencia de contratación y la experiencia comercial, nos gustaría tener una llamda de 15 minutos con vosotros para definir mejor cómo ofreceremos nuestros servicios. </p>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Calendly/>
                        </Modal.Body>
                    </Modal>
                    : null
            }

            <h3 className='profileh3'>Mi Perfil</h3>
            <div>
                <form className='signUp-form card profile-card form-group mx-auto' autoComplete='off'>
                    <h4>Datos Personales</h4>
                    <div>
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="firstName"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={firstName}
                            placeholder='Nombre' />
                    </div>

                    <div>
                        <label>Apellidos</label>
                        <input
                            type="text"
                            name="lastName"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={lastName}
                            placeholder='Apellidos' />
                    </div>


                    <div>
                        <label> Email de contacto</label>
                        <input
                            type='text'
                            name='email'
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={email}

                        />

                    </div>


                    <p className='user-data-mod'>Para modificar tus Datos Personales, avísanos mediante un correo a info@gamanfy.com</p>


                </form>
            </div>
            <div>
                <form className='signUp-form card profile-card profile-card-long form-group mx-auto' autoComplete='off'>
                    <h4>Datos de la Empresa</h4>
                    <div>
                        <label>Nombre Empresa</label>
                        <input
                            type="text"
                            name="companyName"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={companyName}
                        />
                    </div>
                    <div>
                        <label>Número de Empleados</label>
                        <input
                            type="text"
                            name="numberOfEmployees"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={numberOfEmployees}
                        />
                    </div>
                    <div>
                        <label>Sector profesional</label>
                        <input
                            type="text"
                            name="sector"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={sector}
                        />
                    </div>
                    <div>
                        <label>Descripción de la Empresa</label>
                        <input
                            type="text"
                            name="description"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={description}
                        />
                    </div>
                    <div>
                        <label>País</label>
                        <input
                            type="text"
                            name="country"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={country}
                        />
                    </div>
                    <div>
                        <label>Dirección Completa</label>
                        <input
                            type="text"
                            name="city"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={city}
                        />
                        <input
                            type="text"
                            name="street"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={address.street}
                        />
                        <input
                            type="text"
                            name="number"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={address.number}
                        />
                        <input
                            type="text"
                            name="zip"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={address.zip}
                        />
                    </div>
                    <div>
                        <label>Teléfono de Contacto</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={phoneNumber}
                        />
                    </div>
                    <div>
                        <label>Web</label>
                        <input
                            type="text"
                            name="website"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={website}
                        />
                    </div>

                    <p className='user-data-mod'>Para modificar tus Datos Personales, avísanos mediante un correo a info@gamanfy.com</p>

                </form>

                <form className='signUp-form card profile-card form-group mx-auto' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                    <h4>Datos Fiscales/ Facturación</h4>
                    <div>
                        <label> N.I.F / Razón Social</label>
                        <input
                            type="text"
                            name="taxId"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={taxId}
                            ref={register({ required: true })}

                        />
                    </div>
                    <div>
                        <label> Domicilio Fiscal</label>

                        {taxAddress !== undefined ?
                            <input
                                type="text"
                                name="street"
                                className='form-control signup-fields border-0 mx-auto'
                                ref={register({ required: true })}
                                defaultValue={taxAddress.street}
                                placeholder='Calle'
                            />
                            :

                            <input
                                type="text"
                                name="street"
                                className='form-control signup-fields border-0 mx-auto'
                                ref={register({ required: true })}
                                placeholder='Calle'
                            />

                        }

                        {
                            taxAddress !== undefined ?
                                <input
                                    type="text"
                                    name="number"
                                    className='form-control signup-fields border-0 mx-auto'
                                    ref={register({ required: true })}
                                    defaultValue={taxAddress.number}
                                    placeholder='Número'
                                />
                                :
                                <input
                                    type="text"
                                    name="number"
                                    className='form-control signup-fields border-0 mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='Número'
                                />

                        }

                        {
                            taxAddress !== undefined ?
                                <input
                                    type="text"
                                    name="zip"
                                    className='form-control signup-fields border-0 mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='Código Postal'
                                    defaultValue={taxAddress.zip}
                                />
                                :
                                <input
                                    type="text"
                                    name="zip"
                                    className='form-control signup-fields border-0 mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='Código Postal'

                                />

                        }
                    </div>
                    <div>
                        <label> País de Facturación</label>
                        <input
                            type="text"
                            name="taxCountry"
                            ref={register({ required: true })}
                            defaultValue={taxCountry}
                            className='form-control signup-fields border-0 mx-auto'

                        />
                    </div>
                    {!isLoading ? <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Modificar Datos' /></p> : <p className='p-cacc'> <input type="submit" className='btn-cacc-su btn-success' value='Datos Modificados' /> </p>}

                </form>
            </div>
        </div>
    )
}