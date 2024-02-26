import React from 'react';
import logo from './Logo.svg';

const Nav = () => {
    return (
        <nav>
          <img src={logo} alt="Logo" width="50" height="50" /> {/* Ajusta el ancho y alto según tus necesidades */}
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/reserve">Reserve</a></li>
            <li><a href="/about us">About</a></li>

            {/* Agrega más enlaces de navegación según tu estructura de la aplicación */}
          </ul>
          <meta name="description" content="nook a table on the little lemon website" />
          {/* Agrega más meta tags según tus necesidades */}
        </nav>
      );
} 
 
export default Nav;