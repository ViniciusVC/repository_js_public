// header do minha-oi pré login
import React from 'react';
import HeaderPrimeiraCamada from '../../moleculas/minha-oi/moHeaders/moHeaderPrimeiraCamada';
import HeaderSegundaCamada from '../../moleculas/minha-oi/moHeaders/moHeaderSegundaCamada';
import Line from '../../atoms/atLine/';
import HeaderMenu from "../../moleculas/minha-oi/moHeaders/headerMenu";
import HeaderMenu2 from "../../moleculas/minha-oi/moHeaders/headerMenu2";
import * as Util from '../../../controller/util.js';
import Head from 'next/head';

const headerminhavvc = props => {
    // var cidade = Util.validaProps(props.cidade,"Rio de Janeiro");
    var modo = Util.validaProps(props.modo,"html");
    
    return (
        <>
      
        <header className="headerminhavvc">
            <HeaderPrimeiraCamada modo={modo}/>
            <Line css="linhaDivisao"/>
            <HeaderSegundaCamada modo={modo}/>
            
        </header>
           <Line css="linhaDivisao"/>
                <HeaderMenu2 modo={modo}/>
            <Line css="linhaDivisao"/>
        <style jsx>{`
                .headerminhavvc {
                    margin: 0 auto;
                    max-width: 1280px;
                }
                @media(max-width: 520px) {
                    padding: 0 1rem;
                }
            `}</style>
        </>
    )
}

export default headerminhavvc