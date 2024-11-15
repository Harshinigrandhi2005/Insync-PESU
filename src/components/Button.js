import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button onClick={handleClick} className="button">
      {text}
    </button>
  );
};

export default Button;