//src/components/DomainDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './DomainDetails.css'; // Make sure this path matches your project structure

const DomainDetails = () => {
    const { domainId } = useParams();

    // Example data (replace with actual data)
    const domainData = {
        nlp: {
            description: "Natural Language Processing (NLP) is a field of AI focused on the interaction between computers and humans using natural language.",
            members: [
                { name: "John Doe", contact: "john@example.com", role: "Team Lead" },
                { name: "Jane Smith", contact: "jane@example.com", role: "Data Scientist" }
            ]
        },
        "computer-vision": {
            description: "Computer Vision involves teaching computers to interpret and understand the visual world.",
            members: [
                { name: "Alice Brown", contact: "alice@example.com", role: "CV Engineer" },
                { name: "Bob White", contact: "bob@example.com", role: "ML Specialist" }
            ]
        },
        "cyber-security": {
            description: "Cyber Security is the practice of protecting systems, networks, and programs from digital attacks.",
            members: [
                { name: "Tom Green", contact: "tom@example.com", role: "Security Analyst" },
                { name: "Sam Blue", contact: "sam@example.com", role: "Threat Hunter" }
            ]
        }
    };

    const details = domainData[domainId];

    if (!details) {
        return <div className="domain-details-container">Domain not found</div>;
    }

    return (
        <div className="domain-details-container">
            <h1 className="domain-details-title">{domainId.replace("-", " ").toUpperCase()}</h1>
            <p className="domain-details-description">{details.description}</p>
            <h2 className="members-title">Enrolled Members:</h2>
            <div className="members-list">
                {details.members.map((member, index) => (
                    <div className="member-info" key={index}>
                        <div className="member-details">
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">Role: {member.role}</p>
                            <p className="contact-info">
                                <i className="fas fa-envelope"></i> {member.contact}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DomainDetails;
