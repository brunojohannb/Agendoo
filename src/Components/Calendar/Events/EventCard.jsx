import React from 'react';
import './EventCard.css';

const EventCard = ({ name, time, ftime}) => {
  return (
    <div className="eventCard">
      <h3>{name}</h3>
      <p>Inicio: {time}</p>
      <p>Final: {ftime || '--'}</p>
    </div>
  );
};

export default EventCard;