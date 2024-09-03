# PADRÃO DEPENDENCY INJECTION 

(Injeção de Dependência)

Uma classe recebe os objetos que requer de um injetor em vez de criar os objetos diretamente.

## Benefícios da Injeção de Dependência

* Desacoplamento:

A classe Car não depende mais diretamente da classe Engine. Isso facilita a substituição de Engine por outra implementação, se necessário.

* Testabilidade:

Facilita a criação de testes unitários, pois você pode injetar dependências mockadas ou simuladas.

* Flexibilidade:

Permite a configuração de dependências em tempo de execução.

## Rodar codigos de exemplo

* Rodar exemplo de DEPENDENCY INJECTION  em JavaScript:

> node ./src/creational/dependency_injection/JavaScript/index.js

* Rodar exemplo DEPENDENCY INJECTION  em TypeScript:

> npx tsx ./src/creational/dependency_injection/TypeScript/index.ts
