import { useState } from 'react'
import "./Forgot.css"
import RichmoLogoRoxo from "../../assets/RichmoLogoRoxo.png"

const Forgot = () => {

  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log (username);
  }

  return (
    <div className='Forgot'>
      <div className='containerF'>
        <form onSubmit={handleSubmit}>
          <div className="logoContF">
            <img src={RichmoLogoRoxo} alt="RichmoLogo" className='logoImageF' />
          </div>
          <div className="textCont">
            <h1>Recupere sua senha</h1>
            <p>Informe seu e-mail abaixo e receba um link para <br/>cadastrar uma nova senha:</p>
          </div>
          <div className="inputsF">
            <input
            type="email" 
            placeholder='E-mail' 
            onChange={ (e) => setUsername(e.target.value) }/>
          </div>
          <button className="btnRecuperarF">RECUPERAR SENHA</button>
        </form>
      </div>
    </div>
  )
}

export default Forgot
