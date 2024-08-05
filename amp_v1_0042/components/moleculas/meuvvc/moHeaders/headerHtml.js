import React from 'react'
import * as Util from '../../../../controller/util';
import path from "path";

const headerHtml = props => {

    var modo = Util.validaProps(props.modo, "html");

    let scriptHead = [];

    if (modo === "html") {
        scriptHead = [
            <script src={path.resolve(__dirname, 'static', 'assetsv5', 'js', 'menumobile.js')}></script>,
        ]

    } else {
        scriptHead = [
            <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>,
            <script async custom-element="amp-script" src="https://cdn.ampproject.org/v0/amp-script-0.1.js"></script>,
            <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>,
        ]
    }

    return (
        <>
            {scriptHead.map(head => (//array de scripts   
                head
            ))}
        </>
    )
}

export default headerHtml;
