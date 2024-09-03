import { Singleton } from "./exemplo_singleton.js";

console.log("Exemplo do Padrão Singleton em JavaScript");

// Testando o Singleton
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
  
console.log(instance1 === instance2); // true
console.log(instance1.getTimestamp()); // Exibe o timestamp
console.log(instance2.getTimestamp()); // Mesmo timestamp que instance1
  
try {
  const instance3 = new Singleton(); // Isso lançará um erro
} catch (e) {
  console.error(e.message); // Exibe a mensagem de erro
}