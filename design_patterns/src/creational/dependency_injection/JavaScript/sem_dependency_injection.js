// Sem Injeção de Dependência
console.log("Exemplo de uma classe Car que cria sua própria dependência.");

class Engine {
    start() {
      console.log("Engine started");
    }
}
  
class Car {
    constructor() {
      this.engine = new Engine();
    }

    start() {
      this.engine.start();
    }
}
  
const car = new Car();
car.start(); // Output: Engine started  