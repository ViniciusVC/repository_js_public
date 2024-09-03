# Design Patterns
Estudo de padrões de projeto.

GitHub : https://github.com/ViniciusVC/repositorio_generico/design_patterns

```
design_patterns
/src
│
├── 📂 /creational
│    ├── 📂 /factory_method
│    ├── 📂 /abstract_factory
│    ├── 📂 /builder
│    ├── 📂 /prototype
│    ├── 📂 /singleton
│    ├── 📂 /dependency_injection 
│    ├── 📂 /lazy_initialization
│    ├── 📂 /multiton
│    ├── 📂 /object_pool
│    ├── 📂 /RAII 
│       (Resource acquisition is initialization)	
│
├── 📂 /structural
│    ├── 📂 /Adapter
│    ├── 📂 /Bridge
│    ├── 📂 /Composite
│    ├── 📂 /Decorator
│    ├── 📂 /Delegation
│    ├── 📂 /Extension object
│    ├── 📂 /Facade
│    ├── 📂 /Flyweight
│    ├── 📂 /Proxy
│    ├── 📂 /Front controller
│    ├── 📂 /Marker
│    ├── 📂 /Module
│    ├── 📂 /Twin
│
├── 📂 /behavioral
│    ├── 📂 /Chain of Responsibility
│    ├── 📂 /Command
│    ├── 📂 /Interpreter
│    ├── 📂 /Iterator
│    ├── 📂 /Mediator
│    ├── 📂 /Memento
│    ├── 📂 /Observer
│    ├── 📂 /State
│    ├── 📂 /Strategy
│    ├── 📂 /Template Method
│    ├── 📂 /Visitor
│    ├── 📂 /Chain of responsibility
│    ├── 📂 /Command
│    ├── 📂 /Interpreter
│    ├── 📂 /Iterator
│    ├── 📂 /Mediator
│    ├── 📂 /Memento 
│    ├── 📂 /Observer 
│    ├── 📂 /State
│    ├── 📂 /Strategy
│    ├── 📂 /Template method
│
├── 📂 /functional
│
├── 📂 /concurrency
│
├── 📂 /architectural
│
├── 📂 /cloud_distributed

```

# Iniciar projeto

Criar o Package.json

> npm init -y

> npm install

## Instalar o Typescript com TSX:

Instalar o TSX

> npm i -D tsx

## Rodar exemplos 

* Rodar exemplos TypeScript:

> npx ts-node ./src/creational/singleton/TypeScript/index.ts

* Rodar exemplos javaScript:

> node ./src/creational/singleton/JavaScript/index.js

## Para usar import 

Os codigos JS estãoem formato ESM ou ES6 Modules (import e export).

Para carregar um módulo, defina "type": "module" no package.json.

> "type": "module" no package.json

Isso gerou conflito com as configurações do Typr Script.
