import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const SideBar = ({ setEvents }) => {
    const [filters, setFilters] = useState({
        workshop: true,
        conference: true,
        meeting: true,
        deadline: true,
        hackathon: true,
        ideathon: true,
        cultural: true,
    });
    const [allEvents, setAllEvents] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        date: '',
        title: '',
        description: '',
        category: 'workshop',
        reminder: 0,
    });

    // Fetch all events once when the component mounts
    useEffect(() => {
        axios.get('http://localhost:5001/calendar/events')
            .then((response) => {
                setAllEvents(response.data);
                filterEvents(response.data, filters);
            })
            .catch((error) => console.error('Error fetching events:', error));
    }, []);

    // Handle filter changes
    const updateFilters = (category) => {
        const newFilters = { ...filters, [category]: !filters[category] };
        setFilters(newFilters);
        filterEvents(allEvents, newFilters); // Filter events based on the updated filters
    };

    // Filter events based on selected filters
    const filterEvents = (events, currentFilters) => {
        const filteredEvents = events.filter(event => currentFilters[event.category]);
        setEvents(filteredEvents);  // Update the events in Calendar.js
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddEvent = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.date && formData.title && formData.category && formData.reminder >= 0) {
            const newEvent = { ...formData, reminder: parseInt(formData.reminder, 10) };

            axios.post('http://localhost:5001/calendar/events', newEvent)
                .then((response) => {
                    alert('Event added successfully!');
                    setShowForm(false);
                    setFormData({ date: '', title: '', description: '', category: 'workshop', reminder: 0 });
                    const updatedEvents = [...allEvents, response.data];
                    setAllEvents(updatedEvents);
                    filterEvents(updatedEvents, filters);

                    // Schedule Alarm (instead of notification)
                    if (newEvent.reminder > 0) {
                        const reminderTime = new Date(newEvent.date).getTime() - (newEvent.reminder * 60000);
                        const timeUntilReminder = reminderTime - Date.now();
                        if (timeUntilReminder > 0) {
                            setTimeout(() => {
                                alert(`Alarm: Event "${newEvent.title}" is starting soon!`);
                            }, timeUntilReminder);
                        }
                    }
                })
                .catch((error) => console.error('Error adding event:', error));
        } else {
            alert('Please fill out all required fields.');
        }
    };

    return (
        <div className="sidebar">
            <h2>Filter Events</h2>
            {Object.keys(filters).map((key) => (
                <div key={key}>
                    <input
                        type="checkbox"
                        checked={filters[key]}
                        onChange={() => updateFilters(key)}
                    />{' '}
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                </div>
            ))}

            <button id="add-event-btn" onClick={handleAddEvent}>Add Event</button>

            {showForm && (
                <form onSubmit={handleSubmit} className="event-form">
                    <h3>Add a New Event</h3>
                    <input type="date" name="date" value={formData.date} onChange={handleFormChange} required />
                    <input type="text" name="title" placeholder="Event Title" value={formData.title} onChange={handleFormChange} required />
                    <textarea name="description" placeholder="Event Description" value={formData.description} onChange={handleFormChange} rows="3" />
                    <select name="category" value={formData.category} onChange={handleFormChange} required>
                        <option value="workshop">Workshop</option>
                        <option value="conference">Conference</option>
                        <option value="meeting">Meeting</option>
                        <option value="deadline">Deadline</option>
                        <option value="hackathon">Hackathon</option>
                        <option value="ideathon">Ideathon</option>
                        <option value="cultural">Cultural</option>
                    </select>
                    <input type="number" name="reminder" placeholder="Reminder (minutes)" value={formData.reminder} onChange={handleFormChange} required />
                    <button type="submit">Save Event</button>
                </form>
            )}
        </div>
    );
};

export default SideBar;
