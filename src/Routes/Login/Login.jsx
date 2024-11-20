import { useState } from "react"
import "./Login.css"

import { Link } from "react-router-dom"

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log (username, password);
  }

  return (
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <h1 className="logo">RICHMO</h1>
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
          <button className="btnCriar" href="./Create/Create.jsx">CRIAR UMA CONTA</button>
          <div className="resetPassword">
            <Link to="/ForgotPassword">Esqueceu a senha?</Link>
          </div>
        </form>
      </div>
  )
}

export default Login