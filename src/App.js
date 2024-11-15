import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Calendar from './components/Calendar'; 
import Domains from './components/Domains';
import DomainDetails from './components/DomainDetails';
import ProjectPage from './components/ProjectPage';
import ResultsPage from './components/ResultsPage';
import AboutClub from './components/AboutClubPage'; // AboutClub component

import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Always display the navbar */}
      <div className="App">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/projectpage" element={<ProjectPage />} />
          <Route path="/results" element={<ResultsPage />} />

          {/* New Route for About Club */}
          <Route path="/about-club" element={<AboutClub />} />

          {/* Dynamic Route for Domain Details */}
          <Route path="/domain/:domainId" element={<DomainDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
