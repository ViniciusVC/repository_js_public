export class Calculadora {
    num : number

    constructor(num: number){
        this.num = num;
        console.log("this.num="+this.num);
    }

    somar(novoNum: number){
        this.num = this.num + novoNum;
        return this.num 
    } 

}