import {Button} from "./interfaceButton"
import {Window} from "./interfaceWindow"

/*
 Abstract Factory 
 ----------------
 Interface GUIFactory: 
 Define os métodos que cada fábrica concreta precisa implementar
 (createButton e createWindow).      
*/


export interface GUIFactory {
    createButton(): Button;
    createWindow(): Window;
}
