import React, { useState } from 'react';
import EventCard from './EventCard';
import EventForm from './EventForm';
import './Events.css';

const Events = ({ date, events, onClose, onAddEvent }) => {
  const [isAddingEvent, setIsAddingEvent] = useState(false);

  const handleAddEvent = (newEvent) => {
    onAddEvent(newEvent);
    setIsAddingEvent(false);
  };

  return (
    <div className="backEvents">
      <div className="contEvents">
        <button className="closeEvents" onClick={onClose}>×</button>
        <h2>Eventos do Dia <br /> {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</h2>
        <div className="listEvents">
          {events.length > 0 ? (
            <div className="cardsContainer">
              {events.map((event, idx) => (
                <EventCard 
                  key={idx} 
                  name={event.name || "Evento sem nome"} 
                  time={event.time || "Sem horário"} 
                />
              ))}
            </div>
          ) : (
            <p className="noEventsMessage">Nenhum evento para este dia.</p>
          )}
          <button
            className="addNewEventBtn"
            onClick={() => setIsAddingEvent(true)}
          >
            NOVO EVENTO
          </button>
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

