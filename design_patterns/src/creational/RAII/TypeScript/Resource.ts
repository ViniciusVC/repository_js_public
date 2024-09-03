
export class Resource {
    private resource: any;
  
    constructor() {
      this.resource = this.acquireResource();
    }
  
    private acquireResource(): any {
      // Simula a aquisição de um recurso, como abrir um arquivo ou uma conexão de rede
      console.log("Recurso adquirido");
      return {};
    }
  
    private releaseResource(): void {
      // Simula a liberação do recurso
      console.log("Recurso liberado");
    }
  
    public useResource(): void {
      if (!this.resource) {
        throw new Error("Recurso não disponível");
      }
      console.log("Usando o recurso");
    }
  
    public close(): void {
      this.releaseResource();
      this.resource = null;
    }
}