import { useState } from "react";
import { PropTypes } from 'prop-types';


const CadastroRefeicao = ({ onAdicionarRefeicao }) => {
  const [novaRefeicao, setNovaRefeicao] = useState({
    nomeRefeicao: "",
    calorias: 0,
    carboidratos: 0,
    proteinas: 0,
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
    <form className="form-cadastro-refeicao">
      <section>
        <label>Nome da Refeição:</label>
        <input
          type="text"
          name="nomeRefeicao"
          value={novaRefeicao.nomeRefeicao}
          onChange={handleInputChange}
        />
      </section>
      <section>
        <label>Calorias:</label>
        <input
          type="number"
          name="calorias"
          value={novaRefeicao.calorias}
          onChange={handleInputChange}
        />
      </section>
      <section>
        <label>Carboidratos:</label>
        <input
          type="number"
          name="carboidratos"
          value={novaRefeicao.carboidratos}
          onChange={handleInputChange}
        />
      </section>
      <section>
        <label>Proteínas:</label>
        <input
          type="number"
          name="proteinas"
          value={novaRefeicao.proteinas}
          onChange={handleInputChange}
        />
      </section>
      <button onClick={adicionarRefeicao}>Adicionar Refeição</button>
    </form>
  );
};

CadastroRefeicao.propTypes = {
  onAdicionarRefeicao: PropTypes.func.isRequired
};

export default CadastroRefeicao;
