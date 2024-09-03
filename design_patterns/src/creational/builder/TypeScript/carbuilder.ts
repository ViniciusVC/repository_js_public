import { Car } from "./car.ts";

// Builder para construir um carro
export class CarBuilder {
    private car: Car;
  
    constructor() {
      this.car = new Car();
    }
  
    setMake(make: string): CarBuilder {
      this.car.make = make;
      return this;
    }
  
    setModel(model: string): CarBuilder {
      this.car.model = model;
      return this;
    }
  
    setYear(year: number): CarBuilder {
      this.car.year = year;
      return this;
    }
  
    setColor(color: string): CarBuilder {
      this.car.color = color;
      return this;
    }
  
    setEngine(engine: string): CarBuilder {
      this.car.engine = engine;
      return this;
    }
  
    setTransmission(transmission: string): CarBuilder {
      this.car.transmission = transmission;
      return this;
    }
  
    // Método para retornar o carro construído
    build(): Car {
      return this.car;
    }
}

/*
    Builder para construir um carro
    A classe CarBuilder fornece métodos para definir cada parte do carro. Cada método retorna this, permitindo o encadeamento de métodos (method chaining).
    Os métodos do builder retornam a própria instância do CarBuilder, permitindo o encadeamento de métodos. Cada método é tipado de acordo com os tipos das propriedades do carro.
*/