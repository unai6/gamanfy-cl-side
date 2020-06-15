import React from 'react';
import { logout } from '../api/auth.api.js';


export const UserDashboard = () => {
 

    return (
        <div>
            <h1>Hello this is a private route</h1>
            <button type="button" className="btn btn-lg btn-block  text-uppercase btn-danger text-light " onClick={logout}>Desconectar</button>

        </div>
    )
}
