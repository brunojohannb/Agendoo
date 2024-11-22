import { useState } from 'react'
import "./Navbar.css"
import RichmoLogo from "../../assets/RichmoLogo.png"

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='navbarContainer'>
        <div className='logoContN'>
          <img src={RichmoLogo} alt="RichmoLogo" className='logoImage' />
        </div>
        <div className="dropdownContainer">
        <button onClick={toggleDropdown} className="dropdownButton">
          Conta 1
          <p>Usuario 1</p>
        </button>
        {isDropdownOpen && (
          <div className="dropdownMenu">
            <a href="#" className="dropdownItem">
              Conta 2
            </a>
            <a href="#" className="dropdownItem">
              Conta 3
            </a>
            <a href="#" className="dropdownItem">
              Conta 4
            </a>
          </div>
        )}
      </div>  
    </nav>
  )
}

export default Navbar
