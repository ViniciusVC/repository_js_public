// Exemplo de Injecao de Dependancia

console.log("Exemplo de Injecao de Dependencia com TypeScript.");

class Turbinar {
    start(): void {
      console.log("Turbinar started");
    }
}
  
class Carro {
    private turbinar: Turbinar;
  
    constructor(turbinar: Turbinar) {
      //A classe Car recebe a instancia como um parametro.
      this.turbinar = turbinar;
    }
  
    start(): void {
      this.turbinar.start();
    }
}
  
// Criando a instância de Engine fora da classe Car
const turbinar = new Turbinar();

// Envie a dependencia para a classe Car por parametro.
const carrinho = new Carro(turbinar);

carrinho.start(); // Output: Turbinar started
  