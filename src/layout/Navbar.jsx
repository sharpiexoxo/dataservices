import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return(

        <nav>

            <NavLink className="navbar-link" to="/">Home</NavLink>
            <NavLink className="navbar-link" to="/weather">Vejret</NavLink>
            <NavLink className="navbar-link" to="/viborghaveservice">Viborg Haveservice</NavLink>
            <NavLink className="navbar-link" to="/news">News</NavLink>

        </nav>
    )

}

export default Navbar;