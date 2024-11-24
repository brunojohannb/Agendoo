import React, { useState } from 'react';
import './HomeMenu.css';
import RichmoLogo from "../../assets/RichmoLogo.png"
import { FaCalendarAlt, FaUsers, FaUserFriends, FaFileAlt } from 'react-icons/fa';

const HomeMenu = ({ onMenuClick }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    onMenuClick(buttonName);
  };

  return (
    <div className='HomeMenu'>
      <img src={RichmoLogo} alt="RichmoLogo" className='logoImage' />
      <div className='homeMenuBtns'>
        <button
          className={`navButton ${activeButton === 'calendar' ? 'active' : ''}`}
          onClick={() => handleButtonClick('calendar')}
        >
          <FaCalendarAlt className='navIcon' /> Calendário
        </button>
        <button
          className={`navButton ${activeButton === 'clientes' ? 'active' : ''}`}
          onClick={() => handleButtonClick('clientes')}
        >
          <FaUsers className='navIcon' /> Clientes
        </button>
        <button
          className={`navButton ${activeButton === 'colaboradores' ? 'active' : ''}`}
          onClick={() => handleButtonClick('colaboradores')}
        >
          <FaUserFriends className='navIcon' /> Colaboradores
        </button>
        <button
          className={`navButton ${activeButton === 'relatorios' ? 'active' : ''}`}
          onClick={() => handleButtonClick('relatorios')}
        >
          <FaFileAlt className='navIcon' /> Relatórios
        </button>
      </div>
    </div>
  );
};

export default HomeMenu;

