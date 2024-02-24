import { useState } from "react";
import Styled from './Contato.module.css';

function Contancitu() {
  const [pesquisa, setPesquisa] = useState('');
  const [imagem, setImagem] = useState('');
  const [imagemB, setImagemB] = useState('');
  const [imagemS, setImagemS] = useState('');
  const [imagemSB, setImagemSB] = useState('');
  const [statos, setStatos] = useState([]);
  const [tipus, setTipus] = useState([]);
  const [erro, setErro] = useState('');
  const [styleClass, setStyleClass] = useState('');
  const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  const nomedosestatomuitolegal = {
    0: 'HP',
    1: 'ATTACK',
    2: 'DEFENSE',
    3: 'SPECIAL ATTACK',
    4: 'SPECIAL DEFENSE',
    5: 'SPEED',
  };

  async function consultarPokemon() {
    try {
      const response = await fetch(`${API_URL}${pesquisa}`);
      if (response.ok) {
        const data = await response.json();

        const stats = data.stats.map(valor => valor.base_stat);
        setStatos(stats);

        if (data.sprites && data.sprites.front_default, data.sprites && data.sprites.back_default, data.sprites && data.sprites.back_shiny, data.sprites && data.sprites.front_shiny) {
          setImagem(data.sprites.front_default);
          setImagemB(data.sprites.back_default);
          setImagemS(data.sprites.front_shiny);
          setImagemSB(data.sprites.back_shiny);
          setErro('');
        }

        let tipos = "";

        if (Array.isArray(data.types) && data.types.length >= 2) {
          tipos = `${data.types[0].type.name}, ${data.types[1].type.name}`;
          setTipus(tipos);
        } else if (Array.isArray(data.types) && data.types.length === 1) {
          tipos = data.types[0].type.name;
          setTipus(tipos);
        }

        const styledClass = tipos.toLowerCase() + '-type'; // Converte o tipo em classe CSS
        setStyleClass(styledClass);
      } else {
        setImagem('');
        setImagemB('');
        setImagemS('');
        setImagemSB('');
        setErro("Pokémon não encontrado.");
      }
    } catch (error) {
      console.error('Erro ao obter dados do servidor:', error.message);
      setImagem('');
      setImagemB('');
      setImagemS('');
      setImagemSB('');
      setStatos('');
      setErro("Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input className={Styled.text} type="text" onChange={(e) => setPesquisa(e.target.value)} />
        <button className={Styled.buton} type="button" onClick={consultarPokemon}>
          Pesquisar
        </button>
        O Pokémon pesquisado foi: {pesquisa} <br />
        {erro && <p>{erro}</p>}
        <div className={Styled.cardss}>
          <div className={Styled.card}>
            <div className={Styled.sprite}>
              {imagem && <img src={imagem} alt={pesquisa} />}
              {imagemB && <img src={imagemB} alt={pesquisa} />}
            </div>
            <div className={`${Styled.inscard} ${styleClass}`}>
              <h4>BASE</h4>
              {tipus && <b>{tipus}</b>}
              {statos.map((stat, index) => (
                <p key={index}>{nomedosestatomuitolegal[index]}: {stat}</p>
              ))}
            </div>
          </div>
          <div className={Styled.card}>
            <div className={Styled.sprite}>
              {imagemS && <img src={imagemS} alt={pesquisa} />}
              {imagemSB && <img src={imagemSB} alt={pesquisa} />}
            </div>
            <div className={`${Styled.inscard} ${styleClass}`}>
              <h4>SHINY</h4>
              {tipus && <b>{tipus}</b>}
              {statos.map((stat, index) => (
                <p key={index}>{nomedosestatomuitolegal[index]}: {stat}</p>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Contancitu;
