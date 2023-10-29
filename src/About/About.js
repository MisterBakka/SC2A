import React from 'react';

import '../About/About.css';


import generali from '../assets/image/logo genrali.png';
import alptis from '../assets/image/Logo_Alptis 1.png';
import abeille from '../assets/image/card-abeille-dk 1.png';
import swiss from '../assets/image/logo swiss life.png';
import april from '../assets/image/logo_april 1.png';
import sabri from '../../src/assets/image/SABRI PNG 2.png';
import fleche from '../assets/icon/fleche.svg'




const AssuranceLogos = () => {
  return (

    <div className="logo-assurance">
      <div className="assu1">
        <img src={swiss} alt="swiss life" />
      </div>
      <div className="assu2">
        <img src={generali} alt="generali" />
      </div>
      <div className="assu3">
        <img src={alptis} alt="alptis" />
      </div>
      <div className="assu4">
        <img src={abeille} alt="abeille" />
      </div>
      <div className="assu5">
        <img src={april} alt="april" />
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
          <div className="textdescription">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, ratione excepturi asperiores aperiam culpa
              architecto odio ut officia, earum quidem magnam sit, voluptatibus neque saepe unde reiciendis veniam animi
              cumque. Ex iusto illum earum ea soluta quis laborum, et aperiam minima eveniet voluptatibus reprehenderit rerum
              eius commodi deleniti ab nihil facilis, dolor placeat nesciunt! Cupiditate veritatis voluptate corporis eaque
              accusantium!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veritatis,
            <br />
            blanditiis ipsum assumenda numquam doloribus.
            <br />
            commodi incidunt recusandae et optio error quas deleniti corrupti exercitationem unde, in sed excepturi.
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
          <a className="question" href="">
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
