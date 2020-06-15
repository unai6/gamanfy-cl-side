import React from 'react';
import { logout } from '../api/auth.api.js';
import { useHistory } from "react-router-dom";

export const UserDashboard = () => {
    const history = useHistory();
    
    const  handleClickLogout = () => {
        logout()
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history.push('/');

    }

    return (
        <div>
            <h1>Hello this is a private route</h1>
            <button type="button" className="btn btn-lg btn-block  text-uppercase btn-danger text-light " onClick={handleClickLogout}>Desconectar</button>

        </div>
    )
}
