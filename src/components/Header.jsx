import React from 'react';
// Logo de la apliacion
import logo from '../assets/img/logo.png';
// Documentacion del componente 
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return ( 
        <nav className="navbar navbar-light bg-info">
            <a className="navbar-brand" href="#!">
                <img src={logo} width="30" height="30" alt="Logo" />
                <span className="navbar-brand mb-0 h1 ml-2 text-white">{titulo}</span>
            </a>
        </nav>        
     );
}

// Definicion del componente "Header", que props se le pasan
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;