import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

type btnVariants = "primary" | "secondary";

@Component({
  selector: 'app-btnprimary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btnprimary.component.html',
  styleUrl: './btnprimary.component.css'
})

export class BtnprimaryComponent {
 @Input("btn-text") btnText: string = "";
 @Input() disabled: boolean = false;
 @Input() loading: boolean = false;
 @Input() variant: btnVariants = "primary";
 @Output("submit") onSubmit = new EventEmitter();

 submit(){
  console.log("A unica função deste botão é mostrar este alert.");
  alert("A unica função deste botão é mostrar este alert.");
  //this.onSubmit.emit();
 }

 // A unica função deste botão é mostrar este alert.
}
