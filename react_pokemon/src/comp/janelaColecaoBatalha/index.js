import {React, useState, useContext } from 'react';
//import './janelaColecao.css'; // Estilos personalizados para a pop-up
import Moldura from "../moldura/index.js";
import { DBcacheContext } from "../../context/DBcacheContext.js";

const JanelaColecaoBatalha = ({menuClick, showAlert}) => {

  const { dbcache, setDbcache } = useContext(DBcacheContext);

  async function escolhido(numEscolha){
    if(dbcache.CachePokemmons[dbcache.Colecao[numEscolha].index].name!==dbcache.Colecao[numEscolha].name){
      showAlert("Erro index de cache não confere.")
    }
    showAlert("Pokemon escolhido ("+numEscolha+")" +dbcache.Colecao[numEscolha].name);
    dbcache.Batalha.indexTreinado=numEscolha // Definiu pokemon para batalha
      
    // Abrir janela de batalha.
    let temp = "JanelaBatalha";
    menuClick(temp);
  }

  return (
    <>
      <h1>Escolha um de seus pokemons para a batalha.</h1>
      
        <div className="Justificado">

          {dbcache.Colecao[0].name !== "" && ( 
          <div className="div-Colecao-item">
            <Moldura>
              
                <>
                    <h3>{dbcache.Colecao[0].name}</h3><br/>
                    <img src={dbcache.Colecao[0].shiny} className="colecao-Imagem" alt="mini personagem" />
                    <button onClick={()=>escolhido(0)}>ESCOLHO</button>
                </>
             
          </Moldura>
          </div>
          )}
          {dbcache.Colecao[1].name !== "" && ( 
          <div className="div-Colecao-item">
            <Moldura>
              
                <>
                    <h3>{dbcache.Colecao[1].name}</h3><br/>
                    <img src={dbcache.Colecao[1].shiny} className="colecao-Imagem" alt="mini personagem" />
                    <button onClick={()=>escolhido(1)}>ESCOLHO</button>
                </>
              
            </Moldura>
          </div>
          )}
          {dbcache.Colecao[2].name !== "" && ( 
          <div className="div-Colecao-item">
            <Moldura>
             
                <>
                    <h3>{dbcache.Colecao[2].name}</h3><br/>
                    <img src={dbcache.Colecao[2].shiny} className="colecao-Imagem" alt="mini personagem" />
                    <button onClick={()=>escolhido(2)}>ESCOLHO</button>
                </>
              
            </Moldura>
          </div>
          )}

        </div>
    </>
  );
};

export default JanelaColecaoBatalha;