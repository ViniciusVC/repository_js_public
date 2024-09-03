// global.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Isso torna o serviço singleton e disponível em toda a aplicação.
})

export class GlobalService {
  // Variável global
  private linguaGlobal: string;

  constructor() { 
    this.linguaGlobal = "br";
  }

  // Método para definir o valor
  setLingua(valor: string) {
    console.log("SET - Muda valor global")
    this.linguaGlobal = valor;
  }
  
  // Método para obter o valor
  getLingua(): string {
    console.log("GET - lendo valor global")
    return this.linguaGlobal;
  }
}
