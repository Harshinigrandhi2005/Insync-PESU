import React from 'react';
import './Card.css';
import Button from './Button';

const Card = ({ title, roles, image, button1, button2 }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="card-roles">
          {roles.map((role, index) => (
            <p key={index}>{role}</p>
          ))}
        </div>
      </div>
      <div className="card-buttons">
        <Button text={button1.text} to="/about-club" />
        <Button text={button2.text} to="/results" />
      </div>
    </div>
  );
};

export default Card;