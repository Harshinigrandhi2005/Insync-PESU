// src/components/DomainCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DomainCard.css'; // Assuming you have some styles for DomainCard

const DomainCard = ({ title, image, problemStatus, teamSize }) => {
    const navigate = useNavigate();

    // Function to handle click and navigate to details page
    const handleCardClick = () => {
        // Convert the title to a suitable URL format (e.g., "NLP" -> "nlp")
        const domainPath = title.toLowerCase().replace(/\s+/g, '-');
        navigate(`/domain/${domainPath}`);
    };

    return (
        <div className="domain-card" onClick={handleCardClick}>
            <img src={image} alt={`${title} Domain`} className="domain-image" />
            {/* <h2 className="domain-title">{title}</h2> */}
            <p className="domain-problem-status">{problemStatus}</p>
            <p className="domain-team-size">Team Size: {teamSize}</p>
        </div>
    );
};

export default DomainCard;
