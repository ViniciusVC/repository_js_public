import { CarBuilder } from "./carbuilder.ts";
import { CarDirector } from "./cardirector.ts";

console.log("Exemplo de codigo BUILDER em TypeScript");

// Exemplo de uso
const builder = new CarBuilder();
const director = new CarDirector(builder);
  
const sportsCar = director.constructSportsCar();
sportsCar.display();
  
const suv = director.constructSUV();
suv.display();

// O código final cria e exibe dois tipos diferentes de carros, mostrando como o padrão Builder pode ser usado para criar objetos complexos de maneira flexível.