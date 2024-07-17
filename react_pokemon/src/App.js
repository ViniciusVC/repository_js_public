import Header from './comp/header';
import Footer from './comp/footer';
import './App.css';

import {useState} from "react";
import api from "./services/api";



function App() {


  // input : Pegar o valor do estado
  // setInput : Pasar valor para estado.
  const [input, setInput] = useState('');
  const [idPokemon, setIdPokemon] = useState({});

  async function handleSerch(){

    if (input ===''){
      alert("Preencha o id do Pokemon. ex.:900");
      return;
    }    
    
    try{
      const response = await api.get(input);
      console.log(response.data);
      if(response.data.erro){
        alert("Pokemon não encontrado.");  
      }else{
        setIdPokemon(response.data);
        setInput("");
      }    
    }catch{
      alert("Ocorreu um erro.");
      setInput("");
    }
    
  }


  return (
    <div className="App">
      <Header/>

      <div className="containerInput">
              <p>Digite um id:</p>
              <input 
              type="text"
              placeholder="Digite o id do Pokemon"
              value={input}
              onChange={(e)=> setInput(e.target.value)}
              />
              <button className="buttonSearch" onClick={handleSerch}>
                Busca
              </button>
      </div>

      <div>
        

            { Object.keys(idPokemon).length > 0 && ( 
              <div>
                <h1>
                  {idPokemon.name}
                </h1>
                <div className="cenario">
                  <img src={idPokemon.sprites.other.showdown.front_shiny} className="App-Imagem" alt="logo" />
                </div>
                <img src={idPokemon.sprites.front_shiny} className="App-Imagem" alt="logo" />
                <p>order : {idPokemon.order}</p>   
              </div>
            )}

      </div>

      <Footer/>
    </div>
  );
}

export default App;
