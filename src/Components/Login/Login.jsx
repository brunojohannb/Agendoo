import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react"
import "./Login.css"

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
            <FaUser className="icon"/>
          </div>
          <div className="inputs">
            <input
            type="password" 
            placeholder='Senha'
            onChange={ (e) => setPassword(e.target.value) }/>
            <FaLock className="icon"/>
          </div>
          <button>ENTRAR</button>
          <div className="resetPassword">
            <a href="#">Esqueceu a senha?</a>
          </div>
        </form>
     </div>
  )
}

export default Login
