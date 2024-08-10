import React from "react";
import * as Util from "../../../controller/util.js";
//import { useAmp } from 'next/amp'

const atDiv = props => {
  var display = Util.validaProps(props.display, "vertical"); // vertical/horizontal/justificado/responsivo
  //var varWidth = Util.validaProps(props.width, "100%");
  //var varHeight = "";
  //if( props.height!=undefined){varHeight="height:"+props.height+";"};
  //${varHeight}
  //width:${varWidth}

  if (display == "vertical") {
    return (
      <div className="atDivVertical">
        {props.children}
        <style jsx>{`
          .atDivVertical {
            display: block;
            width: 100%;
          }
        `}</style>
      </div>
    );
  } else if (display == "justificado") {
    return (
      <div className="atDivJustificado">
        {props.children}
        <style jsx>{`
          .atDivJustificado {
            display: flex;
            justify-content: space-between;
            width: 80%;
          }
        `}</style>
      </div>
    );
  } else if (display == "horizontal") {
    return (
      <div className="atDivHorizontal">
        {props.children}
        <style jsx>{`
          .atDivHorizontal {
            display: inline-flex;
            flex-wrap: wrap;
            width: 100%;
          }
        `}</style>
      </div>
    )
  }else if(display == "DivLinhaResponsivo"){
     return(
      
          <div className="Divlinha">
                        <style jsx>{`

                        .Divlinha{
                            display:flex;
                            justify-content: space-between;
                            margin:0 20px;
                        }

                        @media (max-width: 1169px) {

                              .Divlinha {
                                display:flex;
                                flex-direction:column ;
                                padding-right: 15px;
                                padding-left: 15px;
                                margin-right: auto;
                                margin-left: auto;
                                max-width: 768px;

                              }
                      
                            @media(max-width:600px){
                              .Divlinha {
                                margin-right: 20px;
                              }
                            }
                        }


              `}

              </style>
          </div>
       
     )

  }else{
    //display=="responsivo"
    return (
      <div className="atDivResponsivo">
        {props.children}
        <style jsx>{`
          @media only screen and (min-width: 1000px) {
            .atDivResponsivo {
              display: flex;
              justify-content: space-between;
            }
          }
          @media only screen and (max-width: 1000px) {
            .atDivResponsivo {
              display: block;
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
};

export default atDiv;
