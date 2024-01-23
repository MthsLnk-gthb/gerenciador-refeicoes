import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../Components/BotaoLogin/Button";
import "../../styles/sign.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!email | !name | !password) {
      setError(alert("Preencha todos os campos."));
      return;
    }

    const res = signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário registrado com sucesso");
    navigate("/");
  };

  return (
    <>
      <span className="error-msg">{error}</span>
      <article className="container">
        <section className="sign-content">
          <h1>Bem Vindo(a) !</h1>

          <label>Nome:</label>
          <input
            type="email"
            placeholder="Nome do Usuário"
            value={name}
            onChange={(e) => [setName(e.target.value), setError("")]}
          />

          <label>Email:</label>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />

          <label>Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />

          <div className="sign">
            <span className="account-ask">Já possui uma? </span>
            <Link to="/signin" className="strong">
              Login !
            </Link>
          </div>
          <Button Text="Cadastrar!" onClick={handleSignUp}></Button>
        </section>
      </article>
    </>
  );
};

export default SignUp;
