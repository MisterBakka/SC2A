import React from 'react';
import '../Header/Header.css'; 
import SC2A from '../assets/Logo/logo 1.png';
function Header() {
  
  return (
    <header className="header">
      <div>
        <a href="#index.html">
          <img className="logo" src={SC2A} alt="SC2A" />
        </a>
      </div>
      <nav>
        <ul className="menu">
          <li>
            <a href="#qui" className="lienancre">
              Qui sommes-nous ?
            </a>
          </li>
          <li>
            <a href="#solution" className="lienancre">
              Nos solutions
            </a>
          </li>
          <li>
            <a href="#trouver" className="lienancre">
              Où nous trouver ?
            </a>
          </li>
          <li>
            <a href="#contact" className="contactez">
              Contactez-nous
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
