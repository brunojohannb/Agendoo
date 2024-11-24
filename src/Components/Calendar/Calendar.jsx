import React, { useState } from 'react';
import './Calendar.css';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';

import Events from './Events/Events';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showEvents, setShowEvents] = useState(false);
  const [viewMode, setViewMode] = useState('month');

  const generateMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendar = [];

    for (let i = 0; i < firstDay; i++) calendar.push(null);
    for (let day = 1; day <= daysInMonth; day++) calendar.push(day);

    return calendar;
  };

  const generateWeek = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    const weekDays = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(day);
    }

    return weekDays;
  };

  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

  const nextWeek = () => {
    const nextWeekDate = new Date(currentDate);
    nextWeekDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(nextWeekDate);
  };

  const prevWeek = () => {
    const prevWeekDate = new Date(currentDate);
    prevWeekDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(prevWeekDate);
  };

  const openEvents = (day) => {
    setSelectedDay(day);
    setShowEvents(true);
  };

  const closeEvents = () => {
    setShowEvents(false);
    setSelectedDay(null);
  };

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, { ...newEvent, date: selectedDay }]);
  };

  const monthDays = generateMonth(currentDate.getFullYear(), currentDate.getMonth());
  const weekDays = generateWeek(currentDate);

  const selectedDayEvents = events.filter(
    (event) =>
      selectedDay &&
      event.date.getDate() === selectedDay.getDate() &&
      event.date.getMonth() === selectedDay.getMonth()
  );

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className='calendarArrowsCont'>
          <button
            onClick={viewMode === 'month' ? prevMonth : prevWeek}
            className="calendar-button left-arrow"
          >
            <FiArrowLeftCircle />
          </button>

          <h2>
            {viewMode === 'month'
              ? `${currentDate.toLocaleString('default', { month: 'long' }).toUpperCase()} ${currentDate.getFullYear()}`
              : `Semana de ${weekDays[0].toLocaleDateString()} a ${weekDays[6].toLocaleDateString()}`}
          </h2>

          <button
            onClick={viewMode === 'month' ? nextMonth : nextWeek}
            className="calendar-button right-arrow"
          >
            <FiArrowRightCircle />
          </button>
        </div>

        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
          className="calendar-view-dropdown"
        >
          <option value="month">Mês</option>
          <option value="week">Semana</option>
        </select>
      </div>

      <div className={`calendar-grid ${viewMode === 'week' ? 'week-view' : ''}`}>
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, index) => (
          <div key={index} className="calendar-day-header">{day}</div>
        ))}

        {viewMode === 'month' &&
          monthDays.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${day ? 'calendar-day-active' : ''}`}
              onClick={() =>
                day && openEvents(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
              }
            >
              <span>{day}</span>
              {events
                .filter(
                  (event) =>
                    event.date.getDate() === day &&
                    event.date.getMonth() === currentDate.getMonth()
                )
                .map((event, idx) => (
                  <div key={idx} className="calendar-event">{event.name}</div>
                ))}
            </div>
          ))}

        {viewMode === 'week' &&
          weekDays.map((day, index) => (
            <div
              key={index}
              className="calendar-day calendar-day-active"
              onClick={() => openEvents(day)}
            >
              <span>{day.getDate()}</span>
              {events
                .filter(
                  (event) =>
                    event.date.getDate() === day.getDate() &&
                    event.date.getMonth() === day.getMonth()
                )
                .map((event, idx) => (
                  <div key={idx} className="calendar-event">{event.name}</div>
                ))}
            </div>
          ))}
      </div>

      {showEvents && (
        <Events
          date={selectedDay}
          events={selectedDayEvents}
          onClose={closeEvents}
          onAddEvent={addEvent}
        />
      )}
    </div>
  );
};

export default Calendar;
