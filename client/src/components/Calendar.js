import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const Calendar = ({ setSelectedEvent }) => {
    const [events, setEvents] = useState([]); // Filtered events
    const daysInMonth = new Date(2024, 11, 0).getDate(); // November 2024

    // Fetch events from the backend when the component loads
    useEffect(() => {
        axios.get('http://localhost:5001/calendar/events')
            .then((response) => setEvents(response.data)) // Set initial events
            .catch((error) => console.error('Error fetching events:', error));
    }, []);

    const getEventsForDay = (day) => events.filter(event => new Date(event.date).getDate() === day);

    const getEventColor = (category) => {
        switch (category) {
            case 'workshop': return 'blue';
            case 'conference': return 'green';
            case 'meeting': return 'purple';
            case 'deadline': return 'red';
            case 'hackathon': return 'orange';
            case 'ideathon': return 'cyan';
            case 'cultural': return 'yellow';
            default: return 'gray';
        }
    };

    return (
        <div className="calendar">
            <div className="month">October 2024</div>
    
            <div className="days">
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
                    <div key={day} className="day" onClick={() => setSelectedEvent(getEventsForDay(day)[0])}>
                        {day}
                        {getEventsForDay(day).map(event => (
                            <div
                                key={event._id}
                                className={`event ${event.category}`}
                                style={{ backgroundColor: getEventColor(event.category) }}
                            >
                                {event.title}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;