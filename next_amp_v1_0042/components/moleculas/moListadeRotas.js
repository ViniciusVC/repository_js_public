import React from 'react';
import ListadeRotas from './moListadeRotas/index.js';

export const moListadeRotas = (modo) => (
    <div>
      <h2>moListaRotas</h2>
        <ListadeRotas/>
        modo={modo}
    </div>
);

export default moListadeRotas;