import React, { useEffect, useState } from 'react';
// import {editUserProfile} from '../../api/users';
import { getUserData } from '../../api/users';
// import { useForm } from "react-hook-form";  
import '../../CSS/userEditProfile.css'

export const UserEditProfile = (props) => {

    const [data, setData] = useState([]);
    const [date, setDate] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [isCompany, setIsCompany] = useState(false)

    useEffect(() => {
        const any = async () => {
            getUserData(props.match.params.userId).then(apiRes => {
                setData(apiRes.data);
                setFirstName(apiRes.data.firstName);
                setLastName(apiRes.data.lastName)
                setDate(apiRes.data.birthDate)
                setIsCompany(apiRes.data.isCompany)
                console.log(apiRes.data)
            })

        }
        any()
    }, [props.match.params.userId])




    return (
        <div>
         <h3 className='profileh3'>Mi Perfil</h3>
            <div>
                <form className='signUp-form card form-group mx-auto' autoComplete='off'>
                    <h4>Datos Personales</h4>
                    <div>
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="firstName"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={firstName.firstName}
                            placeholder='Nombre' />
                    </div>

                    <div>
                        <label>Apellido</label>
                        <input
                            type="text"
                            name="lastName"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={lastName.lastName}
                            placeholder='Apellidos' />
                    </div>

                    {isCompany === false ?
                        <div>
                            <label>Fecha de Nacimiento</label>
                            <input
                                type='text'
                                name='birthDate'
                                className='form-control signup-fields border-0 mx-auto'
                                defaultValue={date.substring(10, data.length - 1)}
                            />

                        </div> : null}


                    {isCompany ?
                        <div>
                            <label> Ciudad</label>
                            <input
                                type='text'
                                name='city'
                                className='form-control signup-fields border-0 mx-auto'
                                defaultValue={data.companyUser.city}

                            />

                        </div>
                        :
                        <div>
                            <label> Ciudad</label>
                            <input
                                type='text'
                                name='city'
                                className='form-control signup-fields border-0mx-auto'
                                defaultValue={data.city}

                            />

                        </div>

                    }
                    <p className='user-data-mod'>Para modificar tus Datos Personales, avísanos mediante un correo a info@gamanfy.com</p>
                   

                </form>
            </div>
            <div>
                <form className='signUp-form card form-group mx-auto' autoComplete='off'>
                    <h4>Datos Personales</h4>
                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue={data.email}
                            />
                    </div>

                    <div>
                        <label>Contraseña</label>
                        <input
                            type="text"
                            name="password"
                            className='form-control signup-fields border-0 mx-auto'
                            defaultValue='********'
                             />
                    </div>
                    <p className='user-data-mod'>Para modificar tus Datos Personales, avísanos mediante un correo a info@gamanfy.com</p>

                </form>
            </div>
        </div>
    )
}