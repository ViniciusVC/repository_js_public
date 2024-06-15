import React from "react";
import HeaderLogo from "./moHeaderLogo.js";
import HeaderEntrar from "./moHeaderEntrar.js";
import * as Util from '../../../../controller/util.js';


const headerSegundaCamada = props => {
    var modo = Util.validaProps(props.modo,"html");
    
    return (
        <section>
            <div className="atDivHorizontal">
                
                <HeaderLogo modo={modo}/>
                <HeaderEntrar modo={modo}/>
            </div>
        <style jsx>{`
            .atDivHorizontal{
                margin-top:28px;
                margin-bottom:24px;
                display: inline-flex;
                flex-wrap: wrap;    
                justify-content: space-between;
                width: 100%;
               
            }
        `}</style>
    </section>
    )
}

export default headerSegundaCamada
