
console.log("Exemplo(1) do Padrão Multiton em JavaScript");

// A classe Multiton recebe o name no construtor.
// Este name serve como a chave para identificar cada instância única.
class Multiton {

    constructor(name) {
      console.log("verifica se já existe uma instância associada à chave fornecida ("+name+").")
      if (Multiton.instances[name]) {
        return Multiton.instances[name];
      }
      this.name = name;
      Multiton.instances[name] = this;
    }
  
    getName() {
      return this.name;
    }
    
}
  
// Objeto estático para armazenar as instâncias
Multiton.instances = {};
  
// Utilização do Multiton
const instanceA = new Multiton('A');
const instanceB = new Multiton('B');
const anotherInstanceA = new Multiton('A');
  
console.log(instanceA === anotherInstanceA); // true
console.log(instanceA === instanceB); // false
  
console.log(instanceA.getName()); // 'A'
console.log(instanceB.getName()); // 'B'

/*

### Classe Multiton:

* A classe Multiton recebe um parâmetro name no construtor. Este name serve como a chave para identificar cada instância única.

### Verificação de Instância Existente:

* Dentro do construtor, verificamos se já existe uma instância associada à chave fornecida (name).

* Se já existir, retornamos essa instância existente, garantindo que não seja criada uma nova instância para a mesma chave.

### Armazenamento de Instâncias:

* Utilizei uma propriedade estática Multiton.instances que é um objeto usado para armazenar todas as instâncias criadas, indexadas pela chave name.
* Se a instância para uma chave específica ainda não existir, crizei uma nova e a armazenamos nesse objeto.

### Método getName():

Este é um método simples que retorna o nome da instância, demonstrando que cada instância mantém seu próprio estado.

### Utilização:

* Duas instâncias com chaves diferentes ('A' e 'B') e outra instância com a chave 'A'.
* Ao comparar instanceA e anotherInstanceA, o resultado é true, indicando que ambas referenciam a mesma instância.
* Ao comparar instanceA e instanceB, o resultado é false, mostrando que são instâncias diferentes.

### Vantagens do Uso do Multiton:

* Gerenciamento Controlado de Instâncias: 

Garante que apenas uma instância por chave específica exista, facilitando o gerenciamento e evitando a criação desnecessária de múltiplas instâncias equivalentes.

* Economia de Recursos: 

Evita o consumo excessivo de memória e recursos, reutilizando instâncias existentes quando apropriado.

* Organização e Manutenibilidade: 

Melhora a estrutura e organização do código, tornando-o mais fácil de manter e entender.

*/