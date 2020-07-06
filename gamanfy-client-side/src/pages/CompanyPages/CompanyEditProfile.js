import React, { useEffect, useState } from 'react';
// import {editCompanyProfile} from '../../api/users';
import { getCompanyData } from '../../api/users';
// import { useForm } from "react-hook-form";  
import '../../CSS/userEditProfile.css'

export const CompanyEditProfile = (props) => {

    const [, setData] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('')

    useEffect(() => {
        const any = async () => {
            getCompanyData(props.match.params.companyId).then(apiRes => {

                setData(apiRes.data);
                setFirstName(apiRes.data.user.firstName);
                setLastName(apiRes.data.user.lastName)
                setCity(apiRes.data.user.city)
                setEmail(apiRes.data.user.email);

            });

        }   
        any()
    }, [props.match.params.companyId]);



    return (
        <div className='bg-white h-100'>
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
                        <label>Apellido</label>
                        <input
                            type="text"
                            name="lastName"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={lastName}
                            placeholder='Apellidos' />
                    </div>

                    
                        <div>
                            <label> Ciudad</label>
                            <input
                                type='text'
                                name='city'
                                className='form-control signup-fields border-0 mx-auto'
                                defaultValue={city}

                            />

                        </div>

                    
                    <p className='user-data-mod'>Para modificar tus Datos Personales, avísanos mediante un correo a info@gamanfy.com</p>


                </form>
            </div>
            <div>
                <form className='signUp-form card profile-card form-group mx-auto' autoComplete='off'>
                    <h4>Datos Personales</h4>
                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={email}
                        />
                    </div>
                    <p className='user-data-mod'>Para modificar tus Datos Personales, avísanos mediante un correo a info@gamanfy.com</p>

                </form>
            </div>
        </div>
    )
}