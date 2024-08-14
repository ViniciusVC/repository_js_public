import {React, useContext }  from 'react';
import './janelaSobre.modules.css'; // Estilos personalizados para a pop-up
import { DBcacheContext } from "../../context/DBcacheContext.js";
import Moldura from "../moldura/index.js";

const JanelaSobre = () => {

  return (
      <div>
        <h1>SOBRE</h1>
        <p>Sobre este projeto.</p>
        <Moldura>
          <h2>Autor</h2>
          <p>
            Vinicius Valente Coutinho<br/>
            <a href="https://www.linkedin.com/in/vin%C3%ADcius-valente-51989523/">linkedin</a><br/>
          </p>
        </Moldura>
        <Moldura>
          <h2>react_pokemon</h2>
          <p>
            Projeto exemplo React consultando API Pokeapi<br/>(sem Next).
          </p>
          <p>
            Repositorio Github: <br/>
            <a href="https://github.com/ViniciusVC/repository_js_public/tree/main/eact_pokemon">https://github.com/ViniciusVC/.../eact_pokemon</a><br/>
            Jogue em: <br/>
            <a href="https://vvcestudio.com.br/pt/play/pokemon">https://vvcestudio.com.br/pt/play/pokemon</a><br/>
          </p>
        </Moldura>
        <Moldura>
          <h2>Clonando Projeto</h2>
          <p>
            git clone https://github.com/ViniciusVC/repository_js_public.git<br/>
            <br/>
            cd repository_js_public/react_pokemon
          </p>
        </Moldura>
        <Moldura>
          <h2>Rodar</h2>
          <p>
            Rodar o servidor de desenvolvimento.<br/>
            <b>npm start</b><br/><br/>
            http://localhost:3000/
          </p>
        </Moldura>
        <Moldura>
          <h2>Bibliotecas</h2>
          <p>
            Instalar biblioteca de requisição HTTP:<br/>
            <b>npm install axios</b><br/>
            <br/>
            Instalar o styled-components:<br/>
            <b>npm install styled-components --save</b>
          </p>
          <p>
            API usada no projeto:<br/>
            https://pokeapi.co/
          </p>
        </Moldura>
        <Moldura>
          <h2>build</h2>
          <p>
            Quando terminar gere um build.<br/>
            <b>npm rum build</b>
          </p>
          <p>
            Uma pasta Dist será criada.<br/>
            Copie a pasta DIST o local final da aplicação.
          </p>
        </Moldura>
      </div>
  );
};

export default JanelaSobre;