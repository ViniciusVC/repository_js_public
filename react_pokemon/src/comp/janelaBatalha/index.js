import {React, useContext }  from 'react';
import './janelaBatalha.modules.css'; // Estilos personalizados para a pop-up
import { DBcacheContext } from "../../context/DBcacheContext.js";
import Moldura from "../moldura/index.js";

const JanelaBatalha = ({menuClick, showAlert}) => {

  const { dbcache } = useContext(DBcacheContext);

  async function lutar(){
    
    /*
    *
    * Preguiça de criar um sistema de luta.
    * Farei depois.
    *
    */

    dbcache.sorteio=dbcache.sorteio+33
    if (dbcache.sorteio>920) {
      dbcache.sorteio=dbcache.sorteio-920;
    }
    if(dbcache.sorteio+150>460){
      // ganhou
      showAlert("Ganhou!");
      
      let num = 0;
      for (let iFor = 0; iFor < 3; iFor++) {
        if(dbcache.Colecao[iFor].name===""){
          num = iFor; // Encontrou slot vago.
        }
      }
      console.log("gravando novo pokemon no slot "+ num + ".");
      // incluir novo pokemon a sua coleção.
      dbcache.Colecao[num]=dbcache.CachePokemmons[dbcache.Batalha.indexAdversario]
      
      // Abrir sua Coleção de Pokemons.
      let temp = "JanelaColecao";
      menuClick(temp);
    }else{
      // ganhou
      showAlert("Perdeu");
      // Abrir sua Coleção de Pokemons.
      let temp = "JanelaColecao";
      menuClick(temp);
    }

  }

  return (
      <div>
        <h1>BATALHA</h1>
        <Moldura>
          
          <p>Escolha a modalidade deste tuno:</p>
          <button onClick={()=>lutar()}>Ataque</button>
          <button onClick={()=>lutar()}>Defesa</button>

          {Object.keys(dbcache.CachePokemmons).length < 1 && ( 
            <p>
              Nenhum pokemon selecionado para batalha.<br/>
              É preciso caçar um pokemon e escolher um de sua coleção.<br/>
              Boa caçada.
            </p>
          )}  

          <div className="campo-de-batalha">
            {Object.keys(dbcache.CachePokemmons).length > 0 && ( 
              <div className="Justificado">

                <div>
                  <h3>{dbcache.Colecao[dbcache.Batalha.indexTreinado].name}</h3>
                  <img src={dbcache.Colecao[dbcache.Batalha.indexTreinado].sprites} className="Imagem-Batalha" alt="Personagem animado batalha" />
                </div>

                <div>
                  .<br/><img src="./img/vs.gif" className="App-Imagem-vs" alt="Personagem inimigo batalha"/>
                </div>

                <div>
                  <h3>{dbcache.CachePokemmons[dbcache.Batalha.indexAdversario].name}</h3>
                  <img src={dbcache.CachePokemmons[dbcache.Batalha.indexAdversario].sprites} className="App-Imagem-Inimigo" alt="Personagem inimigo batalha" />
                </div>

              </div>
            )}
          </div>

        </Moldura>

        <Moldura>
          Boa batalha!
        </Moldura>
        
      </div>
  );
};

export default JanelaBatalha;