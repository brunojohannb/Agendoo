import React from 'react'
import "./HomeMenu.css"

const HomeMenu = () => {
  return (
    <div className='HomeMenu'>
        <button className='navButton'>Calendario</button>
        <button className='navButton'>Clientes</button>
        <button className='navButton'>Colaboradoes</button>
        <button className='navButton'>Relatórios</button>
    </div>
  )
}

export default HomeMenu
