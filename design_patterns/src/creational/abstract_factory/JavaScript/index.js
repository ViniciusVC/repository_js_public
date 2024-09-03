console.log("Exemplo de codigo ABSTRACT FACTORY em JS")

// Interfaces
class Button {
    paint() {
      throw new Error('This method should be overridden!');
    }
}
  
class Window {
    render() {
      throw new Error('This method should be overridden!');
    }
}
  
// Implementacoes de Windows
class WindowsButton extends Button {
    paint() {
      console.log('Renderizando um botao estilo Windows.');
    }
}
  
class WindowsWindow extends Window {
    render() {
      console.log('Renderizando uma janela estilo Windows.');
    }
}
  
// Implementacoes de MacOS
class MacOSButton extends Button {
    paint() {
      console.log('Renderizando um botao estilo MacOS.');
    }
}
  
class MacOSWindow extends Window {
    render() {
      console.log('Renderizando uma janela estilo MacOS.');
    }
}
  
// Abstract Factory
class GUIFactory {
    createButton() {
      throw new Error('This method should be overridden!');
    }
  
    createWindow() {
      throw new Error('This method should be overridden!');
    }
}
  
// Concrete Factories
class WindowsFactory extends GUIFactory {
    createButton() {
      return new WindowsButton();
    }
  
    createWindow() {
      return new WindowsWindow();
    }
}
  
class MacOSFactory extends GUIFactory {
    createButton() {
      return new MacOSButton();
    }
  
    createWindow() {
      return new MacOSWindow();
    }
}
  
// Cliente
function clientCode(factory) {
    const button = factory.createButton();
    const window = factory.createWindow();
  
    button.paint();
    window.render();
}
  
// Testando com diferentes fabricas
clientCode(new WindowsFactory());
  // Output:
  // Renderizando um botao estilo Windows.
  // Renderizando uma janela estilo Windows.
  
clientCode(new MacOSFactory());
  // Output:
  // Renderizando um botao estilo MacOS.
  // Renderizando uma janela estilo MacOS.
  
/*
Uma aplicacao que cria diferentes tipos de botoes e janelas para dois sistemas operacionais diferentes: Windows e MacOS.

* Interfaces Button e Window: 
Definem as operacoes que os produtos concretos precisam implementar.

* Implementacoes Concretas: 
As classes WindowsButton, WindowsWindow, MacOSButton, e MacOSWindow implementam essas interfaces.

* Interface GUIFactory: 
Define os metodos que cada fabrica concreta precisa implementar (createButton e createWindow).

* Concrete Factories: 
WindowsFactory e MacOSFactory implementam a interface GUIFactory e sao responsaveis pela criacao dos produtos concretos.

* Funcao Cliente (clientCode): 
Funciona da mesma forma que em JavaScript, usando a fabrica abstrata para criar os produtos, sem depender de implementacoes concretas.
*/