
import React from 'react';
import Img from './index.js';

export const atImg = (modo) => (
    <div className="divExmploPrice">
      <h2>atImg</h2>
      <div>
        Componente Img com parametro:
          <Img 
            src="https://seeklogo.com/images/O/vvc-logo-97A308AE93-seeklogo.com.png"
            width="50px"
            height="50px"
            alt="Componente Img exemplo next"
            title="Componente Img exemplo next"
            class="ClassImgNext"
            modo={modo} />
            codigo : {'<Img src="img.png" width="50px" height="50px" alt="Componente Img exemplo next" title="Componente Img exemplo next" class="ClassImgNext" modo="html" />'}
      </div>
      <div>
        Componente Img sem parametro:
            <Img />
            codigo : {"<Img />"}
      </div>
      modo={modo}
      <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
        `}</style>
    </div>
);

export default atImg;
