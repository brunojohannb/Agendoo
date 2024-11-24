import React, { useState } from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
import HomeMenu from '../../Components/HomeMenu/HomeMenu'
import Calendar from '../../Components/Calendar/Calendar'
import Clientes from '../../Components/Clientes/Clientes'
import Colaboradores from '../../Components/Colaboradores/Colaboradores'
import Relatorios from '../../Components/Relatorios/Relatorios'

function Home() {
  
  const [activeComponent, setActiveComponent] = useState('calendar');

  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className='Home'>
      <div className='bodyHome'>
        <HomeMenu onMenuClick={handleMenuClick} />
        <div className="contentArea">
          {activeComponent === 'calendar' && <Calendar />}
          {activeComponent === 'clientes' && <Clientes />}
          {activeComponent === 'colaboradores' && <Colaboradores />}
          {activeComponent === 'relatorios' && <Relatorios />}
        </div>
      </div>
    </div>
  )
}

export default Home
