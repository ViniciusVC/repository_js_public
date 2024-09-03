import {Window} from "./interfaceWindow"

// Implementação de MacOS Window

export class MacOsWindow implements Window {
  render(): void {
    console.log('Renderizando uma janela estilo MacOS.');
  }
}