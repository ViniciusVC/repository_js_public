
// Janela de Captura pokemons

import {React, useState, useContext } from 'react';
import './janelaCaptura.modules.css'; // Estilos personalizados para a pop-up
import api from "../../services/api"; // Importar configurações do Axios
import Moldura from "../moldura/index.js";
import { DBcacheContext } from "../../context/DBcacheContext.js";


const JanelaCaptura = ({menuClick, showAlert}) => {
  
  const { dbcache, setDbcache } = useContext(DBcacheContext);
 
  // Lista-cacheada-de-pokemmons------------------------------------------------  
  const addCachePokemmons = (newItem) => {
    if(newItem.index === dbcache.CachePokemmons.length){
      console.log("ERRO! Corrigido index.")
      newItem.index = dbcache.CachePokemmons.length
    }
    let tempCachePokemmons = dbcache.CachePokemmons;
    tempCachePokemmons.push(newItem);
    dbcache.CachePokemmons = tempCachePokemmons;
    return newItem.index 
  };


  async function crindoPokemon(num){
    if(dbcache.Capturar[num].name!==""){
      if(num<5){
        crindoPokemon(num+1);
      }
      return
    }

    if(dbcache.sorteio===0){
      dbcache.sorteio = Math.floor(Math.random() * 920) + 1;
    }else{
      dbcache.sorteio=dbcache.sorteio+133
    }
    if (dbcache.sorteio>920) {
      dbcache.sorteio=dbcache.sorteio-920;
    }
    let sorteiro = dbcache.sorteio
    let indexTemp = dbcache.CachePokemmons.findIndex(item => item.id === sorteiro);
    //let indexTemp = cachePokemmons.findIndex(item => item.id === idPoke);

    if(indexTemp !== -1){
      // indexTemp = Poquemom atual no Cache. 
      console.log("Item repetido "+sorteiro);
      //dbcache.Capturar[num]=dbcache.CachePokemmons[indexTemp];

      dbcache.Capturar[num].index = dbcache.CachePokemmons[indexTemp].index
      dbcache.Capturar[num].id =dbcache.CachePokemmons[indexTemp].id
      dbcache.Capturar[num].order =dbcache.CachePokemmons[indexTemp].order
      dbcache.Capturar[num].name =dbcache.CachePokemmons[indexTemp].name
      dbcache.Capturar[num].sprites=dbcache.CachePokemmons[indexTemp].sprites
      dbcache.Capturar[num].shiny=dbcache.CachePokemmons[indexTemp].shiny
      dbcache.Capturar[num].vida=dbcache.CachePokemmons[indexTemp].vida
      dbcache.Capturar[num].ataque=dbcache.CachePokemmons[indexTemp].ataque
      dbcache.Capturar[num].defesa=dbcache.CachePokemmons[indexTemp].defesa
      dbcache.Capturar[num].superAtaque=dbcache.CachePokemmons[indexTemp].superAtaque
      dbcache.Capturar[num].superDefesa=dbcache.CachePokemmons[indexTemp].superDefesa
      dbcache.Capturar[num].velocidade=dbcache.CachePokemmons[indexTemp].velocidade

  
    }else{
      console.log("Novo item "+sorteiro);
      //indexTemp = dbcache.CachePokemmons.length
      
      try{
        
        console.log("Buscando...");
        const response = await api.get(sorteiro.toString());
        //alert("Buscando...");

        if(response.data.erro){
          showAlert("Pokemon ID:"+sorteiro+" não encontrado.");
          
        }else{
          // Retornou novo item. Atualizar o cache.
          indexTemp = addCachePokemmons({
              "index" : dbcache.CachePokemmons.length,
              "id" : sorteiro,
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
          });
          // Atualizar captura com dados de cache. 
          //dbcache.Capturar[num]=dbcache.CachePokemmons[indexTemp];
          dbcache.Capturar[num].index = dbcache.CachePokemmons[indexTemp].index
          dbcache.Capturar[num].id =dbcache.CachePokemmons[indexTemp].id
          dbcache.Capturar[num].order =dbcache.CachePokemmons[indexTemp].order
          dbcache.Capturar[num].name =dbcache.CachePokemmons[indexTemp].name
          dbcache.Capturar[num].sprites=dbcache.CachePokemmons[indexTemp].sprites
          dbcache.Capturar[num].shiny=dbcache.CachePokemmons[indexTemp].shiny
          dbcache.Capturar[num].vida=dbcache.CachePokemmons[indexTemp].vida
          dbcache.Capturar[num].ataque=dbcache.CachePokemmons[indexTemp].ataque
          dbcache.Capturar[num].defesa=dbcache.CachePokemmons[indexTemp].defesa
          dbcache.Capturar[num].superAtaque=dbcache.CachePokemmons[indexTemp].superAtaque
          dbcache.Capturar[num].superDefesa=dbcache.CachePokemmons[indexTemp].superDefesa
          dbcache.Capturar[num].velocidade=dbcache.CachePokemmons[indexTemp].velocidade


        }
      }catch{
        showAlert("Ocorreu um erro lendo Pokemon do servidor.");
      }
            
      if(num<5){
        crindoPokemon(num+1);
      }
    }
 
  }



  // Lista-Capturar--------------------------------------------------------------
    //for (let num in dbcache.Capturar) {
    //dbcache.CachePokemmons.length
    crindoPokemon(0);

    
  async function capturar(num){

    if(num===0){
      showAlert("Erro! Pokemon não existe.")
    }
    console.log("Capiturar "+num)
    let TodosSlotvagos = true;
    let slotvago = false;
    for (let iFor = 0; iFor < 3; iFor++) {
      if(dbcache.Colecao[iFor].name===""){
        slotvago = true;
      }else{
        TodosSlotvagos = false;
      }
    }

    //if (true){
    if (TodosSlotvagos){
      // Todos os slots vagos.
      showAlert("Captura primeiro Pokemon")

      // Capitura primeiro Pokemon
      //dbcache.Colecao[0]=dbcache.Capturar[num]

      if(dbcache.Capturar[num].name===""){
        showAlert("Ocorreu um erro! Pokemon não cacheado.")
        return
      }

      dbcache.Colecao[0].index = dbcache.Capturar[num].index
      dbcache.Colecao[0].id =dbcache.Capturar[num].id
      dbcache.Colecao[0].order =dbcache.Capturar[num].order
      dbcache.Colecao[0].name =dbcache.Capturar[num].name
      dbcache.Colecao[0].sprites=dbcache.Capturar[num].sprites
      dbcache.Colecao[0].shiny=dbcache.Capturar[num].shiny
      dbcache.Colecao[0].vida=dbcache.Capturar[num].vida
      dbcache.Colecao[0].ataque=dbcache.Capturar[num].ataque
      dbcache.Colecao[0].defesa=dbcache.Capturar[num].defesa
      dbcache.Colecao[0].superAtaque=dbcache.Capturar[num].superAtaque
      dbcache.Colecao[0].superDefesa=dbcache.Capturar[num].superDefesa
      dbcache.Colecao[0].velocidade=dbcache.Capturar[num].velocidade

      if(dbcache.Colecao[0].name===""){
        showAlert("Ocorreu um erro capturando primeiro Pokemon!")
        return
      }
      //dbcache.Colecao[0].name=dbcache.Capturar[num].name
      //dbcache.Colecao[0].sprites=dbcache.Capturar[num].sprites
      //dbcache.Colecao[0].shiny=dbcache.Capturar[num].shiny

      // Zerar pokemom do terreno.
      dbcache.Capturar[num].id=0
      dbcache.Capturar[num].name=""
      dbcache.Capturar[num].sprites="./pokeboll.gif"
      dbcache.Capturar[num].shiny="./pokeboll.gif"

      // Abrir janela Coleção.
      let temp = "JanelaColecao";
      menuClick(temp);
    }
    else if (slotvago){
      // Existe slot vago.

      if(dbcache.CachePokemmons[dbcache.Capturar[num].index].name!==dbcache.Capturar[num].name){
        showAlert("Erro index de cache não confere.");
      }else{

        // Define o pokemon adversário para a batalha.
        dbcache.Batalha.indexAdversario=dbcache.Capturar[num].index

        // Zera o pokemon no terreno de captura.
        dbcache.Capturar[num].name=""
        dbcache.Capturar[num].sprites="./pokeboll.gif"
        dbcache.Capturar[num].shiny="./pokeboll.gif"

        // Escolha um pokemom para a batalha.
        let temp = "JanelaColecaoBatalha";
        menuClick(temp);
      }
    }else{
      // Nenhum slot vago.
      showAlert("Liberte um Pokemom para pegar um novo.")
      console.log("Liberte um Pokemom para pegar um novo.")
      let temp = "JanelaColecao";
      menuClick(temp);
    }
  } 
  
  return (
    <>
      <h1>CAPTURA</h1>
      <Moldura>
        <p>Escolha um pokemons para pegar.</p>
        <div className="terrenoCaptura">
            <div className="positcaptura1 divImgCaptura">
              {dbcache.Capturar[0].name!=="" && ( 
              <a href="#" onClick={()=>capturar(0)} >
                <img src={dbcache.Capturar[0].sprites} className="imgCapturaPoke" alt="o"/>
              </a>
              )}
              {dbcache.Capturar[0].name==="" && ( 
                <p>x</p>
              )}
            </div>
            <div className="positcaptura2 divImgCaptura">
              {dbcache.Capturar[1].name!=="" && ( 
              <a  href="#" onClick={()=>capturar(1)} >
                <img src={dbcache.Capturar[1].sprites} className="imgCapturaPoke" alt="o"/>
              </a>
              )}
              {dbcache.Capturar[1].name==="" && ( 
                <p>x</p>
              )}
            </div>
            <div className="positcaptura3 divImgCaptura">
              {dbcache.Capturar[2].name!=="" && ( 
              <a  href="#" onClick={()=>capturar(2)}>
                <img src={dbcache.Capturar[2].sprites}  className="imgCapturaPoke" alt="o"/>
              </a>
              )}
              {dbcache.Capturar[2].name==="" && ( 
                <p>x</p>
              )}                        
            </div>
            <div className="positcaptura4 divImgCaptura">
              {dbcache.Capturar[3].name!=="" && ( 
              <a  href="#" onClick={()=>capturar(3)}>
                <img src={dbcache.Capturar[3].sprites}  className="imgCapturaPoke" alt="o"/>
              </a>
              )}
              {dbcache.Capturar[3].name==="" && ( 
                <p>x</p>
              )}
            </div>
            <div className="positcaptura5 divImgCaptura">
              {dbcache.Capturar[4].name!=="" && ( 
              <a  href="#" onClick={()=>capturar(4)} >
                <img src={dbcache.Capturar[4].sprites} className="imgCapturaPoke" alt="o"/>
              </a>
              )}
              {dbcache.Capturar[4].name==="" && ( 
                <p>x</p>
              )}
            </div>
            <div className="positcaptura6 divImgCaptura">
              {dbcache.Capturar[5].name!=="" && ( 
              <a  href="#" onClick={()=>capturar(5)}>
                <img src={dbcache.Capturar[5].sprites} className="imgCapturaPoke" alt="o"/>
              </a>
              )}
              {dbcache.Capturar[5].name==="" && ( 
                <p>x</p>
              )}
            </div>
        </div>
        Seu nivel de treinador permite treinar 3 Pokemons.
      </Moldura>

      <Moldura>
        <h3>Pokemons disponíveis:</h3>
          {dbcache.Capturar.map((item, indice) => (
              <button className="LinkLista" onClick={()=>capturar(indice)}>
                <b>{"["+indice+"]id:"+item.id+"-"+item.name+"."+item.index}</b>
              </button>
          ))}
      </Moldura>
    </>
  );
};

export default JanelaCaptura;