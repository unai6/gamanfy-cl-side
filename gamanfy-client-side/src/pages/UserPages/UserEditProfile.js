import React, { useEffect, useState } from 'react';
// import {editUserProfile} from '../../api/users';
import { getUserData } from '../../api/users';
// import { useForm } from "react-hook-form";  
import '../../CSS/userEditProfile.css'

export const UserEditProfile = (props) => {

    const [, setData] = useState([]);
    const [date, setDate] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isCompany, setIsCompany] = useState(false);
    const [city, setCity] = useState('');
    const [compUserCity, setCompUserCity] = useState('');
    const [email, setEmail] = useState('')

    useEffect(() => {
        const any = async () => {
            getUserData(props.match.params.userId).then(apiRes => {
                setData(apiRes.data);
                setFirstName(apiRes.data.firstName);
                setLastName(apiRes.data.lastName)
                setCity(apiRes.data.city)
                setIsCompany(apiRes.data.isCompany);
                setEmail(apiRes.data.email);

                if (isCompany === true) {
                    console.log(apiRes.data.companyUser.city)
                    return setCompUserCity(apiRes.data.companyUser.city)
                } else if (isCompany === false && date !== undefined) {
                    return setDate(apiRes.data.birthDate);
                } else {
                    return null
                }
            });

        }   
        any()
    }, [props.match.params.userId, isCompany, date]);



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

                    {isCompany === false ?
                        <div>
                            <label>Fecha de Nacimiento</label>
                            <input
                                type='text'
                                name='birthDate'
                                className='form-control signup-fields border-0 mx-auto'
                                defaultValue={date.substring(0, 10)}
                            />

                        </div> : null}


                    {isCompany === true ?
                        <div>
                            <label> Ciudad</label>
                            <input
                                type='text'
                                name='city'
                                className='form-control signup-fields border-0 mx-auto'
                                defaultValue={compUserCity}

                            />

                        </div>
                        :
                        <div>
                            <label> Ciudad</label>
                            <input
                                type='text'
                                name='city'
                                className='form-control signup-fields border-0mx-auto'
                                defaultValue={city}

                            />

                        </div>

                    }
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