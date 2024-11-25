import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import EventCard from './EventCard';
import EventForm from './EventForm';
import './Events.css';

const Events = ({ date, events, onClose, onAddEvent }) => {
  const [isAddingEvent, setIsAddingEvent] = useState(false);

  const handleAddEvent = (newEvent) => {
    onAddEvent(newEvent);
    setIsAddingEvent(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('backEvents')) {
      onClose();
    }
  };

  return (
    <div className="backEvents" onClick={handleBackdropClick}>
      <div className="contEvents" onClick={(e) => e.stopPropagation()}>
        <div className="topContEvents">
          <button className="closeEvents" onClick={onClose}>×</button>
          <h2>Eventos do Dia</h2>
          <h1>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</h1>
        </div>
        <div className="listEvents">
          <div className="gridContainer">
            {events.map((event, idx) => (
              <EventCard
                key={idx}
                name={event.name || "Evento sem nome"}
                time={event.time || "Sem horário"}
              />
            ))}
            {!isAddingEvent && (
              <button
                className="addNewEventBtn"
                onClick={() => setIsAddingEvent(true)}
              >
                <FiPlus />
              </button>
            )}
          </div>
        </div>
      </div>
      {isAddingEvent && (
        <EventForm
          onSubmit={handleAddEvent}
          onCancel={() => setIsAddingEvent(false)}
        />
      )}
    </div>
  );
};

export default Events;


