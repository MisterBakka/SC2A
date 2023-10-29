import React from 'react';
import Header from '../src/Header/Header'; 
import About from './About/About';
import Solutions from './solution/solution';
import Trouver from './localisation/localisation';
import Contact from './contact/contact';
import Footer from './footer/footer';

import './index.css'

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
      <About />
      <Solutions />
      <Trouver />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
