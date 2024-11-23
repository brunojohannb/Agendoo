import React, { useState } from 'react';
import './EventForm.css';

const EventForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onSubmit({ name, time });
    }
  };

  return (
    <div className="backEventForm">
      <div className="contEventForm">
        <h3>Adicionar Novo Evento</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nome do Evento:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Horário do Evento:
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
          <div className="formButtons">
            <button type="submit">Adicionar</button>
            <button type="button" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;