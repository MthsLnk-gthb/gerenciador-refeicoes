import './style.css'

const BotaoDeletar = ({handleDeletarRefeicao, index}) => {
  return (
    <>
      <button onClick={(e)=>{e.preventDefault(), handleDeletarRefeicao(index)}} className="botao-deletar">-</button>
    </>
  );
};

export default BotaoDeletar;
