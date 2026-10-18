
function Livro({ titulo, autor, genero, ano }) {
  return (
    <div className="livro">
      <h2>{titulo}</h2>
      <p>Autor: {autor}</p>
      {genero && <p>Gênero: {genero}</p>}
      {ano && <p>Ano: {ano}</p>}
    </div>
  );
}

export default Livro;
