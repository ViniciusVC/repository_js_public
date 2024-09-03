import { CarBuilder } from "./carbuilder.js";
import { CarDirector } from "./cardirector.js";

console.log("Exemplo de codigo BUILDER em JavaScript");

// Exemplo de uso do Padrão Builder
const builder = new CarBuilder();
const director = new CarDirector(builder);

const sportsCar = director.constructSportsCar();
sportsCar.display();

const suv = director.constructSUV();
suv.display();

// usa o CarDirector para construir diferentes tipos de carros sem precisar se preocupar com os detalhes internos do processo de construção.
// O código cria e exibe dois carros diferentes (um esportivo e um SUV), demonstrando como o padrão Builder pode ser usado para construir objetos complexos de forma controlada e flexível.