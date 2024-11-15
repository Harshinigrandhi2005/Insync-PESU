// src/components/Domains.js
import React from 'react';
import DomainCard from './DomainCard';
import './Domains.css';

const nlpImage = 'https://t4.ftcdn.net/jpg/06/33/58/59/360_F_633585902_KexTjslrwzOwK7X83VYCVT85nF4sKxjF.jpg';
const computerVisionImage = 'https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg';
const cyberSecurityImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZEaPvEfIbL6MnBTO0TGCXvOF30SepfSvfQ&s';

const Domains = () => {
    return (
        <div className="domains-container">
            <h1 className="domains-title">DOMAINS</h1>
            <div className="cards-container">
                <DomainCard 
                    title="NLP" 
                    image={nlpImage} 
                    problemStatus="Problem Statement Found" 
                    teamSize={4} 
                />
                <DomainCard 
                    title="Computer" 
                    image={computerVisionImage} 
                    problemStatus="Problem Statement Pending..." 
                    teamSize={7} 
                />
                <DomainCard 
                    title="Cyber" 
                    image={cyberSecurityImage} 
                    problemStatus="Problem Statement Found" 
                    teamSize={5} 
                />
            </div>
        </div>
    );
};

export default Domains;
