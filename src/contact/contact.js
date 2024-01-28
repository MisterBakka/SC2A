import React, { useState } from 'react';
import '../contact/contact.css'

function Contact() {
  const [type, setType] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      type,
      prenom,
      nom,
      email,
      sujet,
      message,
    };

    try {
      const response = await fetch('src/backend/contact.php', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Le formulaire a été soumis avec succès
        // Vous pouvez ajouter ici un code pour gérer la réponse du serveur
      } else {
        console.error('Erreur lors de la soumission du formulaire');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire', error);
    }
  };

  return (
    <div>
      <h1>Contactez-nous</h1>
      <div className='containerform'>
      <form className="myForm" onSubmit={handleSubmit}>
        <p>Vous êtes :</p>
        <label>
          <input
            type="radio"
            name="type"
            value="particulier"
            onChange={(e) => setType(e.target.value)}
          />{' '}
          Particulier
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="professionnel"
            onChange={(e) => setType(e.target.value)}
          />{' '}
          Professionnel
        </label>

        <label>
          Sujet:
          <select
            name="sujet"
            value={sujet}
            onChange={(e) => setSujet(e.target.value)}
            required
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="Sujet 1">Particulier</option>
            <option value="Sujet 2">Entreprise</option>
            <option value="Sujet 3">TNS et prefessions libérales</option>
            
          </select>
        </label>

        <label>
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            type="email"
            placeholder="Adresse mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          <textarea
            placeholder="Votre message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>

        <button type="submit">Envoyer</button>
      </form>
      </div>
    </div>
  );
}

export default Contact;
