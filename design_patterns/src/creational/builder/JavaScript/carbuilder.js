import { Car } from "./car.js";

// Builder para construir um carro
// A classe CarBuilder fornece métodos para definir cada parte do carro. Cada método retorna this, permitindo o encadeamento de métodos (method chaining).

export class CarBuilder {
    constructor() {
      this.car = new Car();
    }
  
    setMake(make) {
      this.car.make = make;
      return this;
    }
  
    setModel(model) {
      this.car.model = model;
      return this;
    }
  
    setYear(year) {
      this.car.year = year;
      return this;
    }
  
    setColor(color) {
      this.car.color = color;
      return this;
    }
  
    setEngine(engine) {
      this.car.engine = engine;
      return this;
    }
  
    setTransmission(transmission) {
      this.car.transmission = transmission;
      return this;
    }
  
    // Método para retornar o carro construído
    build() {
      return this.car;
    }
  }