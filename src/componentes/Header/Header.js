import React from "react";
import { NavLink, Outlet,Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
            <li>
                <NavLink className="nav-link"to="/">
                  
                  
                </NavLink>
              </li>
              
              <li >
              <NavLink className="nav-link"to="/Productos"> Productos</NavLink>
              </li>
              
              <li >
                <NavLink className="nav-link"to="/Contacto"> Contacto</NavLink>
                
              </li>
              

              <li>
              <NavLink className="nav-link"to="/Nosotros"> Nosotros</NavLink>
                
              </li>
              
              
              
                </ul>
              
            
          </div>
          <a className="navbar-brand mx-auto fw-bold text-center" href="/">
            OTHERSIDE
          </a>
        </div>
        <Outlet/>
      </nav>
    </>
  );
};

export default Header;
