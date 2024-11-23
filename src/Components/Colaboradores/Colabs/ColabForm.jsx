import React, { useState } from 'react';
import './ColabForm.css';

const ColabForm = ({ isOpen, onClose, onSubmit }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [porcentagem, setPorcentagem] = useState('');
  const [cor, setCor] = useState('');

  const gerarCorAleatoria = () => {
    const cores = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#1ABC9C', '#E74C3C'];
    return cores[Math.floor(Math.random() * cores.length)];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !telefone || !porcentagem) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    const colaborador = {
      nome,
      email,
      telefone,
      porcentagem,
      cor: cor || gerarCorAleatoria(),
    };

    onSubmit(colaborador);
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Cadastrar Novo Colaborador</h2>
        <form onSubmit={handleSubmit} className="formColaborador">
          <div className="input-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do colaborador"
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email do colaborador"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="telefone">Número de Telefone:</label>
            <input
              type="text"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Número de telefone"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="porcentagem">Porcentagem:</label>
            <input
              type="number"
              id="porcentagem"
              value={porcentagem}
              onChange={(e) => setPorcentagem(e.target.value)}
              placeholder="Porcentagem"
              required
              min="0"
              max="100"
            />
          </div>

          <div className="input-group">
            <label htmlFor="cor">Cor (Opcional):</label>
            <input
              type="color"
              id="cor"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default ColabForm;