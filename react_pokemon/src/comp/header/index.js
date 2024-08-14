//import './header.css';
import {React} from "react";
import './header.modules.css';

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

  const setJanelaSobre = () => {
    let temp = "JanelaSobre";
    menuClick(temp);
  };
  

  return (
    <header className="AppHeader">
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" className="AppLogo" alt="logo" />
        <br/> 
        <a href="#" className="HeaderMenuItem" onClick={setJanelaCaptura}>
          Captura
        </a > 
        <a href="#" className="HeaderMenuItem" onClick={setJanelaColecao}>
          Coleção
        </a > 
        <a href="#" className="HeaderMenuItem" onClick={setJanelaBusca}>
          Busca
        </a>
        <a href="#" className="HeaderMenuItem" onClick={setJanelaSobre}>
          Sobre
        </a>
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