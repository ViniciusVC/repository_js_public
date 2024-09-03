export class Singleton {
    // A propriedade estática _instance armazenará a única instância da classe Singleton
    static _instance = null;
  
    // O construtor é privado e impede a criação direta de novas instâncias
    constructor() {
      if (Singleton._instance) {
        throw new Error('Você não pode criar outra instância de um Singleton. Use Singleton.getInstance()');
      }
      this.timestamp = new Date(); // Apenas para demonstrar que a instância é única
      Singleton._instance = this;
    }
  
    // Método estático para acessar a única instância
    static getInstance() {
      if (!Singleton._instance) {
        Singleton._instance = new Singleton();
      }
      return Singleton._instance;
    }
  
    // Método de exemplo
    getTimestamp() {
      return this.timestamp;
    }
} 