// Classe Prototype
// O padrão Prototype permite criar novos objetos copiando (ou "clonando") outros objetos existentes, em vez de criá-los do zero.

export class Prototype {
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Método clone que faz uma cópia do objeto atual
    clone() {
      return new Prototype(this.name, this.age);
    }
  
    // Método para exibir os detalhes do objeto
    display() {
      console.log(`Nome: ${this.name}, Idade: ${this.age}`);
    }
}

/*
    
    Classe Prototype:
    Define as propriedades name e age e um método clone que retorna uma nova instância da classe Prototype, copiando os valores das propriedades.
    
    Método clone():
    Cria uma nova instância de Prototype com os mesmos valores de name e age que a instância original.
    
    Método display():
    Apenas para exibir as propriedades do objeto, facilitando a verificação dos valores após a clonagem.

*/