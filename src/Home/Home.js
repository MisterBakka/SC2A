import React from 'react';
import About from '../About/About';
import Solutions from '../solution/solution';
import Trouver from '../localisation/localisation';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

import '../index.css'

const Home = () => {
    return (
      <div className="main-container">
        <section className="about-section">
          <About />
        </section>
        <section className="solutions-section">
          <Solutions />
        </section>
        <section className="trouver-section">
          <Trouver />
        </section>
        <section className="contact-section">
          <Contact />
        </section>
        <Footer />
      </div>
    );
  };
  
  export default Home;