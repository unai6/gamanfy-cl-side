import React, { useEffect, useState } from 'react';
import {editUserProfile} from '../../api/users';

export const UserEditProfile = () => {
    
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
        
        </div>
    )
}