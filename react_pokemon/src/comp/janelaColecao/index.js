import {React, useState, useContext } from 'react';
import './janelaColecao.css'; // Estilos personalizados para a pop-up
import Moldura from "../moldura/index.js";
import { DBcacheContext } from "../../context/DBcacheContext.js";

const JanelaColecao = ({menuClick, showAlert}) => {

  const { dbcache, setDbcache } = useContext(DBcacheContext);

  
  async function capiturar(){
    console.log("Abrir Janela de Capitura");
    let temp = "JanelaCaptura";
    menuClick(temp);
  }

  async function libertar(num){
    showAlert(dbcache.Colecao[0].name + " foi libertado.");
    dbcache.Colecao[num].name=""
    dbcache.Colecao[num].sprites="vs.gif"
    dbcache.Colecao[num].shiny="vs.gif"

    capiturar()
  }

  return (
    <>
      <Moldura>
        <h1>Sua colecao de Pokemons</h1>
      </Moldura>
        <div className="Justificado">

          <div className="div-Colecao-item">
              {dbcache.Colecao[0].name == "" && ( 
                <>
                    <h3>Pokebola 1</h3>
                    <a href="#" onClick={()=>capiturar()}>
                      <img src="pokeboll.gif" className="colecao-Imagem" alt="mini personagem" />
                    </a>
                    <button className="Bt-Capturar" onClick={()=>capiturar()}>
                      CAPITURAR
                    </button>
                    <br/>
                </>
              )}
              {dbcache.Colecao[0].name !== "" && ( 
                <>
                    <h3>{dbcache.Colecao[0].name}</h3>
                    <img src={dbcache.Colecao[0].shiny} className="colecao-Imagem" alt="mini personagem" />
                    <button className="Bt-libertar" onClick={()=>libertar(0)}>
                      Libertar
                    </button>
                </>
              )}
          </div>

          <div className="div-Colecao-item">
              {dbcache.Colecao[1].name == "" && ( 
                <>
                    <h3>Pokebola 2</h3>
                    <a href="#" onClick={()=>capiturar()}>
                      <img src="pokeboll.gif" className="colecao-Imagem" alt="mini personagem" />
                    </a>
                    <button className="Bt-Capturar" onClick={()=>capiturar()}>
                      CAPITURAR
                    </button>
                    <br/>
                </>
              )}
              {dbcache.Colecao[1].name !== "" && ( 
                <>
                    <h3>{dbcache.Colecao[1].name}</h3>
                    <img src={dbcache.Colecao[1].shiny} className="colecao-Imagem" alt="mini personagem" />
                    <button className="Bt-libertar" onClick={()=>libertar(1)}>
                      Libertar
                    </button>
                </>
              )}
          </div>

          <div className="div-Colecao-item">
              {dbcache.Colecao[2].name == "" && ( 
                <>
                    <h3>Pokebola 3</h3>
                    <a href="#" onClick={()=>capiturar()}>
                      <img src="pokeboll.gif" className="colecao-Imagem" alt="mini personagem" />
                    </a>
                    <button className="Bt-Capturar" onClick={()=>capiturar()}>
                      CAPITURAR
                    </button>
                    <br/>
                </>
              )}
              {dbcache.Colecao[2].name !== "" && ( 
                <>
                    <h3>{dbcache.Colecao[2].name}</h3>
                    <img src={dbcache.Colecao[2].shiny} className="colecao-Imagem" alt="mini personagem" />
                    <button className="Bt-libertar" onClick={()=>libertar(2)}>
                      Libertar
                    </button>
                </>
              )}
          </div>

        </div>

      <Moldura>
        <p>Seu nivel de treinador permite treinar apenas 3 Pokemons.</p>
      </Moldura>

      <Moldura>
        <h4>Seus Pokemons:</h4>
          {dbcache.Colecao.map((item, indice) => (
              <p>
                <b>{"[Pokeboll "+ indice+"] "+item.name}</b><br/>
                id : {item.id} Cache index : {item.index} <br/>
                Ordem : {item.order} vida : {item.vida} <br/>
                ataque : {item.ataque} defesa : {item.defesa} <br/>
                superAtaque: {item.superAtaque} <br/>
                superDefesa: {item.superDefesa} <br/>
                velocidade: {item.velocidade} <br/>
              </p>
          ))}
      </Moldura>

    </>
  );
};

export default JanelaColecao;