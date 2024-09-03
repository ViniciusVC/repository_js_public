// Produto: Carro
export class Car {
    make: string;
    model: string;
    year: number;
    color: string;
    engine: string;
    transmission: string;
  
    constructor() {
      this.make = '';
      this.model = '';
      this.year = 0;
      this.color = '';
      this.engine = '';
      this.transmission = '';
    }
  
    // Exibir os detalhes do carro
    display(): void {
      console.log(`Carro: ${this.year} ${this.make} ${this.model}`);
      console.log(`Cor: ${this.color}`);
      console.log(`Motor: ${this.engine}`);
      console.log(`Transmissão: ${this.transmission}`);
    }
}

/*
    Produto: Carro
    A classe Car define o objeto complexo que está sendo construído, com várias propriedades (marca, modelo, ano, cor, motor, transmissão).
    Classe Car: A classe Car tem propriedades fortemente tipadas como string e number, garantindo que essas propriedades sejam sempre do tipo esperado.
*/