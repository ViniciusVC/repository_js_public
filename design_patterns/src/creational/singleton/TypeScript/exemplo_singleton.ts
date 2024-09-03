export class Singleton {
    // A propriedade estática _instance armazenará a única instância da classe Singleton
    private static _instance: Singleton | null = null;
  
    // Propriedade pública apenas para demonstração
    public timestamp: Date;
  
    // O construtor é privado e impede a criação direta de novas instâncias
    private constructor() {
      this.timestamp = new Date(); // Apenas para demonstrar que a instância é única
    }
  
    // Método estático para acessar a única instância
    public static getInstance(): Singleton {
      if (!Singleton._instance) {
        Singleton._instance = new Singleton();
      }
      return Singleton._instance;
    }
  
    // Método de exemplo
    public getTimestamp(): Date {
      return this.timestamp;
    }
}

/* 
    Tipagem Singleton | null:
    A propriedade estática _instance pode ser uma instância de Singleton ou null inicialmente.
    
    Construtor privado:
    O construtor é marcado como private, impedindo a criação de instâncias fora da classe.
    Em TypeScript, o construtor privado impede que a classe seja instanciada fora dela mesma, reforçando o comportamento de Singleton.

    Método getInstance():
    Garante que uma única instância seja criada e retorna essa instância.
    
    Propriedade pública timestamp:
    Apenas para demonstrar que todas as referências ao singleton compartilham o mesmo estado.
*/

