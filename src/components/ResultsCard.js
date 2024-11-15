import React from 'react';
import './ResultsCard.css';

function Card({ domain, candidates }) {
  return (
    <div className="card">
      <h2 className="domain-title">{domain}</h2>
      <ul className="candidates-list">
        {candidates.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <div className="buttons-container">
        <button className="button whatsapp">Whatsapp Group Invite</button>
      </div>
    </div>
  );
}

export default Card;