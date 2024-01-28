// Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';
import SC2A from '../assets/Logo/logo 1.png';

const Header = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setHeaderVisible(!isScrolledDown || currentScrollPos < 10); // Adjust the threshold as needed

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className="header" style={{ top: isHeaderVisible ? '0' : '-170px' }}>
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
};

export default Header;
