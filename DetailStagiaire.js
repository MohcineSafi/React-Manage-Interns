import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const DetailStagiaire = () => {
  const { nom } = useParams();
  const stagiaire = useSelector((state) =>
    state.find((stagiaire) => stagiaire.nom === nom)
  );

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <Link to={'/'} style={{ display: 'block', marginBottom: '10px' }}>
        Back
      </Link>
      <img src={stagiaire.image} alt={stagiaire.nom} style={{ marginBottom: '10px' }} />
      <p className="name">{stagiaire.nom}</p>
      <p className="name">{stagiaire.prenom}</p>
      <p className="name">{stagiaire.filiere}</p>
    </div>
  );
};

export default DetailStagiaire;