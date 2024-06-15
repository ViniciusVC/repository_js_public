import React from 'react'
import Session1 from "../../moleculas/portabilidade/session1"
import * as Util from ' ../../../controller/util.js';
import Session2 from "../../moleculas/portabilidade/session2"
// import Session3 from "../../moleculas/portabilidade/session3"
// import Session4 from "../../moleculas/portabilidade/session4"

const indice = props => {
    var modo = Util.validaProps(props.modo,"html");
    return(
        <>
            <Session1 modo={modo}  /> 
            <Session2 modo={modo}  /> 
        </>
    )
}

export default indice ;