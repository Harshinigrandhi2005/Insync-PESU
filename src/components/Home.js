// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="background"></div>
            <div className="text">
                INSYNC<span>@PESU</span>
            </div>
            <a href="/about">
                <button className="start-btn">Let's Get Started</button>
            </a>
        </div>
    );
};

export default Home;
