import React from "react";
//import Div from "../../atoms/atDiv/index.js"

const moHomeCard1 = props => {
    return (
        <div className="moHomeCard1">
            <a href={props.link}>
            icon[{props.icone}]
            <div>
                <strong>{props.titulo}</strong>
                {props.texto}
            </div>
            <div className="moHomeCard1Mobile">
                {props.Resumo}
            </div>
            </a>
            <style jsx>{`
            .moHomeCard1{
                font-family: oiTextRegular, sans-serif;
                background-color: #ffffff;
                border-radius:8px;
                color: #222222;
                display: block;
                font-size: 1rem;/*16px;*/
                text-align: center;
                text-decoration: none;
                border: solid 1px #000000;
                cursor: pointer;
                outline: 0;
                margin: 0;
                box-sizing: border-box;
                font-style: normal;
                transition: 0.5s;
                -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
                -moz-box-shadow:    2px 2px 20px rgba(1, 1, 1, 0.17);
                box-shadow:         2px 2px 20px rgba(1, 1, 1, 0.17);
            }

             @media only screen and (min-width : 1000px) {
                .moHomeCard1{
                    padding:20px;
                    width: 210px;
                    height: 210px;
                }
                .moHomeCard1Mobile{
                    width: 100%;
                }
            }
            @media only screen and (max-width : 1000px) {
                .moHomeCard1{
                    padding:10px;
                    width: 100px;
                    height: 100px;
                }
                .moHomeCard1Mobile{
                    width:100%;
                    display:block;                    
                }
            }

        `}</style>
        </div>
    )
}

export default moHomeCard1