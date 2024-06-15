//Component atomo Recaptcha.js do google
import React from 'react'

// console.log('Instanciando /componentes/atoms/atcaptha/atGoogleRecaptcha.js');

const Recaptcha = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  if (modo=="amp" || modo=="AMP") {
    return(
      <div>
              <amp-iframe
                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lf_YVAUAAAAALr-8Qk8-lcrZ2XqLIJEDCdgBFSu&amp;co=aHR0cHM6Ly93d3cub2kuY29tLmJyOjQ0Mw..&amp;hl=pt-BR&amp;v=v1563777128698&amp;size=invisible&amp;badge=bottomright&amp;cb=vfe7zpfzbc62"
                width="256"
                height="60"
                role="presentation"
                name="a-lvocne2d0iwd"
                frameborder="0"
                scrolling="no"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation  allow-modals allow-popups-to-escape-sandbox">
              </amp-iframe>
              <style jsx>{`
                iframe{
                  opacity: 505;
                }
              `}</style>
      </div>  
      )
  }else{
    return(
      <div>
              <iframe
                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lf_YVAUAAAAALr-8Qk8-lcrZ2XqLIJEDCdgBFSu&amp;co=aHR0cHM6Ly93d3cub2kuY29tLmJyOjQ0Mw..&amp;hl=pt-BR&amp;v=v1563777128698&amp;size=invisible&amp;badge=bottomright&amp;cb=vfe7zpfzbc62"
                width="256"
                height="60"
                role="presentation"
                name="a-lvocne2d0iwd"
                frameborder="0"
                scrolling="no"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation  allow-modals allow-popups-to-escape-sandbox">
              </iframe>
              <style jsx>{`
                iframe{
                  opacity: 505;
                }
              `}</style>
      </div>
    )
  }
}

export default Recaptcha

/*
  <iframe
    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lf_YVAUAAAAALr-8Qk8-lcrZ2XqLIJEDCdgBFSu&amp;co=aHR0cHM6Ly93d3cub2kuY29tLmJyOjQ0Mw..&amp;hl=pt-BR&amp;v=v1563777128698&amp;size=invisible&amp;badge=bottomright&amp;cb=vfe7zpfzbc62"
    width="256" height="60" role="presentation" name="a-lvocne2d0iwd" frameborder="0" scrolling="no" sandbox="allow-forms
  allow-popups allow-same-origin allow-scripts allow-top-navigation  allow-modals allow-popups-to-escape-sandbox">
  </iframe>
*/