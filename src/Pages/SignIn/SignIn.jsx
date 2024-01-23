import "../../styles/sign.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../Components/BotaoLogin/Button";

const SignIn = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError(alert("Preencha todos os campos"));
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/refeicoes");
  };

  return (
    <>
      <span className="error-msg">{error}</span>
      <article className="container">
        <section className="sign-content">
          <h1>Faça o Login !</h1>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Digite o Email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <label>Senha:</label>
          <input
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />

          <div className="sign">
            <span className="account-ask">Não possui uma conta ? </span>
            <Link to="/signup" className="strong">
              Crie Aqui !
            </Link>
          </div>
          <Button Text="Login" onClick={handleLogin}></Button>
        </section>
      </article>
    </>
  );
};

export default SignIn;
