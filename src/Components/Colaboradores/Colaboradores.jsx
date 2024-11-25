import React, { useState } from 'react';
import './Colaboradores.css';

import ColabForm from './Colabs/ColabForm';
import ColabCard from './Colabs/ColabCard';

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

      <div className='contCTopo'>
        <h1>Colaboradores</h1>
        <button onClick={openModal} className="btn-open-modal">
          Adicionar Colaborador
        </button>
      </div>

      <ColabForm
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddColaborador}
      />
      
      <div className="colaboradores-list">
        <div className="colaboradores-grid">
          {colaboradores.map((colaborador, index) => (
            <ColabCard
              key={index}
              nome={colaborador.nome}
              email={colaborador.email}
              telefone={colaborador.telefone}
              porcentagem={colaborador.porcentagem}
              cor={colaborador.cor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colaboradores;