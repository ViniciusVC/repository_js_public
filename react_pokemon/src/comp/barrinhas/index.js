import React from 'react';

const barrinha= ({legenda, valor}) => {
  let bgColor = "#0000ff";

  if (valor<30){
    bgColor = "#0000ff";
  }else if (valor<70){
    bgColor = "#6600ff";
  }else if (valor<85){
    bgColor = "#880099";
  }else if (valor>100){
    bgColor = "#ff0000";
  }else{
    bgColor = "#ff0055";
  }
  
  if (valor>100)valor=100;
  const valorw = valor+"%";

  return (
    <div style={{ width: '100%'}}>
      {legenda}<div className="barrinha10" style={{ backgroundColor: bgColor, width: valorw, height: '10px'}}></div>
    </div>
  );
};


export default barrinha;