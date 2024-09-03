# Padrão Multiton

Garanta que uma classe tenha apenas instâncias nomeadas e forneça um ponto global de acesso a elas.

Generaliza o padrão singleton.

Enquanto o singleton permite que apenas uma instância de uma classe seja criada, 
o padrão multiton permite a criação controlada de várias instâncias, que ele gerencia por meio do uso de um mapa.

O padrão Multiton é uma variação do padrão Singleton que permite a criação de múltiplas instâncias de uma classe, mas garante que apenas uma instância por chave específica seja criada e reutilizada posteriormente.

# O que é o Padrão Multiton?

O padrão Multiton controla a criação de instâncias de uma classe, garantindo que apenas uma instância exista para cada chave específica. Isso é útil quando você precisa gerenciar um conjunto de instâncias únicas identificadas por alguma chave ou contexto.

# Rodar exemplos:

* Rodar exemplo Multiton 1 JavaScript

> node ./src/creational/multiton/JavaScript/index01.js

* Rodar exemplo Multiton 2 JavaScript

> node ./src/creational/multiton/JavaScript/index02.js

* Rodar exemplo Multiton TypeScript

> npx tsx ./src/creational/multiton/TypeScript/index.ts

# Nota: 

O padrão Multiton deve ser usado com cautela, assim como o Singleton, pois pode introduzir dependências globais em seu código, tornando-o mais difícil de testar e manter em larga escala. É importante avaliar se esse padrão realmente atende às necessidades específicas do seu projeto antes de implementá-lo.
