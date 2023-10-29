import React from 'react';
import './solution.css';

import vector from '../assets/icon/Vector.svg'
import vector1 from '../assets/icon/Vector (1).svg'
import vector2 from '../assets/icon/Vector (2).svg'
import vector3 from '../assets/icon/Vector (3).svg'
import vector4 from '../assets/icon/Vector (4).svg'
import vector5 from '../assets/icon/Vector (5).svg'
import vector6 from '../assets/icon/Vector (6).svg'
import vector7 from '../assets/icon/Vector (7).svg'
import vector8 from '../assets/icon/Vector (8).svg'
import vector9 from '../assets/icon/emprunt icon.svg'

const Solutions = () => {
  return (
    <div>
      {/* Pour les TNS et professions libérales */}
      <section className="solutions" id="solution">
        <h1>Nos solutions</h1>
        <div className="textcentre">
          <h4>Pour les TNS et professions libérales</h4>
          <p className="undertext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere sed aspernatur molestias.</p>
        </div>
        <section className="listcards">
          <article className="cards">
            <div className="ellips">
              <img className="vector" alt="homme avec une canne" src={vector} />
            </div>
            <h3>Retraite</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips1">
              <img className="vector1" alt="oeil" src={vector1} />
            </div>
            <h3>Prévoyance</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips2">
              <img className="vector2" alt="logo Santé" src={vector2} />
            </div>
            <h3>Santé</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips3">
              <img className="vector3" alt="parapluie" src={vector3} />
            </div>
            <h3>Multi-risques</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips4">
              <img className="vector4" alt="balance justice" src={vector4} />
            </div>
            <h3>Responsabilité civiles</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
        </section>
        <div className="button">
          <a href="#contact">
            <p className="btn-contact">En savoir plus</p>
          </a>
        </div>
      </section>

      {/* Pour les entreprises */}
      <section className="solution" id="solution-entreprises">
        <div className="textcentre">
          <h4>Pour les entreprises</h4>
          <p className="undertext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere sed aspernatur molestias.</p>
        </div>
        <section className="listcards">
          <article className="cards">
            <div className="ellips">
              <img className="vector" alt="homme avec une canne" src={vector} />
            </div>
            <h3>Retraite</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips-container">
              <div className="ellips10">
                <img className="vector10" alt="oeil" src={vector1} />
              </div>
              <div className="ellips20">
                <img className="vector20" alt="logo Santé" src={vector2} />
              </div>
            </div>
            <h3>Santé et prévoyance collective</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips2">
              <img className="vector2" alt="logo santé" src={vector2} />
            </div>
            <h3>Santé</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips3">
              <img className="vector3" alt="parapluie" src={vector3} />
            </div>
            <h3>Multi-risques</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips4">
              <img className="vector4" alt="balance justice" src={vector4} />
            </div>
            <h3>Responsabilité civiles</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
        </section>
        <div className="button">
          <a href="#contact">
            <p className="btn-contact">En savoir plus</p>
          </a>
        </div>
      </section>

      {/* Pour les particuliers */}
      <section className="particuliers">
        <div className="textcentre">
          <h4>Pour les particuliers</h4>
        </div>
        <p className="undertext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere sed aspernatur molestias.</p>
        <section className="listcards">
          <article className="cards">
            <div className="ellips">
              <img className="vector" alt="homme avec une canne" src={vector} />
            </div>
            <h3>Retraite</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips6">
              <img className="vector6" alt="voiture" src={vector5} />
            </div>
            <h3>Autos</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips2">
              <img className="vector2" alt="logo santé" src={vector6} />
            </div>
            <h3>Santé</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips8">
              <img className="vector8" alt="tirelire en cochon" src={vector7} />
            </div>
            <h3>Habitation</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips9">
              <img className="vector9" alt="une main" src={vector8} />
            </div>
            <h3>Épargne</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
          <article className="cards">
            <div className="ellips11">
              <img className="vector11" alt="" src={vector9} />
            </div>
            <h3>Assurance emprunteur</h3>
            <p className="p-textcards">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel fuga repellat alias consequatur exercitationem perferendis</p>
          </article>
        </section>
        <div className="button">
          <a href="#contact">
            <p className="btn-contact">En savoir plus</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
