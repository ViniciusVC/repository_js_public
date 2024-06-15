# Curso de Angular da MOOCS GGTE Unicamp

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)

![Bootstrap](https://img.shields.io/badge/-boostrap-0D1117?style=for-the-badge&logo=bootstrap&labelColor=0D1117)

```
AngularJS v1.3.15 (2010-2014) Descontinuado.
Bootstrap v0.12.1 (2015)
```

Repositorio: https://github.com/ViniciusVC/

Site do curso : https://moocs.ggte.unicamp.br/course/desenvolvimento-web-com-angularjs/

![HTML AngularJS v1](./img/screenshot_index_html.png "screenshot")

# Dados
```
Os dados desta aplicação estão no arquivo controller "primeiro-controller.js".
```

## ng-app
```
Define o componente raiz.
Ex.:<body class="contanier" ng-app="aplicacao">
```

## ng-show
```
Exibe um elemento HTML caso a expressão informada seja VERDADEIRA.
Ex.:<p ng-show="iniciado">Curso em Andamento!</p>

```

## ng-hide
```
Esconde um elemento HTML caso a expressão informada seja VERDADEIRA.
Ex.:<p ng-hide="iniciado">Curso Finalizado!</p>
```

## ng-if
```
Remove um ele elemento DOM caso a expressão informada seja VERDADEIRA.
Ex.:<p ng-if="!iniciado">Aguarde o próximo curso!</p>
```

## ng-repeat
```
Repete um bloco de html usando um array.
Equivale um forit.
Ex.:<tr ng-repeat="aluno in alunos">
```

## ng-click
```
Roda uma função ao clicar no componente.
ex.: <button ng-show="iniciado" ng-click="finalizar()" class="btn btn-danger">
O ng-click pode ser usado em qualquer componente.
```

## ng-class
```
Aplica uma class CSS a um componente.
ex.: <div ng-class="{'panel panel-primary':iniciado, 'panel panel-danger':!iniciado}">
```

## ng-readonly
```
Bloquei o campo para edição, se a condição for verdadeira.

```

## ng-disabled
```
Bloquei o botão se a condição for verdadeira.
ex.:<button ng-click="submeter()" ng-disabled="!iniciado">
```

##Filters/Filtros

```
currency é um filter que transforma o numero em valor monetario.
Ex.: {{valor | currency : 'R$'}}
ou
$filter('currency')(valor, 'R$')
date
```