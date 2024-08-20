'use client';

import styles from "./index.module.css"
//import React, { useState } from "react";
import { useState } from "react";
import Janela from "../moJanela"
import ListadeRotas from "../moListadeRotas"


export default function MenuMobile02({
  regiao,
  janelaEstilo,
  titulo,
  categoria,
  btestilo,
  btestiloitem,
}: {
  regiao: string;
  janelaEstilo: string;
  titulo: string;
  categoria: string;
  btestilo: string;
  btestiloitem: string;
}) {

  /*
  //const btestilo="neon";
  //const btestiloitem="neonItem";
  const regiao = Util.validaProps(props.regiao,"pt");
  const janelaEstilo = Util.validaProps(props.janelaestilo, "neon");
  const titulo = props.titulo;
  const categoria = props.categoria;
  const btestilo = props.btestilo; //"neon"
  const btestiloitem = props.btestiloitem; //"neonItem"
  */
  
  if(regiao=="en"){
    if(titulo=="Tutoriais"){
      titulo="Tutorials"
    }
  }

  var cordoicone = "#ffffff";
  if (janelaEstilo=="claro"){
    cordoicone = "#000000";
  }

  const [display, setDisplay] = useState(false);

  function fechalightboxMenu(){
    console.log('fecha Menu');
    setDisplay(false);
    //document.getElementById("contMenuMobiles").style.display = "none";
    //contMenuMobiles.style.display = "none";
  }

  function abrirlightboxMenu(){
    console.log('abrir Menu');
    setDisplay(true);
    //document.getElementById("contMenuMobiles").style.display = "block";
    //contMenuMobiles.style.display = "block";
  }
  
  

  return (   
    <div>
      <div style={{ display: display ? "block" : "none" }}>
        <div className={styles.contMenuMobile}>
              <div id="lightboxMenu" className={styles.lightboxMenu} >

                <div className={styles.close}  role="button" tabIndex={0}>
                  <a onClick={fechalightboxMenu}>
                    X
                  </a>
                </div>
              
                <Janela estilo={janelaEstilo} titulo="menu">
                  <ListadeRotas 
                    regiao={regiao} 
                    titulo={titulo}
                    categoria={categoria}
                    btestilo={btestilo} 
                    btestiloitem={btestiloitem}/>
                </Janela>              
              
              </div>
        </div>
      </div>
      <div>
            <div onClick={abrirlightboxMenu}  className={styles.btMenu}>
              MENU
            </div>
      </div>
    </div>
  )
}
