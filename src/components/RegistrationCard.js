// RegistrationCard.js
import React from 'react';
import Logo from './Logo';
import Countdown from './Countdown';
import './RegistrationCard.css';

const RegistrationCard = () => {
  return (
    
    <div className="registration-card">
      <Logo />
      <p className="registration-text">REGISTRATION ENDS IN:</p>
      <Countdown />
      <button className="register-button">REGISTER HERE</button>
    </div>
    
  );
};

export default RegistrationCard;