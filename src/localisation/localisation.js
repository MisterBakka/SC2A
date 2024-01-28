import React from 'react';
import '../localisation/localisation.css'

const Trouver = () => {
  return (
    <section className="ou" id="trouver">
      <h1>Où nous trouver ?</h1>
      <div className="ou2">
        <p>
        Situés au cœur de Dijon, à quelques minutes de la gare nous aurons à plaisir à vous accueillir au <strong>21 Avenue Victor Hugo 21000 Dijon</strong> dans nos bureaux. <br />Du Lundi au vendredi de 9h à 12h 30 et de 13h30 à 18h30 ainsi que le week-end sur rendez-vous.
        </p>
      </div>
      <section className="localisation">
        <iframe
          title="carte interactive pour situer les locaux"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.3920829482463!2d5.02731417691762!3d47.326213571165496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29d93ae2fb7c7%3A0x39448e8cd7b9291!2s21%20Av.%20Victor%20Hugo%2C%2021000%20Dijon!5e0!3m2!1sfr!2sfr!4v1687907050828!5m2!1sfr!2sfr"
          width="80%"
          height="600"
          style={{ border: 0, borderRadius: '20px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  );
};

export default Trouver;
