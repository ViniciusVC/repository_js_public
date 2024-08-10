import React from 'react'

const LinhaDivisao = props => {
    return (
        <div className="sc-cSHVUG gvrFaQ">
            Não esta sendo usado.<br/>
            Substituir por {'<Line css="linhaDivisao"/>'} em import Line from '../../atoms/atLine/';<br/>
            Confirmar para apagar o arquivo.<br/>
            <style jsx>{`
            .gvrFaQ {
                display: block;
                width: 100%;
                height: 1px;
                position: static;
                bottom: unset;
                height: 1px;
                background-color: #d7d7d7;
                margin: 0;
                padding: 0;
                direction: horizontal
            }
            `}</style>
        </div>
    )
}

export default LinhaDivisao