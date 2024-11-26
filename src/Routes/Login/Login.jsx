import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import RichmoLogo from "../../assets/RichmoLogo.png";
import { supabase } from "../../supabaseClient"; 

const Login = () => {
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");  
  const [errorMessage, setErrorMessage] = useState("");  

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
      });

      
      if (error) {
        setErrorMessage(error.message); 
      } else {
        console.log("Usuário logado com sucesso:", data);
        navigate("/Home");
      }
    } catch (error) {
      setErrorMessage("Erro inesperado. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <div className="Login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="logoCont">
            <img src={RichmoLogo} alt="RichmoLogo" className="logoImageL" />
          </div>
          <div className="inputs">
            <input
              className="inputEmail"
              type="email"
              placeholder="E-mail"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="inputs">
            <input
              className="inputPassword"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button className="btnEntrar" type="submit">
            ENTRAR
          </button>
          <Link to="/CreateAcount">
            <button className="btnCriar" type="button">
              CRIAR UMA CONTA
            </button>
          </Link>
          <div className="resetPassword">
            <Link to="/ForgotPassword">Esqueceu a senha?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

