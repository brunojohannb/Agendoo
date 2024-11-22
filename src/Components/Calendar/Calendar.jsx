import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const generateCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendar = [];

    for (let i = 0; i < firstDay; i++) calendar.push(null);
    for (let day = 1; day <= daysInMonth; day++) calendar.push(day);

    return calendar;
  };

  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

  const addEvent = (day) => {
    const eventName = prompt('Digite o nome do evento:');
    if (eventName) {
      setEvents([...events, { date: new Date(currentDate.getFullYear(), currentDate.getMonth(), day), name: eventName }]);
    }
  };

  const days = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth} className="calendar-button">←</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long' }).toUpperCase()} {currentDate.getFullYear()}</h2>
        <button onClick={nextMonth} className="calendar-button">→</button>
      </div>
      <div className="calendar-grid">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, index) => (
          <div key={index} className="calendar-day-header">{day}</div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day ? 'calendar-day-active' : ''}`}
            onClick={() => day && addEvent(day)}
          >
            <span>{day}</span>
            {events
              .filter((event) => event.date.getDate() === day && event.date.getMonth() === currentDate.getMonth())
              .map((event, idx) => (
                <div key={idx} className="calendar-event">{event.name}</div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
