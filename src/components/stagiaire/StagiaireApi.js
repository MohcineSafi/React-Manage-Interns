import React, { useEffect, useState } from 'react';

function StagiaireApi(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://ofppt.ma/api/stagiaires')
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Filiere</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stagiaire, key) => (
            <tr key={key}>
              <th>
                <img src={stagiaire.image} alt="" style={{ width: '50px' }} />
              </th>
              <th>{stagiaire.nom}</th>
              <th>{stagiaire.prenom}</th>
              <th>{stagiaire.filiere}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StagiaireApi;