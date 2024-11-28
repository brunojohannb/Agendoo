import React, { useState, useEffect } from 'react';
import "./Home.css";
import HomeMenu from '../../Components/HomeMenu/HomeMenu';
import Calendar from '../../Components/Calendar/Calendar';
import Clientes from '../../Components/Clientes/Clientes';
import Colaboradores from '../../Components/Colaboradores/Colaboradores';
import Relatorios from '../../Components/Relatorios/Relatorios';
import { supabase } from "../../supabaseClient";

function Home() {
  const [activeComponent, setActiveComponent] = useState('calendar');
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Erro ao buscar usuário:", error.message);
      } else {
        setUser(data.user);
      }
    };

    fetchUser();
  }, []);

  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className='Home'>
      {user ? (
        <div className='bodyHome'>
          <HomeMenu userId={user.id} onMenuClick={handleMenuClick} />
          <div className="contentArea">
            {activeComponent === 'calendar' && <Calendar />}
            {activeComponent === 'clientes' && <Clientes />}
            {activeComponent === 'colaboradores' && <Colaboradores />}
            {activeComponent === 'relatorios' && <Relatorios />}
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Home;

