import React from 'react';
import { Link } from 'react-router-dom';

const Stagiaire = ({ image, nom }) => (
  <div className="container" style={{ marginBottom: '20px' }}>
    <Link to={nom}>
      <img src={image} alt={nom} style={{ marginBottom: '10px' }} />
    </Link>
    <p className="name">{nom}</p>
  </div>
);

export default Stagiaire;