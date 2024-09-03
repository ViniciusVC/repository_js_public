// Exemplo de Lazy Initialization 

console.log("Exemplo de Lazy Initialization com JavaScript.");

class ExpensiveResource {
    constructor() {
      console.log("ExpensiveResource: Inicializando um recurso pesado...");
      // Simulação de uma operação custosa
      this.data = "Dados iniciais";
    }
  
    getData() {
      return this.data;
    }
  
    setData(data) {
      this.data = data;
    }
}
  
class ResourceManager {
    constructor() {
      this.resource = null; // Recurso não inicializado
}
  
getResource() {
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
  
/*
Classe ExpensiveResource:
Esta classe simula um recurso pesado ou custoso que queremos inicializar apenas quando realmente necessário. O método getData() retorna os dados, e setData() permite modificá-los.

Classe ResourceManager:
Esta classe gerencia o acesso ao recurso. A propriedade resource começa como null, indicando que o recurso ainda não foi inicializado. O método getResource() verifica se o recurso já foi inicializado; se não, ele o inicializa.

Uso do Lazy Initialization:
A primeira vez que getResource() é chamado, o recurso é criado e inicializado.
As chamadas subsequentes a getResource() retornam o recurso já inicializado, sem recriá-lo.
A modificação do recurso (com setData) afeta todas as referências ao recurso, pois ele foi inicializado apenas uma vez.

Este padrão é útil quando a inicialização de um recurso é custosa e você quer garantir que ele só seja criado quando for realmente necessário.
*/