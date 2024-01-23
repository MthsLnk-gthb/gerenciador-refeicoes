import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../Components/BotaoLogin/Button";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <main className="container">
      <h2 className="title">Home</h2>
      <Button Text="SignOut" onClick={() => [signout(), navigate("/")]} />
    </main>
  );
};

export default Home;
