import React from 'react';
import {storiesOf} from '@storybook/react';

import Collapsible from './index';

storiesOf('Atoms/Collapsible', module).add('Collapsible', () => (
  <Collapsible open renderTestTrigger>
    <div style={{backgroundColor: '#fff', padding: '15px'}}>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis,
        vehicula ac nisi. Detraxit consequat et quo num tendi nada. Copo furadis
        é disculpa de bebadis, arcu quam euismod magna. Praesent vel viverra
        nisi. Mauris aliquet nunc non turpis scelerisque, eget.
      </p>
      <p>
        Leite de capivaris, leite de mula manquis sem cabeça. Nullam volutpat
        risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
        Suco de cevadiss deixa as pessoas mais interessantis. Suco de cevadiss,
        é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
      </p>
    </div>
  </Collapsible>
));
