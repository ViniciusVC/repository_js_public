// layout dedo minha-oi pré login
import React from 'react'
import Line from '../../atoms/atLine/';
import FooterPrimeiraCamada from '../../moleculas/minha-oi/moFooterPrimeiraCamada';
import FooterSegundaCamada from '../../moleculas/minha-oi/moFooterSegundaCamada';
import * as Util from '../../../controller/util.js';

const footerminhavvc = props => {
    var modo = Util.validaProps(props.modo,"html");
    return (
        <footer className="footerminhavvc">
           
            <FooterPrimeiraCamada modo={modo}/>
            <Line css="linhaDivisao"/>
            <FooterSegundaCamada modo={modo}/>
            <style jsx>{`
                .footerminhavvc {
                    margin: 0 auto;
                    max-width: 1280px;
                    width: 100%;
                }
            `}</style>
        </footer>
    )
}
export default footerminhavvc
