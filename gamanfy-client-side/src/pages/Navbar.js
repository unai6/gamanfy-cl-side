import React from "react";
import '../CSS/Navbar.css';

const Navbar = () => {

  let token = localStorage.getItem('user');
  let currentUserId
  if(token){
    let parsedCurrentUserId = JSON.parse(token);
     currentUserId = parsedCurrentUserId.userId; 
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">

            <img className='mt-4 ml-5'src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy'/>
          <ul className="navbar-nav mt-3">
            <li className="nav-item active ">
            <b><a  className="nav-link text-light mr-4"  href="/">
                ¿Cómo funciona?<span className="sr-only">(current)</span>
              </a></b>
            </li>
            <li className="nav-item">
              {currentUserId ? <a className="nav-link text-light mr-4"  href={`/user/${currentUserId}/dashboard`} > Soy influencer </a>
              : <a className="nav-link text-light mr-4"  href='/'> Soy influencer </a>}
            
            </li>
            
            <li className="nav-item">
              {currentUserId ? <a className="nav-link text-light mr-4"  href={`/company/${currentUserId}/dashboard`} > Soy una empresa </a>
              : <a className="nav-link text-light mr-4"  href='/'> Soy una empresa </a>}
            
            </li>
            
             <li className="nav-item">
              <a className="nav-link text-light mr-4" href="/">
                Blog
              </a>
            </li> 
            <li className="nav-item">
              <a href='/auth/login' style = {{textDecoration:'underline'}} className="nav-link text-light">
                Login
              </a>
            </li> 
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
