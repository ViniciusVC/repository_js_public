import React from 'react'
import BodyTitulo from '../../moleculas/mapa-cobertura/bodyTitulo'

const bodyMapaCobertura = props => {
    return (
        <>
            <BodyTitulo />
            <div className="container-iframe-mapa-cobertura">
                <div>
                    <iframe
                        name="framecobertura"
                        id="framecobertura"
                        scrolling="no"
                        width="940"
                        height="640"
                        frameBorder="no"
                        src="//www.vvc.com.br/portal-vvc-cobertura/"
                    />
                </div>
            </div>
            <style jsx>{`
            .container-iframe-mapa-cobertura {
                text-align: center;
            }
            @media(max-width: 320px) {
                width: 320px;
            }
            `}</style>
        </>
    )
}

export default bodyMapaCobertura