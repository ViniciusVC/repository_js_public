// Exemplo Multiton em TypeScript.


export class Multiton {
  private static instances: Map<string, Multiton> = new Map();
  public name: string;

  private constructor(name: string) {
    this.name = name;
  }

  public static getInstance(key: string): Multiton {
    if (!Multiton.instances.has(key)) {
      Multiton.instances.set(key, new Multiton(key));
    }

    return Multiton.instances.get(key)!;
  }
}


/*
  O método getInstance() garante que para cada chave (key),
  exista apenas uma instância correspondente, 
  reutilizando-a se necessário.

  Tipagem:
  instances: Mapa de instâncias, onde a chave é uma string e o valor é uma instância de Multiton.
  name: Propriedade pública que armazena o nome da instância.

  Contructor privado: O construtor é privado, garantindo que instâncias só possam ser criadas através do método getInstance.

  Método getInstance: Verifica se já existe uma instância associada à chave; se não existir, cria uma nova e a armazena no mapa.

  Esse código funciona da mesma forma que o exemplo em JavaScript, mas com os benefícios da tipagem e do controle mais rigoroso do TypeScript.
*/