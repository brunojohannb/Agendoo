import React from 'react';
import './ColabCard.css';

const ColabCard = ({ nome, email, telefone, porcentagem, cor }) => {
  return (
    <div className="colaborador-card">
      <h3>{nome}</h3>
      <p>Email: {email}</p>
      <p>Telefone: {telefone}</p>
      <p>Porcentagem: {porcentagem}%</p>
    </div>
  );
};

export default ColabCard;
