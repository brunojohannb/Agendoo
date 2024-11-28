import React, { useState, useEffect } from 'react';
import './HomeMenu.css';
import RichmoLogo from "../../assets/RichmoLogo.png";
import { FaCalendarAlt, FaUsers, FaUserFriends, FaFileAlt } from 'react-icons/fa';
import { supabase } from "../../supabaseClient";

const HomeMenu = ({ userId, onMenuClick }) => {
  const [activeButton, setActiveButton] = useState('calendar');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userAccounts, setUserAccounts] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  const fetchUserAccounts = async (userId) => {
    try {
      const { data, error } = await supabase
        .from("user_accounts")
        .select("account_id, accounts(name)")
        .eq("user_id", userId);

      if (error) throw error;

      const accounts = data.map((item) => ({ id: item.account_id, name: item.accounts.name }));
      setUserAccounts(accounts);

    
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      console.error("Erro ao buscar contas do usuário:", error.message);
    }
  };

 
  const fetchUserEmail = async () => {
    const { data: user } = await supabase.auth.getUser();
    if (user) {
      setUserEmail(user.email);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserAccounts(userId);
      fetchUserEmail();
    }
  }, [userId]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    onMenuClick(buttonName);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAccountChange = (account) => {
    setCurrentAccount(account);
    setIsDropdownOpen(false);
  };

  return (
    <div className="HomeMenu">
      <img src={RichmoLogo} alt="RichmoLogo" className="logoImage" />
      <div className="homeMenuBtns">
        <button
          className={`navButton ${activeButton === 'calendar' ? 'active' : ''}`}
          onClick={() => handleButtonClick('calendar')}
        >
          <FaCalendarAlt className="navIcon" /> Calendário
        </button>
        <button
          className={`navButton ${activeButton === 'clientes' ? 'active' : ''}`}
          onClick={() => handleButtonClick('clientes')}
        >
          <FaUsers className="navIcon" /> Clientes
        </button>
        <button
          className={`navButton ${activeButton === 'colaboradores' ? 'active' : ''}`}
          onClick={() => handleButtonClick('colaboradores')}
        >
          <FaUserFriends className="navIcon" /> Colaboradores
        </button>
        <button
          className={`navButton ${activeButton === 'relatorios' ? 'active' : ''}`}
          onClick={() => handleButtonClick('relatorios')}
        >
          <FaFileAlt className="navIcon" /> Relatórios
        </button>
      </div>

      <div className="HomeAcounts">
        {currentAccount ? (
          <button onClick={toggleDropdown} className="dropdownButton">
            {currentAccount.name}
            <p>{userEmail}</p>
          </button>
        ) : (
          <p>Nenhuma conta vinculada</p>
        )}

        {isDropdownOpen && userAccounts.length > 0 && (
          <div className="dropdownMenu">
            {userAccounts.map((account) => (
              <button
                key={account.id}
                className="dropdownItem"
                onClick={() => handleAccountChange(account)}
              >
                {account.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeMenu;

