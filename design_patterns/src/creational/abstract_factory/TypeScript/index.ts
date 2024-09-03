import {WindowsFactory} from "./FactoryWindows";
import {MacOSFactory} from "./FactoryMacOS";
import {GUIFactory} from "./interfaceGUIFactory"

console.log("Exemplo de codigo ABSTRACT FACTORY em TypeScript");

// Cliente (clientCode): Usa a fabrica abstrata para criar os produtos, sem depender de implementacoes concretas.
function clientCode(factory: GUIFactory) {
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

* Classes base (Button, Window, GUIFactory): 
Essas classes definem a interface dos produtos (botoes, janelas) e da fabrica abstrata.

* Classes concretas (WindowsButton, WindowsWindow, MacOSButton, MacOSWindow): 
Essas sao as implementacoes especificas para cada sistema operacional.

* Concrete Factories (WindowsFactory, MacOSFactory): 
Essas classes concretas implementam a fabrica abstrata (GUIFactory) e criam os objetos especificos.

* Funcao Cliente (clientCode): 
Esta funcao utiliza a fabrica abstrata para criar os objetos sem se preocupar com as classes concretas, permitindo flexibilidade para trocar as implementacoes facilmente.
*/