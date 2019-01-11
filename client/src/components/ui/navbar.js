import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   return(
    <nav className="navbar navbar-light navbar-expand-lg" style={{backgroundColor: "#343148"}}>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/" style={{color: "#FFF"}}>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/register" style={{color: "#FFF"}}>Register</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/login" style={{color: "#FFF"}}>Login</Link>
            </li>
        </ul>
    </nav>
   );
};

export default Navbar;