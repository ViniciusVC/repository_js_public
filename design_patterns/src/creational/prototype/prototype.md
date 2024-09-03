# PADRÃO PROTOTYPE

Criar uma instância totalmente inicializada para ser copiada ou clonada.

Copiar objetos existentes sem fazer seu código ficar dependente de suas classes.

Criar novos objetos duplicando um objeto existente (protótipo), 
evitando assim a necessidade de criar uma nova instância a partir do zero. 

Isso é particularmente útil quando a criação de um novo objeto é complexa ou custosa, ou quando objetos semelhantes com pequenas variações precisam ser criados.

O padrão Prototype permite criar novos objetos copiando (ou "clonando") outros objetos existentes, em vez de criá-los do zero.
    
## Rodar codigos de exemplo:

* Rodar exemplo Prototype em JavaScript

> node ./src/creational/prototype/JavaScript/index.js

* Rodar exemplo Prototype em TypeScript

> npx tsx ./src/creational/prototype/TypeScript/index.ts


# Codigo JavaScript

* Classe Prototype:

    Define as propriedades name e age e um método clone que retorna uma nova instância da classe Prototype, copiando os valores das propriedades.
    
* Método clone():

    Cria uma nova instância de Prototype com os mesmos valores de name e age que a instância original.
    
* Método display():

    Apenas para exibir as propriedades do objeto, facilitando a verificação dos valores após a clonagem.
    
### Teste

* O objeto original é criado e exibido.
    
* O objeto clone1 é criado usando o método clone(), e em seguida, seu nome é alterado.

* A mudança no clone1 não afeta o objeto original, demonstrando que o clone é uma instância independente.