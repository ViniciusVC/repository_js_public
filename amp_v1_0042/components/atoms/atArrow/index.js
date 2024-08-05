import React from 'react';
import * as Util from '../../../controller/util.js';

const btArrow = props => {
  var varColor = Util.validaProps(props.color,"#D82482");
  // var varHref = "www.vvcestudio.com.br";
  // if(props.href!=undefined){varHref=props.href};
  // var varEstilo = "";
  // if(props.estilo!=undefined){varEstilo=props.estilo};
  return(
     <div className="atArrow">
          <svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <polygon id="chevron" points="7.41 8 12 12.9446694 16.59 8 18 9.52226721 12 16 6 9.52226721" />
            </defs>
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Interface/Seta-expandir" transform="translate(-6.000000, -8.000000)">
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#chevron" />
                </mask>
                <use id="Seta-expandir" fill={varColor} fillRule="nonzero" xlinkHref="#chevron" />
              </g>
            </g>
        </svg>
        <style jsx>{`
            atArrow {
              width: 9px;
              height: 7px;
              transform: rotate(0deg);
              transition: 0.3s ease;
            }
        `}</style>
    </div>
  )
}
export default btArrow