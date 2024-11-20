import { useState } from 'react'
import "./Forgot.css"

const Forgot = () => {

  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log (username);
  }

  return (
    <div>
      <div className='containerF'>
        <form onSubmit={handleSubmit}>
          <h1 className="logo">RICHMO</h1>
          <div className="textCont">
            <h1>Recupere sua Senha</h1>
            <p>Informe seu e-mail abaixo e receba um link para cadastrar <br/> uma nova senha:</p>
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
