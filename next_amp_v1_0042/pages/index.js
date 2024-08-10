
import React from 'react';
import Index from '../components/templates/index.js';
//import { withAmp } from 'next/amp';

const RotaIndex = function(props){
  console.log('Rota index');
  return(
    <Index modo="html" cidade="Rio de Janeiro"></Index>
  )
}
//export default withAmp(RotaIndex, { hybrid: true });
//export default withAmp(RotaIndex);
export default RotaIndex
