import React from "react";
import '../CSS/Navbar.css';
import { logout } from '../api/auth.api';
import { useHistory} from "react-router-dom";

const Navbar = () => {

  const history = useHistory()

  let token = localStorage.getItem('user');
  let currentUserId;
  let isItaCompany;
  if (token !== null) {
    let parsedCurrentUserId = JSON.parse(token);
    currentUserId = parsedCurrentUserId.userId;
    isItaCompany = parsedCurrentUserId.isItaCompany;
  }

  const handleClickLogout = () => {
    logout()
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/')

  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white">G</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">

          <img className='mt-4  home-img' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />
          <ul className="navbar-nav mt-3">
            <li className="nav-item active ">
              <b><a className="nav-link text-light mr-4" href="/">
                ¿Cómo funciona?<span className="sr-only">(current)</span>
              </a></b>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light mr-4" href='/'> Soy influencer </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light mr-4" href='/'> Soy una empresa </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light mr-4" href="/">
                Blog
              </a>
            </li>
            {
              token && isItaCompany === true ?
                <li className="nav-item">
                  <a href={`/company/${currentUserId}/dashboard`} className="nav-link go-dashboard">
                    Ir a mi Dashboard
              </a>
                </li>
                :

                token && isItaCompany === false ?
                  <li className="nav-item">
                    <a href={`/user/${currentUserId}/dashboard`} className="nav-link go-dashboard">
                      Ir a mi Dashboard
                </a>
                  </li>

                  :

                  <li className="nav-item">
                    <a href='/auth/login' style={{ textDecoration: 'underline' }} className="nav-link text-light">
                      Login
                </a>
                  </li>
            }
            {
              token ?
            <li className="nav-item">
              <button onClick={handleClickLogout} style={{ textDecoration: 'underline', fontWeight:'600', border:'none', background:'transparent'}} className="nav-link text-light">
              [ Cerrar Sesión ]
                </button>
            </li> :

            null
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
