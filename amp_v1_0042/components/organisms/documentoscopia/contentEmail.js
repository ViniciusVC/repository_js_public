// content do Documentoscopia - Projeto Piloto
import React from 'react';
import BtLink from '../../atoms/atBtLink/index.js';
import * as Util from '../../../controller/util.js';
//console.log('Instanciou /componentes/organisms/documentoscopia/contentEmail.js');
const contentEmail = props => {
  var modo = Util.validaProps(props.modo,"html");


    return(
        <div classname="inicioemail" >
        <div className="tituloemail" >      
          É IMPORTANTE
        </div>
        <div className="tituloemail2" >
          GARANTIR A SUA SEGURANÇA
        </div>
        <div className="textoemail">
          vvc.<br/><br/>
          Enquanto processamos o seu pedido, é necessário que você acesse o link abaixo para enviar seus documentos.<br/> 
          Pra que a gente consiga proteger as suas informações, é essencial comprovar seus dados pessoais.
        </div>
        <div className="textoemail">
          <BtLink href="/meusdocumentos/" value="Acessar" estilo="laranja"/>
        </div>
        <div className="rodapeemail">
            Enviado por Oi S.A, vvc.com.br<br/>
            Copyright 2000-2018<br/>
            Confira o Contrato e regras de oferta.<br/><br/>
        </div>
      <style jsx>{`
        .inicioemail{
          background-color:#dedede;
        }
        .tituloemail{
          padding-top:30px;
          font-family:Helvetica, Arial, sans-serif;
          font-size:26px;
          font-weight:bold;
          letter-spacing:-1px;
          mso-line-height-rule:exactly;
          line-height:26px;
          text-align:left;
          color:#f8562c;
        }
        .tituloemail2{
          font-family:Helvetica, Arial, sans-serif;
          font-size:26px;
          font-weight:bold;
          letter-spacing:-1px;
          mso-line-height-rule:exactly;
          line-height:26px;
          text-align:left;
          color:#000000;
        }
        .textoemail{
          padding-top:30px;
          font-family:Helvetica, Arial, sans-serif;
          font-size:13px;
          mso-line-height-rule:exactly;
          line-height:1;
          text-align:left;color:#000000;
        }
        .rodapeemail{
          padding-top:30px;
          font-family:Helvetica, Arial, sans-serif;
          font-size:12px;
          letter-spacing:0px;
          line-height:22px;
          text-align:justify;
          color:#545454;
        }
        #outlook a {
          padding: 0;
        }

        .ReadMsgBody {
          width: 100%;
        }

        .ExternalClass {
          width: 100%;
        }

        .ExternalClass * {
          line-height: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }

        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }

        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }

        p {
          display: block;
          margin: 13px 0;
        }
      `}</style>
    </div>
    )
};

export default contentEmail
