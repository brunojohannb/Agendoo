import { useState } from "react"
import "./Login.css"
import RichmoLogo from "../../assets/RichmoLogo.png"

import { Link } from "react-router-dom"

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log (username, password);
  }

  return (
    <div className="Login">
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="logoCont">
            <img src={RichmoLogo} alt="RichmoLogo" className='logoImage' />
          </div>
          <div className="inputs">
            <input
            type="email" 
            placeholder='E-mail' 
            onChange={ (e) => setUsername(e.target.value) }/>
          </div>
          <div className="inputs">
            <input
            type="password" 
            placeholder='Senha'
            onChange={ (e) => setPassword(e.target.value) }/>
          </div>
              <button className="btnEntrar">ENTRAR</button>
            <Link to="/CreateAcount">
              <button className="btnCriar">CRIAR UMA CONTA</button>
            </Link>
          <div className="resetPassword">
            <Link to="/ForgotPassword">Esqueceu a senha?</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login