// src/Components/InstagramButton/InstagramButton.js
import React from 'react';
import './InstaButton.css'; // Ensure the CSS file is correctly named

const InstagramButton = () => {
  const handleClick = () => {
    window.location.href = 'https://www.instagram.com/tedxpesu/'; // Replace with the actual Instagram URL
  };

  return (
    <button onClick={handleClick} className="instagram-button">
      Check us out on Instagram!
    </button>
  );
};

export default InstagramButton; // Ensure this is a default export