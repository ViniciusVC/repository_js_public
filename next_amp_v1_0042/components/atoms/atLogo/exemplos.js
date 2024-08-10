
import React from 'react';
import Logo from './index.js';
import Div from '../atDiv/index.js';
import * as logos from './logofiles';

export const atLogo = (modo) => (
  <Div display="justificado">

      <Div display="vertical">
        <h2>atIcon</h2>
        <Logo type="oi"/>
        <p className="p">código : {'<Logo type="oi"/>'}</p>
        <Logo type="minhavvc"/>
        <p className="p">código : {'<Logo type="minhavvc"/>'}</p>
        <Logo type="minhavvc2"/>
        <p className="p">código : {'<Logo type="minhavvc2"/>'}</p>
        <Logo type="minhavvc3"/>
        <p className="p">código : {'<Logo type="minhavvc3"/>'}</p>
        <Logo type="vvcplay"/>
        <p className="p">código : {'<Logo type="vvcplay"/>'}</p>
        <Logo type="roxo01"/>
        <p className="p">código : {'<Logo type="roxo01"/>'}</p>
        <Logo type="roxo02"/>
        <p className="p">código : {'<Logo type="roxo02"/>'}</p>
        <p>modo={modo}</p>
      </Div>
      <Div display="vertical">
        <h2>atIcon</h2>
        <Logo type="oi" width="40px"/>
        <p className="p">código : {'<Logo type="oi" width="40px"/>'}</p>
        <Logo type="minhavvc" width="40px"/>
        <p className="p">código : {'<Logo type="minhavvc" width="40px"/>'}</p>
        <Logo type="minhavvc2" width="40px"/>
        <p className="p">código : {'<Logo type="minhavvc2" width="40px"/>'}</p>
        <Logo type="minhavvc3" width="40px"/>
        <p className="p">código : {'<Logo type="minhavvc3" width="40px"/>'}</p>
        <Logo type="vvcplay" width="40px"/>
        <p className="p">código : {'<Logo type="vvcplay" width="40px"/>'}</p>
        <Logo type="roxo01" width="40px"/>
        <p className="p">código : {'<Logo type="roxo01" width="40px"/>'}</p>
        <Logo type="roxo02" width="40px"/>
        <p className="p">código : {'<Logo type="roxo02" width="40px"/>'}</p>
        <p>modo={modo}</p>
      </Div>
      <Div display="vertical">
        <h2>atIcon</h2>
        <Logo type="oi" width="80px"/>
        <p className="p">código : {'<Logo type="oi" width="80px"/>'}</p>
        <Logo type="minhavvc" width="80px"/>
        <p className="p">código : {'<Logo type="minhavvc" width="80px"/>'}</p>
        <Logo type="minhavvc2" width="80px"/>
        <p className="p">código : {'<Logo type="minhavvc2" width="80px"/>'}</p>
        <Logo type="minhavvc3" width="80px"/>
        <p className="p">código : {'<Logo type="minhavvc3" width="80px"/>'}</p>
        <Logo type="vvcplay" width="80px"/>
        <p className="p">código : {'<Logo type="vvcplay" width="80px"/>'}</p>
        <Logo type="roxo01" width="80px"/>
        <p className="p">código : {'<Logo type="roxo01" width="80px"/>'}</p>
        <Logo type="roxo02" width="80px"/>
        <p className="p">código : {'<Logo type="roxo02" width="80px"/>'}</p>
        <p>modo={modo}</p>
      </Div>
      <style jsx>{`
          .p{
            margin-top: 40px; 
            background-color: #ffffff;
            color: #000000
          }
        `}</style>
    
  </Div>
);

export default atLogo;