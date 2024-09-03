
// Produto: Carro
// A classe Car define o objeto complexo que está sendo construído, com várias propriedades (marca, modelo, ano, cor, motor, transmissão).

export class Car {
    constructor() {
      this.make = '';
      this.model = '';
      this.year = 0;
      this.color = '';
      this.engine = '';
      this.transmission = '';
    }
  
    // Exibir os detalhes do carro
    display() {
      console.log(`Carro: ${this.year} ${this.make} ${this.model}`);
      console.log(`Cor: ${this.color}`);
      console.log(`Motor: ${this.engine}`);
      console.log(`Transmissão: ${this.transmission}`);
    }
  }