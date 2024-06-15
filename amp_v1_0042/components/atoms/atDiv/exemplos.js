
import React from 'react';
import Div from './index.js';

export const atDiv = (modo) => (
    <div >
      <div className="p"><h2>atDiv (vertical/horizontal/justificado/responsivo)</h2></div>
        
        <Div display="responsivo">
          <div className="divExmploAtDIV">item1</div>
          <div className="divExmploAtDIV">item2</div>
        </Div>
        <div>
          <p className="p">
            Codigo : {'<Div display="responsivo"></Div>'}<br/>
            modo={modo}
          </p>
        </div>
        
        <Div display="justificado">
          <div className="divExmploAtDIV">item1</div>
          <div className="divExmploAtDIV">item2</div>
          <div className="divExmploAtDIV">item3</div>
        </Div>
        <div>
          <p className="p">
            Codigo : {'<Div display="justificado"></Div>'}<br/>
            modo={modo}
          </p>
        </div>

        <Div display="horizontal">
          <div className="divExmploAtDIV">item1</div>
          <div className="divExmploAtDIV">item2</div>
          <div className="divExmploAtDIV">item3</div>
        </Div>
        <div>
          <p className="p">
            Codigo : {'<Div display="horizontal"></Div>'}<br/>
            modo={modo}
          </p>
        </div>

        <Div display="vertical">
          <div className="divExmploAtDIV">item1</div>
          <div className="divExmploAtDIV">item2</div>
          <div className="divExmploAtDIV">item3</div>
        </Div>
        <div>
          <p className="p">
            Codigo : {'<Div display="vertical"></Div>'}<br/>
            modo={modo}
          </p>
        </div>
        
        <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
          .divExmploAtDIV{
            margin : 10px;
          }
        `}</style>
    </div>
);

export default atDiv;
