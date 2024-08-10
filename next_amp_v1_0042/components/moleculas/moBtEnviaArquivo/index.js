
// layout de Documentoscopia - Projeto Piloto
import React from 'react';
//import Img from '../../atoms/atImg/index.js';

class MyLink extends React.Component {
  render () {
    const { ...props } = this.props
    return <a {...props} onClick={this.handleClick} />
  }

  handleClick = event => {
    if (this.props.onClick) {
      var conteudo = this.props.onClick(event);
      //alert('conteudo='+conteudo);
      //alert(this.props);
      //console.log(this.props);
      alert(this.props.id);
      this.props.value = "Clicou";
      //formdocumentoscopia[conteudo].onClick();
      //event
    }
  }
}

class MyImg extends React.Component {
  render () {
    const { ...props } = this.props
    return <a {...props} onClick={this.handleClick} />
  }

  handleClick = event => {
    if (this.props.onClick) {
      var conteudo = this.props.onClick(event);
      
      alert('conteudo='+conteudo);
      //alert(this.props);
      //console.log(this.props);
      //alert("clicou em "+this);
      //alert(conteudo);
      document.getElementById(conteudo).onClick();
      //conteudo.onClick();
      //formdocumentoscopia[conteudo].onClick();
      //event
    }
  }
}

const btEnviaArquivo = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  var varId="id";
  if( props.id!=undefined){varId=props.id};
  var varName="nome";
  if( props.name!=undefined){varName=props.name};
  var varValue="--";
  if( props.value!=undefined){varValue=props.value};
  var varImg="../static/assetsv5/img/documentoscopia/carteira-icone.jpg";
  if( props.img!=undefined){varImg=props.img};
  return(
    <div className="divImgEnviArquivo">
      <input type="file"
        className="BtEnviArquivo"
        id={varId}
        name={varName}
        value={varValue}
        accept="image/*"
        required />
    <style jsx>{`
        .divImgEnviArquivo{
          display: inline-flex;
          flex-wrap: wrap;
        }
        .BtEnviArquivo{
            width: 280px;
            height: 40px;
            margin: 10px;
            margin-left: 0px;
            padding: 10px;
            border-radius: 6px;
            border: solid 1px #dbdbdb;
            color: #000000;
            background-color: #ffffff;
            text-align: left;
        }
      `}</style>
    </div>
  )
}
export default btEnviaArquivo
