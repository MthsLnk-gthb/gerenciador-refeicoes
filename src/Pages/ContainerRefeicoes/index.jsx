import { useState } from "react";
//import "./style.css";
import CadastroRefeicao from "../../Components/CadastroRefeicao";
import CardRefeicao from "../../Components/CardRefeicao";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/BotaoLogin/Button";
import TotalRefeicoes from "../../Components/TotalRefeicoes";
import BotaoDeletar from "../../Components/BotaoDeletar";

const ContainerRefeicao = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const [refeicoes, setRefeicoes] = useState([]);

  const adicionarRefeicao = (novaRefeicao) => {
    setRefeicoes([...refeicoes, novaRefeicao]);
  };

  const handleDeletarRefeicao = (index) => {
    console.log(`O botão de deletar foi clicado no indice ${index}`);
    setRefeicoes((prevRefeicoes) => {
      const novaLista = [...prevRefeicoes];
      novaLista.splice(index, 1);
      return novaLista;
    });
  };

  const calcularTotaisNutricionais = () => {
    return refeicoes.reduce(
      (total, refeicao) => ({
        calorias: (total.calorias += parseInt(refeicao.calorias, 10)),
        carboidratos: (total.carboidratos += parseInt(
          refeicao.carboidratos,
          10
        )),
        proteinas: (total.proteinas += parseInt(refeicao.proteinas, 10)),
      }),
      { calorias: 0, carboidratos: 0, proteinas: 0 }
    );
  };

  const totaisNutricionais = calcularTotaisNutricionais();

  return (
    <>
      <Button Text="SignOut" onClick={() => [signout(), navigate("/")]} />
      <main>
        <CadastroRefeicao onAdicionarRefeicao={adicionarRefeicao} />
        {refeicoes.map((item, index) => (
          <section key={index}>
            <CardRefeicao refeicao={item} />
            <BotaoDeletar handleDeletarRefeicao={()=> handleDeletarRefeicao(index)} />
          </section>
        ))}

        {refeicoes.length >= 1 && (
          <TotalRefeicoes totaisNutricionais={totaisNutricionais} />
        )}
      </main>
    </>
  );
};

export default ContainerRefeicao;
