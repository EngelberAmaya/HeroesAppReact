import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user: {name}, dispatch } = useContext(AuthContext);
    //console.log(name);
    const navigate = useNavigate();

    const data = {
        type: types.logout
    }

    const handleLogout = () => {

        dispatch(data);

        navigate('/login', {
            replace: true
        });
  

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">            

            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>{name}</span>

                    <button className="nav-item nav-link btn" onClick={handleLogout}>Logout</button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
