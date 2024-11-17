import React from 'react';
import './styles.css';


const EventInfo = ({ selectedEvent }) => {
    return (
        <div className="event-info">
            <h2>Event Info</h2>
            {selectedEvent ? (
                <>
                    <strong>{selectedEvent.title}</strong> - {selectedEvent.description}<br />
                    <span>Category: {selectedEvent.category}</span><br />
                    <span>Reminder: {selectedEvent.reminder} minutes before</span>
                </>
            ) : (
                <p>Select a date to view events.</p>
            )}
        </div>
    );
};

export default EventInfo;
