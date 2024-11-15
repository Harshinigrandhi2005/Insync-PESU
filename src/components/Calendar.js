import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');

  useEffect(() => {
    // You can load events from local storage or API if needed
  }, []);

  const handleDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleEventTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  const addEvent = () => {
    if (eventTitle && eventDate) {
      setEvents([...events, { title: eventTitle, date: eventDate }]);
      setEventTitle('');
      setEventDate('');
    }
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const daysInMonth = () => {
    const numOfDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const days = [];
    for (let i = 1; i <= numOfDays; i++) {
      days.push(i);
    }
    return days;
  };

  const getDayOfWeek = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return date.getDay();
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Prev</button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>

      <div className="calendar">
        <div className="days-of-week">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendar-days">
          {Array(getDayOfWeek(1)).fill('').map((_, index) => (
            <div key={index}></div>
          ))}
          {daysInMonth().map((day) => (
            <div key={day} className="calendar-day">
              {day}
            </div>
          ))}
        </div>
      </div>

      <div className="event-section">
        <input
          type="date"
          value={eventDate}
          onChange={handleDateChange}
          className="event-date-input"
        />
        <input
          type="text"
          value={eventTitle}
          onChange={handleEventTitleChange}
          placeholder="Event Title"
          className="event-title-input"
        />
        <button onClick={addEvent} className="add-event-button">Add Event</button>
      </div>

      <div className="event-list">
        <h3>Events</h3>
        {events.map((event, index) => (
          <div key={index} className="event">
            <p>{event.title} on {event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
