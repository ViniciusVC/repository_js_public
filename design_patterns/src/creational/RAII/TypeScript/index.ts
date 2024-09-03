import { Resource } from "./Resource";

console.log("exemplo de algo semelhante ao padrão RAII com TypeScript");
  
function useResourceSafely(): void {
    const resource = new Resource();
    try {
      resource.useResource();
      // Outras operações que podem lançar exceções
    } finally {
      resource.close();
    }
}
  
useResourceSafely(); 

/* 
    Tipagem: Adicionei tipos aos métodos e propriedades para garantir a segurança de tipos.
    Modificadores de acesso: Usei private para métodos e propriedades que não devem ser acessíveis fora da classe.
*/