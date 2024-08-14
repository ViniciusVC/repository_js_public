// APP React Pokemmon 
import {React, useState, useContext } from "react";
import './App.css'; // Estilo do APP
// import api from "./services/api"; // Importar configurações do Axios
import Header from './comp/header'; // Importar componente header.
import Footer from './comp/footer'; // Importar componente footer.
import AlertPopUp from './comp/alertPopUp'; // Importar componente AlertPopUp.


import JanelaCaptura from './comp/janelaCaptura'; // Importar componente JanelaCaptura.
import JanelaBatalha from './comp/janelaBatalha'; // Importar componente JanelaBatalha.
import JanelaColecao from './comp/janelaColecao'; // Importar componente JanelaColecao.
import JanelaColecaoBatalha from './comp/janelaColecaoBatalha'; // Importar componente JanelaColecao.
import JanelaBusca from './comp/janelaBusca'; // Importar componente JanelaBusca.
import JanelaSobre from './comp/janelaSobre'; // Importar componente JanelaSobre.

import { DBcacheContext } from './context/DBcacheContext';


export default function App() {

  const { dbcache, setDbcache } = useContext(DBcacheContext);

  // Trata janelas-----------------------------------------------
  const [janelaAberta, setJanelaAberta] = useState("JanelaBusca"); // Janela que esta aberta.

  const openJanela = (msg) => {
    console.log("Abrir Janela " + msg+".");
    setJanelaAberta(msg);
  };

  // Tratando o Pop-Up de Alerta-----------------------------------------------
  const [showPopUp, setShowPopUp] = useState(false); // Pop-Up inicia fechado.
  const [popUpMessage, setPopUpMessage] = useState(''); // Mensagem do Pop-Up
  
  const showAlert = (message) => {
    //setDbcache(message);
    //dbcache.Colecao[0].name=message
    console.log("showAlert("+message+")");
    setPopUpMessage(message); // Mudar mensagem do Pop-up.
    setShowPopUp(true);
  };
  
  const closePopUp = () => {
    setShowPopUp(false);
    setPopUpMessage('');
  };
     
  const buscaAlert = (msg) => {
    showAlert(msg);
  };
  

  

  return (
    <div className="App">

      <Header menuClick={openJanela}/>
      <div className="App-body">
        { janelaAberta == "JanelaCaptura" && ( 
          <JanelaCaptura menuClick={openJanela} showAlert={buscaAlert}/>
        )}        
        { janelaAberta == "JanelaColecao" && ( 
          <JanelaColecao menuClick={openJanela} showAlert={buscaAlert}/>
        )}
        { janelaAberta == "JanelaColecaoBatalha" && ( 
          <JanelaColecaoBatalha menuClick={openJanela} showAlert={buscaAlert}/>
        )}
        { janelaAberta == "JanelaBatalha" && ( 
          <JanelaBatalha menuClick={openJanela} showAlert={buscaAlert}/>
        )}
        { janelaAberta == "JanelaBusca" && ( 
          <JanelaBusca showAlert={buscaAlert} />
        )}
        { janelaAberta == "JanelaSobre" && ( 
          <JanelaSobre />
        )}
      </div>
      <br/>.<br/>
      {showPopUp && <AlertPopUp message={popUpMessage} onClose={closePopUp} />}        
      <Footer/>
    </div>
  );
}


