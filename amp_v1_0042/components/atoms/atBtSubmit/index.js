// layout de Documentoscopia - Projeto Piloto
import React from 'react';
import * as Util from '../../../controller/util.js';

const btSubmit = props => {
  var varValue = Util.validaProps(props.value,"");
  return(
    <span>
      <button type="submit" className="btsubmit" >{varValue}</button>
      <style jsx>{`
          .btsubmit{
            width: 280px;
            height: 48px;
            margin: 10px;
            color: #ffffff;
            cursor: pointer;
            border-radius:6px;
            border: solid 1px #dbdbdb;
            text-align: center;
            background-color: #f8562c;
            background-image: linear-gradient(260deg, #fb851c, #f8562c); 
          }
          .btsubmit:hover{
            transition-duration: 1s;
            color: #f8562c;
            border: solid 1px #fb851c;
            background-color: #ffffff;
            background-image: none; 
          }
        `}</style>
    </span>
  )
}
//transition: background-image: 2s, transform 2s;
//-webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
export default btSubmit