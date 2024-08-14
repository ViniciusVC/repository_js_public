import {React, useState, useContext } from 'react';
import './janelaColecao.modules.css';
import Moldura from "../moldura/index.js";
import { DBcacheContext } from "../../context/DBcacheContext.js";
import Barrinha from "../barrinhas/index.js";

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
    dbcache.Colecao[num].sprites="./vs.gif"
    dbcache.Colecao[num].shiny="./vs.gif"

    capiturar()
  }

  return (
    <>
      <Moldura>
        <h1>Sua colecao de Pokemons</h1>
      </Moldura>
        <div className="colecaoCentraliza">
        <div className="colecaoJustificado">
   
          <div className="divColecaoItem">
              {dbcache.Colecao[0].name == "" && ( 
                <>
                    <h3>Pokebola 1</h3>
                    <a href="#" onClick={()=>capiturar()}>
                      <img src="./img/pokeboll.gif" className="colecaoImagem" alt="mini personagem" />
                    </a>
                    <button className="BtCapturar" onClick={()=>capiturar()}>
                      CAPITURAR
                    </button>
                    <br/>
                </>
              )}
              {dbcache.Colecao[0].name !== "" && ( 
                <>
                    <h3>{dbcache.Colecao[0].name}</h3>
                    <img src={dbcache.Colecao[0].shiny} className="colecaoImagem" alt="mini personagem" />
                    <button className="BtLibertar" onClick={()=>libertar(0)}>
                      Libertar
                    </button>
                </>
              )}
          </div>

          <div className="divColecaoItem">
              {dbcache.Colecao[1].name == "" && ( 
                <>
                    <h3>Pokebola 2</h3>
                    <a href="#" onClick={()=>capiturar()}>
                      <img src="./img/pokeboll.gif" className="colecaoImagem" alt="mini personagem" />
                    </a>
                    <button className="BtCapturar" onClick={()=>capiturar()}>
                      CAPITURAR
                    </button>
                    <br/>
                </>
              )}
              {dbcache.Colecao[1].name !== "" && ( 
                <>
                    <h3>{dbcache.Colecao[1].name}</h3>
                    <img src={dbcache.Colecao[1].shiny} className="colecaoImagem" alt="mini personagem" />
                    <button className="BtLibertar" onClick={()=>libertar(1)}>
                      Libertar
                    </button>
                </>
              )}
          </div>
          

          <div className="divColecaoItem">
              {dbcache.Colecao[2].name == "" && ( 
                <>
                    <h3>Pokebola 3</h3>
                    <a href="#" onClick={()=>capiturar()}>
                      <img src="./img/pokeboll.gif" className="colecaoImagem" alt="mini personagem" />
                    </a>
                    <button className="BtCapturar" onClick={()=>capiturar()}>
                      CAPITURAR
                    </button>
                    <br/>
                </>
              )}
              {dbcache.Colecao[2].name !== "" && ( 
                <>
                    <h3>{dbcache.Colecao[2].name}</h3>
                    <img src={dbcache.Colecao[2].shiny} className="colecaoImagem" alt="mini personagem" />
                    <button className="BtLibertar" onClick={()=>libertar(2)}>
                      Libertar
                    </button>
                </>
              )}
          </div>

        </div>
        </div>
      <Moldura>
        <p>Seu nivel de treinador permite treinar apenas 3 Pokemons.</p>
      </Moldura>

      
        <h4>Seus Pokemons:</h4>
          {dbcache.Colecao.map((item, indice) => (
            item.name !== "" && ( 
            <Moldura>
                <b>{item.name}</b><br/>
                id:{item.id} Cache index:{item.index} Ordem:{item.order}<br/>

                <div><Barrinha legenda="vida" valor={item.vida}/></div>
                <div><Barrinha legenda="Ataque" valor={item.ataque}/></div>
                <div><Barrinha legenda="Defesa" valor={item.defesa}/></div>
                <div><Barrinha legenda="Super-Ataque" valor={item.superAtaque}/></div>
                <div><Barrinha legenda="Super-Defesa" alor={item.superDefesa}/></div>
                <div><Barrinha legenda="Velocidade" valor={item.velocidade}/></div>
            </Moldura> 
            )
          ))}
      

    </>
  );
};

export default JanelaColecao;