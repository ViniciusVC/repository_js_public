import {Button} from "./interfaceButton"

// Implementação de Windows Button

export class WindowsButton implements Button {
  paint(): void {
    console.log('Renderizando um botão estilo Windows.');
  }
}
