// src/components/ProjectPage/ProjectPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';  // Update path as needed
import Card from './Card';        // Update path as needed
import './ProjectPage.css';


const ProjectPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = (action, title) => {
    if (action === 'Apply Now') {
      navigate('/about-club'); // Redirect to AboutClub page on first button click
    } else if (action === 'Check for Results') {
      navigate('/results'); // Redirect to ResultsPage on second button click
    } else {
      alert(`${action} clicked for ${title}`); // Handle other actions (optional)
    }
  };

  const cardData = [
    {
      title: 'TEDx PESU',
      roles: ['SPONSORSHIP', 'MARKETING', 'DESIGN'],
      image: '/tedx-logo.png',  // Path to image in public folder
      button1: { text: 'Apply Now', onClick: () => handleButtonClick('Apply Now', 'TEDx PESU') },
      button2: { text: 'Check for Results', onClick: () => handleButtonClick('Check for Results', 'TEDx PESU') }
    },
    {
      title: 'MERAKI',
      roles: ['MODELLING', 'VIDEO EDITING', 'DESIGNERS'],
      image: '/meraki-logo.png',  // Path to image in public folder
      button1: { text: 'Apply Now', onClick: () => handleButtonClick('Apply Now', 'MERAKI') },
      button2: { text: 'Check for Results', onClick: () => handleButtonClick('Check for Results', 'MERAKI') }
    },
    {
      title: 'SHUNYA',
      roles: ['LOGISTICS', 'EVM', 'SOCIAL MEDIA'],
      image: '/shunya-logo.png',  // Path to image in public folder
      button1: { text: 'Apply Now', onClick: () => handleButtonClick('Apply Now', 'SHUNYA') },
      button2: { text: 'Check for Results', onClick: () => handleButtonClick('Check for Results', 'SHUNYA') }
    }
  ];

  return (
    <div className="project-page">
      <Header />
      <div className="card-container">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            roles={data.roles}
            image={data.image}
            button1={data.button1}
            button2={data.button2}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;