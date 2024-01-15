import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ backgroundColor: '#333', padding: '10px' }}>
      <nav>
        <Link to="/" style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}>
          Liste des stagiaires
        </Link>
        <Link to="/add" style={{ color: 'white', textDecoration: 'none' }}>
          Ajouter un stagiaire
        </Link>
      </nav>
    </div>
  );
};

export default Header;
