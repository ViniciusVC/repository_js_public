import {Button} from "./interfaceButton";
import {Window} from "./interfaceWindow";
import {GUIFactory} from "./interfaceGUIFactory";
import {MacOsButton} from "./MacOsButton";
import {MacOsWindow} from "./MacOsWindow";

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

export class MacOSFactory implements GUIFactory {
  createButton(): Button {
    return new MacOsButton();
  }
  
  createWindow(): Window {
    return new MacOsWindow();
  }
}
