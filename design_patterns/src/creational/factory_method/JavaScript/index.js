// Exemplo de Factory Method 

console.log("Exemplo de Factory Method  com JavaScript.");


// Classe abstrata Produto (Vehicle)
// É a classe base (produto) que define a interface comum (drive()) para todos os veículos.
class Vehicle {
    constructor(type) {
      this.type = type;
}
  
// Método que será implementado pelas subclasses
drive() {
      throw new Error("Este método deve ser implementado nas subclasses");
    }
}
  
// Subclasse Concrete Product: Car
// Estas classes concretas implementam o método drive() específico para cada tipo de veículo.
class Car extends Vehicle {
    constructor() {
      super("Car");
    }
  
    drive() {
      console.log("Dirigindo um carro.");
    }
}
  
// Subclasse Concrete Product: Bike
// Estas classes concretas implementam o método drive() específico para cada tipo de veículo.
class Bike extends Vehicle {
    constructor() {
      super("Bike");
    }
  
    drive() {
      console.log("Dirigindo uma bicicleta.");
    }
}
  
// Criador Abstract Creator
// É uma classe abstrata que define o método createVehicle(), que será implementado pelas subclasses.
class VehicleFactory {
    // Método Factory que deve ser implementado pelas subclasses
    createVehicle() {
      throw new Error("Este método deve ser implementado nas subclasses");
    }
}

  
// Subclasse Concrete Creator: CarFactory
// Cada uma destas classes implementa o método createVehicle() para criar um objeto específico (Car ou Bike).
class CarFactory extends VehicleFactory {
    createVehicle() {
      return new Car();
    }
}

// Subclasse Concrete Creator: BikeFactory
// Cada uma destas classes implementa o método createVehicle() para criar um objeto específico (Car ou Bike).
class BikeFactory extends VehicleFactory {
    createVehicle() {
      return new Bike();
    }
}

  
// Criar um carro usando a fábrica de carros
const carFactory = new CarFactory();
const myCar = carFactory.createVehicle();
myCar.drive(); // Output: Dirigindo um carro.
  
// Criar uma bicicleta usando a fábrica de bicicletas
const bikeFactory = new BikeFactory();
const myBike = bikeFactory.createVehicle();
myBike.drive(); // Output: Dirigindo uma bicicleta.

  
/*
O código cria objetos Car e Bike usando as respectivas fábricas (CarFactory e BikeFactory), e cada veículo executa seu comportamento específico.
O padrão Factory Method permite que o código seja flexível e extensível, facilitando a adição de novos tipos de produtos sem modificar o código existente.
*/