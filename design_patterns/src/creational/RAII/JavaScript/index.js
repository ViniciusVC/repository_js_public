
/*
    Um exemplo de algo semelhante ao padrão RAII em JavaScript usando classes e o bloco finally para garantir que os recursos sejam liberados corretamente.
    O padrão Resource Acquisition Is Initialization é mais comumente associado a linguagens como C++, onde a alocação e desalocação de recursos são gerenciadas automaticamente pelo ciclo de vida dos objetos.
*/

console.log("exemplo de algo semelhante ao padrão RAII em JavaScript");

class Resource {
    constructor() {
      this.resource = this.acquireResource();
    }
  
    acquireResource() {
      // Simula a aquisição de um recurso, como abrir um arquivo ou uma conexão de rede
      console.log("Recurso adquirido");
      return {};
    }
  
    releaseResource() {
      // Simula a liberação do recurso
      console.log("Recurso liberado");
    }
  
    useResource() {
      if (!this.resource) {
        throw new Error("Recurso não disponível");
      }
      console.log("Usando o recurso");
    }
  
    close() {
      this.releaseResource();
      this.resource = null;
    }
}
  
function useResourceSafely() {
    const resource = new Resource();
    try {
      resource.useResource();
      // Outras operações que podem lançar exceções
    } finally {
      resource.close();
    }
}
  
useResourceSafely();