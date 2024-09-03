
console.log("Exemplo do Padrão Multiton em JavaScript");

// A classe Multiton recebe o name no construtor.
// Este name serve como a chave para identificar cada instância única.
class Multiton {

    constructor(name) {
      console.log("verifica se já existe uma instância associada à chave fornecida ("+name+").")
      if (Multiton.instances[name]) {
        return Multiton.instances[name];
      }
      this.name = name;
      Multiton.instances[name] = this;
    }
  
    getName() {
      return this.name;
    }
    
}
  
// Objeto estático para armazenar as instâncias
Multiton.instances = {};
  
// Utilização do Multiton
const instanceA = new Multiton('A');
const instanceB = new Multiton('B');
const anotherInstanceA = new Multiton('A');
  
console.log(instanceA === anotherInstanceA); // true
console.log(instanceA === instanceB); // false
  
console.log(instanceA.getName()); // 'A'
console.log(instanceB.getName()); // 'B'