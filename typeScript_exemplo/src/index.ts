import {Calculadora} from "./Calculadora";

const variavel1: string = "Olá!";
const variavel2: number = 3;

let variavel3: string = "Concatenando:"
variavel3 = variavel3 + variavel1 +  variavel2;
console.log(variavel3);

const cal = new Calculadora(5);
let variavel4 = cal.somar(variavel2);
console.log(variavel4);