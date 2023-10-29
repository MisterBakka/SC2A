import React from 'react';
import '../footer/footer.css'

function footer() {
  return (
    <footer>
      <div className="left-section">
        <div className="group">
          <p>Accueil</p>
          <p>Qui sommes-nous ?</p>
        </div>
        <div className="group">
          <p>Où nous trouver</p>
          <p>Nos solutions</p>
        </div>
      </div>
      <div className="right-section">
        <p>Mentions légales</p>
        <p>Hitchcode X Bacode</p>
      </div>
    </footer>
  );
}

export default footer;
