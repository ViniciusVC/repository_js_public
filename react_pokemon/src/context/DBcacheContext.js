import React, { createContext, useState } from 'react';

export const DBcacheContext = createContext();

export const DBcacheProvider = ({ children }) => {
  const [dbcache, setDbcache] = useState({
    "Batalha": {
      indexTreinado: 0,
      indexAdversario: 0
    },
    "Capturar":[
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""},
    ],
    "Colecao":[
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""}
    ],
    "CachePokemmons":[],
    "sorteio":0,
    "levelTreinador": 1
    });

  return (
    <DBcacheContext.Provider value={{ dbcache, setDbcache }}>
      {children}
    </DBcacheContext.Provider>
  );
};

/*
index : num (index no CachePokemmons)
id : num (id no PokeAPI)
order : 
name : string
sprites : string (imagem Movendo)
shiny : string (imagem parado)
vida : num
ataque : num
defesa : num 
superAtaque : num
superDefesa : num
velocidade : num
*/