import React from 'react'
import vvcplay from '../../components/templates/vvc-play/indexvvcplay'

const Rotavvcplay = function (props) {
    console.log('Rota vvc-play');
    console.log(props.url.query);
    var cidade = "Rio de Janeiro";
    if (props.url.query.cidade != undefined) {
        cidade = props.url.query.cidade
    }
    return (
        <vvcplay modo="html" cidade={cidade}></vvcplay>
    )
}

export default Rotavvcplay
