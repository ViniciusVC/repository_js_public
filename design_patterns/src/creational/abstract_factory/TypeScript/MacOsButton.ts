import {Button} from "./interfaceButton";

// Implementação de MacOS Button

export class MacOsButton implements Button {
  paint(): void {
    console.log('Renderizando um botão estilo MacOS.');
  }
}