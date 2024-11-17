import React, { useState, useEffect } from 'react';
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
import Sidebar from './components/SideBar';
import EventInfo from './components/EventInfo';

import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const dummyEvents = [
    { date: '2024-10-05', title: 'Team Workshop', description: 'A collaborative workshop.', category: 'workshop', reminder: 30 },
    { date: '2024-10-10', title: 'Tech Conference', description: 'Annual tech conference.', category: 'conference', reminder: 60 }
  ];

  // Set the dummy events initially
  useEffect(() => {
    setEvents(dummyEvents);
    setFilteredEvents(dummyEvents);
  }, []);

  //alarm logic
  

  // Filter events based on the selected categories
  const filterEvents = (filters) => {
    const filtered = events.filter(event => filters[event.category]);
    setFilteredEvents(filtered);
  };

  // Add a new event to the list
  const addEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents);
  };

  return (
    <Router>
      <Navbar /> {/* Always display the navbar */}
      <div className="App">
        <div className="container">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />

            {/* Calendar Route with Sidebar */}
            <Route 
              path="/calendar" 
              element={
                <>
                  <Sidebar filterEvents={filterEvents} addEvent={addEvent} />
                  <Calendar events={filteredEvents} setSelectedEvent={setSelectedEvent} />
                </>
              }
            />

            <Route path="/domains" element={<Domains />} />
            <Route path="/projectpage" element={<ProjectPage />} />
            <Route path="/results" element={<ResultsPage />} />

            {/* New Route for About Club */}
            <Route path="/about-club" element={<AboutClub />} />

            {/* Dynamic Route for Domain Details */}
            <Route path="/domain/:domainId" element={<DomainDetails />} />
          </Routes>
          
          {/* Event Info Section */}
          {selectedEvent && <EventInfo selectedEvent={selectedEvent} />}
        </div>
      </div>
    </Router>
  );
}

export default App;
