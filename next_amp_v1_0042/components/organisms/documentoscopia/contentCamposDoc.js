// layout de Documentoscopia - Projeto Piloto
import React from 'react';
import EnviaArquivo from '../../moleculas/moBtEnviaArquivo.js';
import AtLabelCampo from './atLabelCampo.js';
import Div from '../../atoms/atDiv/index.js';
import * as Util from '../../../controller/util.js';
//import Img from '../../atoms/Img/index.js';
//console.log('Instanciando /componentes/organisms/documentoscopia/ContentAbaC.js');

const ContentCamposDoc = props => {
  var modo = Util.validaProps(props.modo,"html");
  var tipoDocumento = "outros";
  if(props.tipoDocumento!=undefined && props.tipoDocumento!=""){
    tipoDocumento=props.tipoDocumento;
  };

  if(tipoDocumento=="identidade"){
    return(
      <Div vardisplay="vertical">
        <AtLabelCampo for="imgdoc2" value="Frente da identidade"/>
        <EnviaArquivo
          id="imgdoc2" 
          name="imgdoc2" 
          value="Frente da identidade" 
          img="../static/assetsv5/img/documentoscopia/identidade.jpg"
          modo={modo}/>
        <AtLabelCampo
          for="imgdoc3"
          value="Verso da identidade"/>
        <EnviaArquivo 
          id="imgdoc3" 
          name="imgdoc3" 
          value="Verso da identidade" 
          img="../static/assetsv5/img/documentoscopia/identidade.jpg"
          modo={modo}/>
        <AtLabelCampo
          for="imgdoc4"
          value="CPF"/>
        <EnviaArquivo 
          id="imgdoc4" 
          name="imgdoc4" 
          value="CPF" 
          img="../static/assetsv5/img/documentoscopia/identidade.jpg"
          modo={modo}/>
      </Div>
    )
  }else if(tipoDocumento=="cnh"){
    return(
      <Div vardisplay="vertical">
        <AtLabelCampo
          for="imgdoc2"
          value="Frente da habilitação"/>
        <EnviaArquivo 
          id="imgdoc2" 
          name="imgdoc2" 
          value="Frente da CNH" 
          img="../static/assetsv5/img/documentoscopia/identidade.jpg"
          modo={modo}/>
      </Div>
    )
  }else{
    return(
      <Div vardisplay="vertical">
        <AtLabelCampo
          for="imgdoc2"
          value="Frente do documento"/>
        <EnviaArquivo 
          id="imgdoc2" 
          name="imgdoc2" 
          value="Frente de CNH"
          img="../static/assetsv5/img/documentoscopia/identidade.jpg"
          modo={modo}/>
      </Div>
    )
  }
}

export default ContentCamposDoc

/*

//<AtCampoInvisivel type="text" id="nascimento" name="nascimento" value={nascimento}/>

// content do Documentoscopia  - Projeto Piloto

//var React = require('react');
//var Img = require('../../atoms/Imagem.jsx');
//var PropTypes = require('prop-types');
import React, { Component } from 'react';
import Img from '../../atoms/Imagem.js';
var Price = require('../../atoms/Price.js');

//var VarModo = "html";
var varmodo="AMP";

function funcButProx(VarModo){
  if (VarModo=="AMP"||VarModo=="amp"){
    return (<div></div>)
  }else{
    return (
      <a href="#" onClick="funcaba('tab4')">
        <div className="but_a">
          Continuar
        </div>
      </a>
    )
  }
}

function funcButImagem1(VarModo){
  if (VarModo=="AMP"||VarModo=="amp"){
    return (
      <div>
        <input type="file" id="imgdoc2" name="imgdoc2" value="Frente de documento" accept="image/*" required/>
      </div>
    )
  }else{
    return (
      <div className="grupobotaoimg">
      <div className="bordadesenho">
        <Img id="explimg2" src="../assetsv5/img/documentoscopia/identidade.jpg" alt="Exemplo de identidade." modo={VarModo}/>
      </div>
      <div className="label"><span id="Labelfrentdoc">Frente de documento</span></div>
      <a onClick={this.funClick('imgdoc2')}>
        <div className="but_b" >
          <span id="frentdoc">Frente de documento</span>
          <Img src="../assetsv5/img/documentoscopia/mais.png" modo={VarModo}/>
        </div>
      </a>
      <input onClick={this.showPreview('imgdoc2')} type="file" id="imgdoc2" name="imgdoc2" value="Frente de documento" accept="image/*" className="but_c" required/>
    </div>
    )
  }
}

//Eu sei que isto é uma gambiarra (corrijo depois).
function funcButImagem2(VarModo){
  if (VarModo=="AMP"||VarModo=="amp"){
    return (
      <div>
        <input type="file" id="imgdoc3" name="imgdoc3" value="Enviar arquivos 3" accept="image/*" required/>
      </div>
    )
  }else{
    return (
      <div className="grupobotaoimg">
      <div className="bordadesenho">
        <Img id="explimg3" src="../assetsv5/img/documentoscopia/identidade.jpg" alt="Exemplo de identidade." modo={VarModo}/>
      </div>
      <div className="label"><span id="Labelversodoc">Verso do documento</span></div>
      <a onClick="funClick('imgdoc3')">
        <div className="but_b" >
          <span id="versodoc">Verso do documento</span>
          <Img src="../assetsv5/img/documentoscopia/mais.png" modo={VarModo} />
        </div>
      </a>
      <input onclick="showPreview('imgdoc3')" type="file" id="imgdoc3" name="imgdoc3" value="Enviar arquivos 3" accept="image/*" className="but_c" required/>
    </div>
    )
  }
}

//Eu sei que isto é uma gambiarra (corrijo depois).
function funcButImagem3(VarModo){
  if (VarModo=="AMP"||VarModo=="amp"){
    return (
      <div>
        <input type="file" id="imgdoccpf" name="imgdoccpf" value="Enviar arquivos 3" accept="image/*" required/>
      </div>
      )
  }else{
    return (
      <div className="grupobotaoimg">
      <div className="bordadesenho">
        <Img id="explimg4" src="../assetsv5/img/documentoscopia//cpf.jpg" alt="Exemplo de CPF." modo={VarModo}/>
      </div>
      <div className="label"><span id="Labelspancpf" >dicionar CPF</span></div>
      <a onClick="funClick('imgdoccpf')">
        <div className="but_b" >
          <span id="spancpf">Adicionar CPF</span>
          <Img src="../assetsv5/img/documentoscopia/mais.png" modo={VarModo}/>
        </div>
      </a>
      <input onclick="showPreview('imgdoccpf')" type="file" id="imgdoccpf" name="imgdoccpf" value="Enviar arquivos 3" accept="image/*" className="but_c" required/>
    </div>
    )
  }
}

function funClick(varbut){
  document.getElementById(varbut).click();
}

class content03 extends React.Component {
  render() {
    return (
      <div className="aba_content">
        <div className="textodestaque">Envie seus documentos.</div>
        <div className="grupodecampos">
          {funcButImagem1(varmodo)}
          {funcButImagem2(varmodo)}
          {funcButImagem3(varmodo)}
          <div id="retorno">Envie fotos legiveis dos seus documentos.</div>
        </div>
        {funcButProx(varmodo)}
      </div>
    );
  }
}

module.exports = content03;
*/