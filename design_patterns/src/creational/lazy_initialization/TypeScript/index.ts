// Exemplo de Lazy Initialization 

console.log("Exemplo de Lazy Initialization com TypeScript.");

class ExpensiveResource {
    private data: string;
  
    constructor() {
      console.log("ExpensiveResource: Inicializando um recurso pesado...");
      // Simulação de uma operação custosa
      this.data = "Dados iniciais";
    }
  
    getData(): string {
      return this.data;
    }
  
    setData(data: string): void {
      this.data = data;
    }
  }
  
  class ResourceManager {
    private resource: ExpensiveResource | null = null; // Recurso não inicializado
  
    getResource(): ExpensiveResource {
      if (!this.resource) {
        console.log("ResourceManager: Inicializando o recurso pela primeira vez.");
        this.resource = new ExpensiveResource(); // Inicializa o recurso quando necessário
      }
      return this.resource;
    }
  }
  
  // Exemplo de uso do Lazy Initialization
  const manager = new ResourceManager();
  
  console.log("Acessando o recurso pela primeira vez:");
  const resource1 = manager.getResource();
  console.log(resource1.getData()); // Output: Dados iniciais
  
  console.log("Acessando o recurso novamente:");
  const resource2 = manager.getResource();
  console.log(resource2.getData()); // Output: Dados iniciais
  
  // Modificando o recurso
  resource2.setData("Novos dados");
  
  console.log("Acessando o recurso após a modificação:");
  const resource3 = manager.getResource();
  console.log(resource3.getData()); // Output: Novos dados

  