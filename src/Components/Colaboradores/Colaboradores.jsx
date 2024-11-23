import React, { useState } from 'react';
import './Colaboradores.css';

import ColabForm from './Colabs/ColabForm';

const Colaboradores = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="contColaboradores">
      <h1>Colaboradores</h1>
      
      <button onClick={openModal} className="btn-open-modal">
        Novo
      </button>

      <ColabForm
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddColaborador}
      />
      
      <div className="colaboradores-list">
        <h2>Colaboradores Cadastrados</h2>
        <ul>
          {colaboradores.map((colaborador, index) => (
            <li key={index} style={{ backgroundColor: colaborador.cor }}>
              <strong>{colaborador.nome}</strong> - {colaborador.email} - {colaborador.telefone} - {colaborador.porcentagem}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Colaboradores;