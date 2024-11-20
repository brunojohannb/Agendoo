import React from 'react'
import "./Create.css"
import RichmoLogo from "../../assets/RichmoLogo.png"


const Create = () => {
  return (
      <div className='containerC'>
        <form>
          <div className="logoContC">
            <img src={RichmoLogo} alt="RichmoLogo" className='logoImageC'/>
          </div>
          <div className="textContC">
            <h1>Abra sua conta</h1>
            <p>solicite uma nova conta entrando em contato conosco através do Whattsapp:</p>
          </div>
          <button className="btnRecuperarC">SOLICITAR CONTA</button>
        </form>
      </div>
  )
}

export default Create