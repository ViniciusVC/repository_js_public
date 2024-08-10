// content do Atendimento - Layout meuvvc
import React from "react";
import * as Util from "../../../controller/util.js";
import AtendimentoSession1 from "../../moleculas/meuvvc/moAtendimentoSession1.js";
import AtendimentoSession4 from "../../moleculas/meuvvc/moAtendimentoSession4.js";
import AtendimentoSession5 from "../../moleculas/meuvvc/moAtendimentoSession5.js";
import AtendimentoSession6 from "../../moleculas/meuvvc/moAtendimentoSession6.js";
import AtendimentoSession7 from "../../moleculas/meuvvc/moAtendimentoSession7.js";

const contentAtendimento = props => {
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div className="contentAtendimento">
      <AtendimentoSession1 modo={modo} />
      <AtendimentoSession4 modo={modo} />
      <AtendimentoSession5 modo={modo} />
      <AtendimentoSession6 modo={modo} />
      <AtendimentoSession7 modo={modo} />
      <style jsx>{`
        .contentAtendimento {
          /* margin:30px;
          max-width:1330px; */
          /*margin: 70px 300px 40px 300px;*/
          /*margin-left: 30px;
            margin-right: 30px;*/
                margin: 0 auto;
                margin-top: 80px;
                max-width:1330px;
                width: 100%;  
        }
      `}</style>
    </div>
  );
};

export default contentAtendimento;
