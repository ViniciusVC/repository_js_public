import React from 'react'

const bodyTitulo = props => {
    return (
        <>
            <div className="localheader firstc">
                <h2 className="main h2">Mapa de Cobertura</h2>
                <h3>Consulte a área de cobertura e a disponibilidade dos serviços móveis da Oi</h3>
            </div>
            <style jsx>{`
            .localheader h2, .localheader h3 {
                float: none;
                width: 100%;
                padding-left: 0;
                font-family: SimplonBP-Regular, oiTextRegular;
                margin-bottom: 10px;
                text-align: center;
                text-transform: uppercase;
            }
            .localheader h2 {
                font-size: 46px;
                color: #4D4D4D;
            }
            .localheader h3 { 
                font-size: 25px;
                color: #777;
            }
            .localheader {
                height: auto;
            }
            `}</style>
        </>
    )
}

export default bodyTitulo
