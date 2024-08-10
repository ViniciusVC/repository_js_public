
// layout de Documentoscopia - Projeto Piloto
import React from 'react';
import Compress from 'compress.js';
//import Img from '../atoms/atImg/index.js';

// class MyLink extends React.Component {
//   render () {
//     const { ...props } = this.props
//     return <a {...props} onClick={this.handleClick} />
//   }
//   handleClick = event => {
//     if (this.props.onClick) {
//       var conteudo = this.props.onClick(event);
//       //alert('conteudo='+conteudo);
//       //alert(this.props);
//       //console.log(this.props);
//       alert(this.props.id);
//       this.props.value = "Clicou";
//       //formdocumentoscopia[conteudo].onClick();
//       //event
//     }
//   }
// }
// class MyImg extends React.Component {
//   render () {
//     const { ...props } = this.props
//     return <a {...props} onClick={this.handleClick} />
//   }
//   handleClick = event => {
//     if (this.props.onClick) {
//       var conteudo = this.props.onClick(event);
//       alert('conteudo='+conteudo);
//       //alert(this.props);
//       //console.log(this.props);
//       //alert("clicou em "+this);
//       //alert(conteudo);
//       document.getElementById(conteudo).onClick();
//       //conteudo.onClick();
//       //formdocumentoscopia[conteudo].onClick();
//       //event
//     }
//   }
// }



const btEnviaArquivo = props => {

  function clicouFiles(IdFile) {
    //alert('Clicou no documento '+IdFile);
    const compress = new Compress();
    const files = [document.getElementById(IdFile).files[0]]
    document.getElementById(IdFile + "Preview").style.display = "block"
    compress.compress(files, {
      size: 0.2, // the max size in MB, defaults to 2MB
      quality: 0.75, // the quality of the image, max is 1,
      maxWidth: 900, // the max width of the output image, defaults to 1920px
      maxHeight: 900, // the max height of the output image, defaults to 1920px
      resize: true // defaults to true, set false if you do not want to resize the image width and height
    }).then((images) => {
      console.log(files[0])
      console.log(images[0])
      console.log('_____________________________');
      //.files
      //.src
      //.mimetype    
      //.fieldname
      //.value
      const img = images[0]
      const imagemSaida = document.getElementById(IdFile + "Send");
      const imagemPreview = document.getElementById(IdFile + "Preview")
      const nomeImagem = document.getElementById(IdFile + "NomeImagem")
      // returns an array of compressed images

      // imagemSaida.mimetype = `${images[0].prefix}${images[0].data}`;
      // imagemSaida.files[0] = images[0].data;
      // imagemSaida.data = images[0].data;
      // imagemSaida.files[0].file.name = images[0].alt;
      // imagemSaida.file.size = images[0].endSizeInMb;
      // imagemSaida.files[0].file.size = images[0].endSizeInMb;        

      imagemPreview.src = img.prefix + img.data;


      imagemSaida.value = img.data;

      nomeImagem.value = img.alt;

      //canvas.toDataURL();
      //imagemSaida.data = img.prefix+img.data

      //imagemSaida.files[0].File.name = img.prefix+img.data; //img.alt;

      //imagemSaida.Files[0].File.size = img.endSizeInMb;
      //imagemSaida.src = img.data;

      //document.getElementById(IdFile+"Send").files[0] = img; 
      //`${images[0].prefix}${images[0].data}`     
    })
  }


  // var modo = "html";
  // if( props.modo!=undefined){modo=props.modo};
  var varId = "id";
  var varId2 = "idPreview";
  var varId3 = "idSend";
  var varId4 = "idNomeImagem"
  if (props.id != undefined) {
    varId = props.id;
    varId2 = varId + "Preview";
    varId3 = varId + "Send";
    varId4 = varId + "NomeImagem";
  };
  var varName = "nome";
  if (props.name != undefined) { varName = props.name };
  var varValue = "--";
  if (props.value != undefined) { varValue = props.value };
  // var varImg="../static/assetsv5/img/documentoscopia/carteira-icone.jpg";
  // if( props.img!=undefined){varImg=props.img};
  return (
    <div className="divImgEnviArquivo">

      <button className="BtEnviArquivoEnvio" onClick={() => { document.getElementById(varId).click() }}>Selecionar imagem</button>

      <input
        type="file"
        className="BtEnviArquivo"
        id={varId}
        name={varName}
        value={varValue}
        accept="image/*"
        required
        onChange={() => { clicouFiles(varId) }}
      />
      <img id={varId2} className="BtEnviArquivoText" width="50px" height="50px" />

      <input type="text"
        className="BtEnviaArquivoNomeImagem"
        id={varId4}
        name={varId4}
        form="formdocumentoscopia"
        value=" "
      />

      <input type="text"
        className="BtEnviArquivoText"
        id={varId3}
        name={varId3}
        form="formdocumentoscopia"
        value="testeX"
      />

      <style jsx>{`
        .BtEnviaArquivoNomeImagem {
          border: none;
          margin-left: 5px;
        }
        .BtEnviArquivoEnvio{
            height: 40px;
            margin: 10px;
            margin-left: 0px;
            padding: 10px;
            border-radius: 6px;
            border: solid 1px #fb851c;
            color: #f8562c;
            text-align: center;
            cursor: pointer;
            background-color: #fff;
        }
        .BtEnviArquivoText{
          display: none;
          border-radius: 10px;
        }
        .BtEnviArquivoPreview{
          margin-top: 10px;
        }
        .divImgEnviArquivo{
          display: inline-flex;
          flex-wrap: wrap;
        }
        .BtEnviArquivo{
            display: none
        }
      `}</style>
    </div>
  )
}
export default btEnviaArquivo
