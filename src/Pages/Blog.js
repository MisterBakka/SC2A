import React from 'react';

const Blog = () => {
  return (
    <div>
      <h2>Articles du Blog</h2>
      <article>
        <h3>Titre de l'article 1</h3>
        <p>Contenu de l'article 1...</p>
      </article>
      <article>
        <h3>Titre de l'article 2</h3>
        <p>Contenu de l'article 2...</p>
      </article>
      {/* Ajoutez autant d'articles que nécessaire */}
    </div>
  );
};

export default Blog;
