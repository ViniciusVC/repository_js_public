//import './header.css';
import {React} from "react";


function Header({menuClick}) {

  const setJanelaCaptura = () => {
    let temp = "JanelaCaptura";
    menuClick(temp);
  };

  const setJanelaColecao = () => {
    let temp = "JanelaColecao";
    menuClick(temp);
  };

  const setJanelaBusca = () => {
    let temp = "JanelaBusca";
    menuClick(temp);
  };



  return (
    <header className="App-header">
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" className="App-logo" alt="logo" />      
        <br/>
        <a href="#" onClick={setJanelaCaptura}>
          Captura
        </a > | 
        <a href="#" onClick={setJanelaColecao}>
          Coleção
        </a > | 
        <a href="#" onClick={setJanelaBusca}>
          Busca
        </a> |
    </header>
  )
}
  
export default Header;


/*
        <a href="#" onClick={setJanela("JanelaColecao")}>
          Coleção
        </a > | 
        <a href="#" onClick={setJanela("JanelaBatalha")}>
          Batalha
        </a> |
        <a href="#" onClick={setJanela("JanelaBusca")}>
          Busca
        </a> |

*/