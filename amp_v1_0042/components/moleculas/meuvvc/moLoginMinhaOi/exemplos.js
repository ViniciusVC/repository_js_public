
import React from 'react';
import Head from 'next/head'
import Loginminhavvc from './index.js';


export const moLoginminhavvc = (modo) => {
  return(
    <div >
      <Head>
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <div className="p"><h2>Login meuvvc</h2></div>
        
        <Loginminhavvc modo={modo}/>
        <div>
          <p className="p">
            Codigo : {'<Loginminhavvc modo="'+modo+'"/>'}<br/>
            modo={modo}
          </p>
        </div>
        
        <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
        `}</style>
    </div>
  )
};

export default moLoginminhavvc;
