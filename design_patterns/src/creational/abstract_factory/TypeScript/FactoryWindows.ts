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
*/

export class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  
  createWindow(): Window {
    return new WindowsWindow();
  }
}

