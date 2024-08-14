// Janela Busca Pokemmon
import {React, useState, useContext } from "react";
import './janelaBusca.modules.css';
import api from "../../services/api"; // Importar configurações do Axios
//import AlertPopUp from '../alertPopUp'; // Importar componente AlertPopUp.
import { DBcacheContext } from "../../context/DBcacheContext.js";
import Moldura from "../moldura/index.js";

import Barrinha from "../barrinhas/index.js";

function JanelaBusca({showAlert}) {

  const { dbcache } = useContext(DBcacheContext);

  // Lista-cacheada-de-pokemmons------------------------------------------------  
    const addCachePokemmons = (newItem) => {
      let tempCachePokemmons = dbcache.CachePokemmons;
      tempCachePokemmons.push(newItem);
      dbcache.CachePokemmons = tempCachePokemmons;
    };

  // Tratando o Formulario------------------------------------------------------
    const [input, setInput] = useState('');
    const [indexPokemonAtual, setIndexPokemonAtual] = useState(0);

    //function showPokemmon(num){
    //  showAlert("Busca repetida.");
    //  setIndexPokemonAtual(0);
    //}

    async function handleSerch(){
  
      if (input ===''){
        showAlert("Preencha o id do Pokemon. ex.:900");
        return;
      }    
        
      try{
        
        var idPoke = parseInt(input)
  
        if(idPoke > 920){
          showAlert("Digite um numero menor.");  
          return;
        }
        
        if(idPoke < 1){
          showAlert("Digite um numero maior que 0.");  
          return;
        }
        
        
        let indexTemp = dbcache.CachePokemmons.findIndex(item => item.id === idPoke);
        //let indexTemp = cachePokemmons.findIndex(item => item.id === idPoke);
  
        if(indexTemp !== -1){
          showAlert("Busca repetida.");
          setIndexPokemonAtual(indexTemp);
          return;
        }
        
        //showAlert("Buscando...");
        console.log("Buscando...");
        const response = await api.get(input);
          
        if(response.data.erro){
          showAlert("Pokemon ID:"+idPoke+" não encontrado.");
          
        }else{
          
          setIndexPokemonAtual(dbcache.CachePokemmons.length)
          //setIndexPokemonAtual(cachePokemmons.length)
  
          //console.log("  indexPokemonAtual=" + indexPokemonAtual);
          //console.log("|____Antes___________|length="+cachePokemmons.length);
            
          
          addCachePokemmons({
              "index" : indexPokemonAtual,
              "id" : idPoke,
              "order" : response.data.order,
              "name" : response.data.name,
              "sprites" : response.data.sprites.other.showdown.front_shiny,
              "shiny" : response.data.sprites.front_shiny,
              "vida" : response.data.stats[0].base_stat,
              "ataque" : response.data.stats[1].base_stat,
              "defesa" : response.data.stats[2].base_stat,
              "superAtaque" : response.data.stats[3].base_stat,
              "superDefesa" : response.data.stats[4].base_stat,
              "velocidade" : response.data.stats[5].base_stat
          })
            
          //console.log("|____Depois___________|length="+cachePokemmons.length);
          //console.log("OK! "+ (indexPokemonAtual+1) + "ª busca - ID:"+ idPoke +" "+ cachePokemmons[indexPokemonAtual].name +". ");  
          //showAlert("OK! "+ (indexPokemonAtual+1) + "ª busca - ID:"+ idPoke +" "+ cachePokemmons[indexPokemonAtual].name +". ");  
          setInput("");
        }
      }catch{
        showAlert("Ocorreu um erro.");
        setInput("");
      }
      
    }

  return (
    <>
      <h1>Pesquise um Pokemon</h1>
      <Moldura>
              <p>Digite um id:</p>
              <input 
              type="number"
              placeholder="Digite o id do Pokemon"
              value={input}
              onChange={(e)=> setInput(e.target.value)}
              />
              <div className="centerButon">
                <button className="button" onClick={handleSerch}>
                  Busca
                </button>
              </div>
      </Moldura>

          {Object.keys(dbcache.CachePokemmons).length > 0 && ( 
            <>
              <Moldura>
                <div className="buscaJustificado">
                  <div className="buscaColuna">
                    <h1>
                      {dbcache.CachePokemmons[indexPokemonAtual].name}
                    </h1>
                    <img src={dbcache.CachePokemmons[indexPokemonAtual].shiny} className="BuscaImagem" alt="mini personagem" />
                  </div>
                  <div className="buscaColuna">
                    Nome : {dbcache.CachePokemmons[indexPokemonAtual].name} <br/>
                    Id : {dbcache.CachePokemmons[indexPokemonAtual].id} <br/>
                    Order : {dbcache.CachePokemmons[indexPokemonAtual].order} <br/>
                    <div><Barrinha legenda="vida" valor={dbcache.CachePokemmons[indexPokemonAtual].vida}/></div>
                    <div><Barrinha legenda="Ataque" valor={dbcache.CachePokemmons[indexPokemonAtual].ataque}/></div>
                    <div><Barrinha legenda="Defesa" valor={dbcache.CachePokemmons[indexPokemonAtual].defesa}/></div>
                    <div><Barrinha legenda="Super-Ataque" valor={dbcache.CachePokemmons[indexPokemonAtual].superAtaque}/></div>
                    <div><Barrinha legenda="Super-Defesa" alor={dbcache.CachePokemmons[indexPokemonAtual].superDefesa}/></div>
                    <div><Barrinha legenda="Velocidade" valor={dbcache.CachePokemmons[indexPokemonAtual].velocidade}/></div>
                    Index : {dbcache.CachePokemmons[indexPokemonAtual].index}   
                  </div>
                </div>
              </Moldura>

              <Moldura>
                <h3>Historico de pokemons:</h3>
                <p>Acesso rápido</p>
                  {dbcache.CachePokemmons.map((item, indice) => (
                        <button className="LinkLista" onClick={()=>setIndexPokemonAtual(indice)}>
                          <b>{"["+indice+"]"+item.id+"-"+item.name+"."}</b>
                        </button>
                  ))}
              </Moldura>
            </>
          )}
    </>
  )
}

export default JanelaBusca;
