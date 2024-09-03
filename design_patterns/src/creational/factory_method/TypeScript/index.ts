// Exemplo de Factory Method 

console.log("Exemplo de Factory Method  com TypeScript.");

// Classe abstrata Produto
// E a classe base (produto) que define a interface comum (drive()) para todos os veiculos.
abstract class Veiculo {
    constructor(public type: string) {}
  
    // Metodo abstrato que sera implementado pelas subclasses
    abstract drive(): void;
}
  
// Subclasse Concrete Product: CarroBase
// Estas classes concretas implementam o metodo drive() especifico para cada tipo de veiculo.
class CarroBase extends Veiculo {
    constructor() {
      super("CarroBase");
    }
    // Metodo que sera implementado pelas subclasses
    drive(): void {
      console.log("Dirigindo um carro.");
    }
}
  
// Subclasse Concrete Product: Bicicleta
// Estas classes concretas implementam o metodo drive() especifico para cada tipo de veiculo.
class Bicicleta extends Veiculo {
    constructor() {
      super("Bicicleta");
    }
  
    drive(): void {
      console.log("Dirigindo uma bicicleta.");
    }
}
  
// Criador Abstract Creator.
// E uma classe abstrata que define o metodo createVehicle(), que sera implementado pelas subclasses.
abstract class VeiculoFabrica {
    // Matodo Fabrica que deve ser implementado pelas subclasses.
    abstract createVeiculo(): Veiculo;
}
  
// Subclasse Concrete Creator: CarroFabrica
// Cada uma destas classes implementa o matodo createVehicle() para criar um objeto especifico (Car ou Bike).
class CarroFabrica extends VeiculoFabrica {
    createVeiculo(): Veiculo {
      return new CarroBase();
    }
}
  
// Subclasse Concrete Creator: BicicletaFabrica
// Cada uma destas classes implementa o metodo createVehicle() para criar um objeto especifico (Carro ou Bicicleta).
class BicicletaFabrica extends VeiculoFabrica{
    createVeiculo(): Veiculo {
      return new Bicicleta();
    }
}
  
// Exemplo de uso do Factory Method.
  
// Criar um carro usando a fabrica de carros.
const carroFabrica = new CarroFabrica();
const meuCarro = carroFabrica.createVeiculo();
meuCarro.drive(); // Output: Dirigindo um carro.

// Criar uma bicicleta usando a fabrica de bicicletas
const bicicletaFabrica = new BicicletaFabrica();
const minhaBicicleta = bicicletaFabrica.createVeiculo();
minhaBicicleta.drive(); // Output: Dirigindo uma bicicleta.
