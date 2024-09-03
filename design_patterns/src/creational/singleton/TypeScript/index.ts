import { Singleton } from "./exemplo_singleton";

console.log("Exemplo do Padrão Singleton em TypeScript");

// Testando o Singleton
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
  
console.log(instance1 === instance2); // true
console.log(instance1.getTimestamp()); // Exibe o timestamp
console.log(instance2.getTimestamp()); // Mesmo timestamp que instance1
  
try {
    // Isso causaria um erro de compilação, pois o construtor é privado
    // const instance3 = new Singleton();
} catch (e) {
    console.error((e as Error).message); // Exibe a mensagem de erro
}