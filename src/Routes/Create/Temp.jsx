import React from 'react'
import "./Create.css"
import RichmoLogoRoxo from "../../assets/RichmoLogoRoxo.png"


const Create = () => {
  return (
    <div className='Create'>
      <div className='containerC'>
        <form>
          <div className="logoContC">
            <img src={RichmoLogoRoxo} alt="RichmoLogo" className='logoImageC'/>
          </div>
          <div className="textContC">
            <h1>Abra sua conta</h1>
            <p>Solicite uma nova conta entrando em contato conosco através do WhatsApp:</p>
          </div>
          <button className="btnRecuperarC">SOLICITAR CONTA</button>
        </form>
      </div>
    </div>
  )
}

export default Create