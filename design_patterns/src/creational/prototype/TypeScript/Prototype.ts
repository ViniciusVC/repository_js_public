export class Prototype {
    // Propriedades com tipos definidos
    public name: string;
    public age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Método clone que faz uma cópia do objeto atual
    public clone(): Prototype {
      return new Prototype(this.name, this.age);
    }
  
    // Método para exibir os detalhes do objeto
    public display(): void {
      console.log(`Nome: ${this.name}, Idade: ${this.age}`);
    }
}

/*
* Classe Prototype:
    Define as propriedades name e age e um método clone que retorna uma nova instância da classe Prototype, copiando os valores das propriedades.
    
* Método clone():
    Cria uma nova instância de Prototype com os mesmos valores de name e age que a instância original.
    
* Método display():
    Apenas para exibir as propriedades do objeto, facilitando a verificação dos valores após a clonagem.
*/