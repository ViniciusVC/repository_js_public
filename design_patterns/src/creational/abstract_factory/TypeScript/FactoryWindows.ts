import {Button} from "./interfaceButton";
import {Window} from "./interfaceWindow";
import {GUIFactory} from "./interfaceGUIFactory";
import {WindowsButton} from "./WindowsButton";
import {WindowsWindow} from "./WindowsWindow";

/*
 Concrete Factories
 -----------------
 Concretas: 
 As classes WindowsButton, WindowsWindow, MacOSButton, e MacOSWindow implementam essa interface.
 Concrete Factories: 
 WindowsFactory e MacOSFactory implementam a interface GUIFactory e são responsáveis pela criação dos produtos concretos.

 * Concrete Factories (WindowsFactory, MacOSFactory): 
 Essas classes concretas implementam a fabrica abstrata (GUIFactory) e criam os objetos especificos.
*/

export class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  
  createWindow(): Window {
    return new WindowsWindow();
  }
}

