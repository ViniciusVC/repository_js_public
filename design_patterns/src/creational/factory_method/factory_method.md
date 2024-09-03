# PADRÃO FACTORY METHOD

Defina uma interface para criar um unico objeto, 
mas deixe que as subclasses decidam qual classe instanciar.

O Factory Method permite que uma classe adie a instanciacao para subclasses.

Cria uma instancia de varias classes derivadas
e fornece uma interface para criar objetos em uma superclasse,
mas permite que as subclasses alterem o tipo de objetos que serao criados.

Permitindo que uma classe delegue a responsabilidade de criar instancias de objetos para suas subclasses. 

Isso promove a abstracao e o desacoplamento entre o codigo que utiliza as classes e o processo de criacao de objetos.

Esse padrao e util quando a criacao de objetos envolve logica complexa ou quando o codigo precisa ser flexivel para criar diferentes tipos de objetos.

## Rodar codigos de exemplo

* Rodar exemplo de FACTORY METHOD em JavaScript:

> node ./src/creational/factory_method/JavaScript/index.js

* Rodar exemplo FACTORY METHOD em TypeScript:

> npx tsx ./src/creational/factory_method/TypeScript/index.ts
