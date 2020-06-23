import React, { useEffect, useState } from 'react';
import {editUserProfile} from '../../api/users';

export const UserEditProfile = (props) => {
        console.log(props)
    useEffect(() =>{
        const any = async () => {
            editUserProfile().then(apiRes => {
                console.log(apiRes)
            })
        }
            any()
    },[])
    
    return (
        <div>
             <h3>Mi perfil</h3>
        </div>
    )
}

