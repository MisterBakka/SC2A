import React from 'react';
import '../About/About.css';


import generali from '../assets/image/logo genrali.png';
import alptis from '../assets/image/Logo_Alptis 1.png';
import abeille from '../assets/image/card-abeille-dk 1.png';
import swiss from '../assets/image/logo swiss life.png';
import april from '../assets/image/logo_april 1.png';
import sabri from '../../src/assets/image/SABRI PNG 2.png';
import fleche from '../assets/icon/fleche.svg'
import zenioo from '../assets/image/Zenioo-premunia.png'



const AssuranceLogos = () => {
  return (

    <div className="logo-assurance">
      <div >
        <img className="assu1" src={swiss} alt="swiss life" />
      </div>
      <div >
        <img className="assu2" src={generali} alt="generali" />
      </div>
      <div >
        <img className="assu3" src={alptis} alt="alptis" />
      </div>
      <div >
        <img className="assu4" src={abeille} alt="abeille" />
      </div>
      <div >
        <img className="assu5" src={april} alt="april" />
      </div>
      <div >
        <img className="assu6" src={zenioo} alt="zenioo" />
      </div>
    </div>

  );
};

const AboutUs = () => {
  return (
    <section className="description2" id="qui">
      <h1>Qui sommes-nous ?</h1>
      <section className="textsabriimg">
        <section className="photo-nom">
          <h2>SC2A c'est avant tout...</h2>
          <div className="textdescription-sabri">
          <p>
  SC2A est un nouveau cabinet de courtage en assurances créé par Sabri AOUIDAT.
  Installé au cœur de Dijon, notre cabinet est au service des entreprises, des indépendants et des particuliers afin de leur proposer des solutions d’assurances sur mesure répondant à leurs différents besoins.

  Notre engagement : Une étude personnalisée sans engagement, une offre compétitive et un accompagnement individualisé du contrat au règlement du sinistre.

  Sans engagement de votre part, SC2A vous propose de bâtir avec vous une analyse précise de vos besoins puis de comparer pour vous les offres auprès de nombreux prestataires nationaux en assurance experts sur le marché.

  Notre offre entreprises et activité libérale sera très étoffée et le particulier ne sera pas en reste, nous traiterons ses dossiers santé et retraite avec la même exigence et offrirons une gamme très compétitive pour les véhicules auto/Moto, habitation et épargne. L’assurance emprunteur reste une fondation du métier de courtier en assurance.

 
</p>

          </div>
        </section>
        <section>
          <div className="cercle-image">
            <img className="cercle imgsabri" src={sabri} alt="Sabri Aouidat" />
            <div className="sabri">
              <p>
                Sabri Aouidat
                <br />
                Directeur général
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

const About = () => {
  return (
    <section className="description">
      <div className="lotties">
        <h1>
          UNE SÉCURITÉ PRÉSERVÉE
          <br />
          EST UN AVENIR ASSURÉ
        </h1>
        <div className="textdescription">
        <p>
  Le cabinet SC2A est au service des entreprises, des indépendants et des particuliers afin de leur proposer des solutions d’assurances sur mesure répondant à leurs différents besoins. Cette offre de services couvre des domaines variés tels que la prévoyance, la santé, la retraite, la responsabilité civile ainsi qu’une offre complète d’assurance pour les automobiles, motos et habitations.<br />
  Ce qui vous séduira avec SC2A c’est d’avoir accès à une gamme très compétitive en termes de prestations et de tarif du fait de la sélection d’une gamme large de prestataires experts et leaders dans leur domaine.
</p>


        </div>
      </div>
      <section className="btn-question">
        <div className="btn-contact">
          <a href="#contact">
            <p className="p-btn">Contactez-nous</p>
          </a>
        </div>
        <div>
          <a className="question" href='question'>
            <p>SC2A qu'est ce que c'est ?</p>
            <img src={fleche} alt="fleche cliquable" style={{ padding: '10px 0 5px 10px' }} />
          </a>

        </div>
      </section>
      <AssuranceLogos />
      <AboutUs />
    </section>
  );
};

export default About;
