import React from 'react';
import './EventCard.css';

const EventCard = ({ name, time, ftime}) => {
  return (
    <div className="eventCard">
      <h3>{name}</h3>
      <p>Inicio do Evento: {time || 'Não especificado'}</p>
      <p>Final do Evento: {ftime || 'Não especificado'}</p>
    </div>
  );
};

export default EventCard;