import { PropTypes } from "prop-types";

const TotalRefeicoes = ({ totaisNutricionais }) => {
  return (
    <div className="totais-nutricionais">
      <h3>Totais Nutricionais:</h3>
      <p>Calorias: {totaisNutricionais.calorias}</p>
      <p>Carboidratos: {totaisNutricionais.carboidratos}g</p>
      <p>Proteínas: {totaisNutricionais.proteinas}g</p>
    </div>
  );
};

export default TotalRefeicoes;

TotalRefeicoes.propTypes = {
  totaisNutricionais: PropTypes.object.isRequired,
};
