// Diretor que controla o processo de construção.
// A classe CarDirector controla o processo de construção, usando o CarBuilder para criar configurações específicas de carros (como um carro esportivo ou um SUV).

export class CarDirector {
    constructor(builder) {
      this.builder = builder;
    }
  
    constructSportsCar() {
      return this.builder
        .setMake('Ferrari')
        .setModel('488 Spider')
        .setYear(2022)
        .setColor('Vermelho')
        .setEngine('V8 Turbo')
        .setTransmission('Automática')
        .build();
    }
  
    constructSUV() {
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