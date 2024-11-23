import React from 'react';
import './EventCard.css';

const EventCard = ({ name, time }) => {
  return (
    <div className="eventCard">
      <h3>{name}</h3>
      <p>Horário: {time || 'Não especificado'}</p>
    </div>
  );
};

export default EventCard;