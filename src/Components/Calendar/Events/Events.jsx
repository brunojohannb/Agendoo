import React from 'react';
import EventCard from './EventCard';
import './Events.css';

const Events = ({ date, events, onClose, onAddEvent }) => {
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
            onClick={() => {
              const eventName = prompt('Digite o nome do evento:');
              const eventTime = prompt('Digite o horário do evento (opcional):');
              if (eventName) {
                onAddEvent({ name: eventName, time: eventTime });
              }
            }}
          >
            NOVO EVENTO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
