import React from 'react';
import Card from './ResultsCard';
import { Link } from 'react-router-dom';
import './ResultsPage.css';

const ResultsPage = () => {
  return (
    <div className="app-container">
      <div className="results-header">
        <h1 className="title">Shortlisted Candidates</h1>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
      <div className="cards-container">
        <Card
          domain="EVM DOMAIN"
          candidates={['Aarav', 'Ananya', 'Rohan', 'Ishita', 'Dev', 'Meera', 'Arjun', 'Priya']}
        />
        <Card
          domain="LOGISTICS"
          candidates={['Akshay', 'Kavya', 'Neha', 'Rajesh', 'Sanya']}
        />
        <Card
          domain="DESIGN"
          candidates={['Arjun', 'Meera', 'Rohan', 'Priya', 'Tanvi', 'Manish', 'Anjali', 'Suresh']}
        />
      </div>
    </div>
  );
};

export default ResultsPage;