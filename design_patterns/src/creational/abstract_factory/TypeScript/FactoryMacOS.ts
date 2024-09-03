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
*/

export class MacOSFactory implements GUIFactory {
  createButton(): Button {
    return new MacOsButton();
  }
  
  createWindow(): Window {
    return new MacOsWindow();
  }
}
