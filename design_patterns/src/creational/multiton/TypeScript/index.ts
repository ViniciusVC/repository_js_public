import {Multiton} from "./multiton.ts";

console.log("Exemplo do Padrão Multiton em TypeScript");

// Testando o padrão Multiton
const instance1 = Multiton.getInstance('a');
const instance2 = Multiton.getInstance('b');
const instance3 = Multiton.getInstance('a');

console.log(instance1 === instance3); // true
console.log(instance1 === instance2); // false