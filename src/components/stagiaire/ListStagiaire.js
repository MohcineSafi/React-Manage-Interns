import React from 'react';
import { useSelector } from 'react-redux';
import Stagiaire from './Stagiaire';

const ListStagiaire = () => {
  const stagiaires = useSelector((state) => state);

  return (
    <div className="container" style={{ marginTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {stagiaires.map((stagiaire, key) => (
        <div key={key} style={{ border: '1px solid #ccc', padding: '61px' }}>
          <Stagiaire image={stagiaire.image} nom={stagiaire.nom} />
        </div>
      ))}
    </div>
  );
};

export default ListStagiaire;
