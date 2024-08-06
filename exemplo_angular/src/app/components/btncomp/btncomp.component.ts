import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-btncomp',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btncomp.component.html',
  styleUrl: './btncomp.component.css'
})

export class BtncompComponent {
 @Input() btnText: string = "";

 @Output() newItemEvent = new EventEmitter<string>();

 //hendleClick(event: Event) : void{
 hendleClick() : void{
  console.log(" dentro do Btn hendleClick()");
  this.newItemEvent.emit();
 }

}

