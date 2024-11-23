import React from 'react'
import "./HomeMenu.css"

const HomeMenu = ({ onMenuClick }) => {
  return (
    <div className='HomeMenu'>
        <button className='navButton' onClick={() => onMenuClick('calendar')}>Calendário</button>
        <button className='navButton' onClick={() => onMenuClick('clientes')}>Clientes</button>
        <button className='navButton' onClick={() => onMenuClick('colaboradores')}>Colaboradoes</button>
        <button className='navButton' onClick={() => onMenuClick('relatorios')}>Relatórios</button>
    </div>
  )
}

export default HomeMenu
