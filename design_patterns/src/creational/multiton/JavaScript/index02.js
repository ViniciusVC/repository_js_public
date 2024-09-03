console.log("Exemplo(2) do Padrão Multiton em JavaScript");

/*
  O método getInstance() garante que para cada chave (key),
  exista apenas uma instância correspondente, 
  reutilizando-a se necessário.
*/

class Multiton {
  
  constructor(name) {
    this.name = name;
  }

  static getInstance(key) {
    if (!Multiton.instances) {
      Multiton.instances = new Map();
    }

    if (!Multiton.instances.has(key)) {
      Multiton.instances.set(key, new Multiton(key));
    }

    return Multiton.instances.get(key);
  }
}

// Testando o padrão Multiton
const instance1 = Multiton.getInstance('a');
const instance2 = Multiton.getInstance('b');
const instance3 = Multiton.getInstance('a');

console.log(instance1 === instance3); // true
console.log(instance1 === instance2); // false

