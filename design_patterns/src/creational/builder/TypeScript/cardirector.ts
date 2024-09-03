// Diretor que controla o processo de construção
import { Car } from "./car.ts"; 
import { CarBuilder } from "./carbuilder.ts";

export class CarDirector {
    private builder: CarBuilder;
  
    constructor(builder: CarBuilder) {
      this.builder = builder;
    }
  
    constructSportsCar(): Car {
      return this.builder
        .setMake('Ferrari')
        .setModel('488 Spider')
        .setYear(2022)
        .setColor('Vermelho')
        .setEngine('V8 Turbo')
        .setTransmission('Automática')
        .build();
    }
  
    constructSUV(): Car {
      return this.builder
        .setMake('Toyota')
        .setModel('RAV4')
        .setYear(2022)
        .setColor('Preto')
        .setEngine('V6')
        .setTransmission('Manual')
        .build();
    }
}
  
// O diretor controla o processo de construção e usa o CarBuilder para criar diferentes tipos de carros.