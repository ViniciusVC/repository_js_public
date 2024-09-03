import {Prototype} from "./prototype.js";
//const Prototype = require('./prototype.js');

console.log("Exemplo do Padrão Prototype em JavaScript");

// Usando o Prototype para criar novos objetos
const original = new Prototype('John Doe', 30);
original.display(); // Nome: John Doe, Idade: 30

// Clonando o objeto original
const clone1 = original.clone();
clone1.display(); // Nome: John Doe, Idade: 30

// Alterando o clone sem afetar o original
clone1.name = 'Jane Doe';
clone1.display(); // Nome: Jane Doe, Idade: 30

// Verificando que o original não foi alterado
original.display(); // Nome: John Doe, Idade: 30

/*
 O padrão Prototype permite criar novos objetos copiando (ou "clonando") outros objetos existentes, em vez de criá-los do zero.
 ------------------------------
 O objeto original é criado e exibido.
 O objeto clone1 é criado usando o método clone(), e em seguida, seu nome é alterado.
 A mudança no clone1 não afeta o objeto original, demonstrando que o clone é uma instância independente.

 nota: este codigo usa ESM ou ES6 Modules (import e export).
 
 
*/