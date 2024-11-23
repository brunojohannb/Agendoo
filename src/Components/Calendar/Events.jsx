import React from 'react';
import './Events.css';

const Events = ({ date, events, onClose, onAddEvent }) => {
  return (
    <div className="events-overlay">
      <div className="events-content">
        <button className="close-events" onClick={onClose}>×</button>
        <h2>Eventos do Dia {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</h2>
        <ul>
          {events.length > 0 ? (
            events.map((event, idx) => <li key={idx}>{event.name}</li>)
          ) : (
            <p>Nenhum evento para este dia.</p>
          )}
        </ul>
        <button
          className="add-event-button"
          onClick={() => {
            const eventName = prompt('Digite o nome do evento:');
            onAddEvent(eventName);
          }}
        >
          Adicionar Evento
        </button>
      </div>
    </div>
  );
};

export default Events;
