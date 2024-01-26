import { useState } from "react";
import { PropTypes } from 'prop-types';
import './style.css'

const CadastroRefeicao = ({ onAdicionarRefeicao }) => {
  const [novaRefeicao, setNovaRefeicao] = useState({
    nomeRefeicao: "",
    calorias: "",
    carboidratos: "",
    proteinas: "",
  });

  const handleInputChange = (e) => {
    setNovaRefeicao({
      ...novaRefeicao,
      [e.target.name]: e.target.value,
    });
  };

  const adicionarRefeicao = (e) => {
    e.preventDefault()

     if (
       novaRefeicao.nomeRefeicao === "" ||
       novaRefeicao.calorias === "" ||
       novaRefeicao.carboidratos === "" ||
       novaRefeicao.proteinas === ""
     ) {
       alert("Por favor, preencha todos os campos");
       return;
     }

    onAdicionarRefeicao(novaRefeicao);
    setNovaRefeicao({
      nomeRefeicao: "",
      calorias: "",
      carboidratos: "",
      proteinas: "",
    });
  };

  return (
    <form className="form-cadastro-refeicao" onSubmit={adicionarRefeicao}>
      <section className="campo-do-form">
        <label>Nome da Refeição:</label>
        <input
        maxLength="40"
          type="text"
          name="nomeRefeicao"
          value={novaRefeicao.nomeRefeicao}
          onChange={handleInputChange}
        />
      </section>
      <section className="campo-do-form">
        <label>Calorias:</label>
        <input
          type="number"
          name="calorias"
          value={novaRefeicao.calorias}
          onChange={handleInputChange}
        />
      </section>
      <section className="campo-do-form">
        <label>Carboidratos:</label>
        <input
          type="number"
          name="carboidratos"
          value={novaRefeicao.carboidratos}
          onChange={handleInputChange}
        />
      </section>
      <section className="campo-do-form">
        <label>Proteínas:</label>
        <input
          type="number"
          name="proteinas"
          value={novaRefeicao.proteinas}
          onChange={handleInputChange}
        />
      </section>
      <button className="btn-adicionar-refeicao">Adicionar</button>
    </form>
  );
};

CadastroRefeicao.propTypes = {
  onAdicionarRefeicao: PropTypes.func.isRequired
};

export default CadastroRefeicao;
