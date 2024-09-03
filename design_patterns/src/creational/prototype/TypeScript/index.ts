import {Prototype} from "./Prototype"

console.log("Exemplo do Padrão Prototype em TypeScript");
  
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