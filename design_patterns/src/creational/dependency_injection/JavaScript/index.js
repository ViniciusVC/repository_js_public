// Exemplo de Injecao de Dependancia

console.log("Exemplo de Injeção de Dependência com JavaScript.");

class Engine {
    start() {
      console.log("Engine started");
    }
}

class Car {
    constructor(engine) {
        //A classe Car recebe a instancia como um parametro.
        this.engine = engine;
    }
  
    start() {
        this.engine.start();
    }
}
  
// Criando a instancia de Engine fora da classe Car
const engine = new Engine();

// Envie a dependencia para a classe Car por parametro.
const car = new Car(engine);

car.start(); // Output: Engine started
