import React from "react";
import AtendimentoSession2 from "./moAtendimentoSession2.js";
import AtendimentoSession3 from "./moAtendimentoSession3.js";
import * as Util from '../../../controller/util.js';
import Div from "../../atoms/atDiv/index.js"

const moAtendimentoSession1 = props => {
    var modo = Util.validaProps(props.modo,"html");
    return (
        <div className="moAtendimentoSession1">
            <Div display="responsivo">
                <AtendimentoSession2 modo={modo}/>
                <AtendimentoSession3 modo={modo}/>
            </Div>
            <style jsx>{`
                .moAtendimentoSession1{
                    width:100%;                    
                }
            `}</style>
        </div>
    )
}

export default moAtendimentoSession1