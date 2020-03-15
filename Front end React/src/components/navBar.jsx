import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={"https://cdn3.iconfinder.com/data/icons/robotic-line/96/ai_chip_technology-512.png"} style={{width:'3%'}} alt="Logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/documentation">Documentation</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/examples">Examples</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/community">Community</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;