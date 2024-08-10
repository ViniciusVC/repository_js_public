
import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-janelacodigo',
  standalone: true,
  imports: [],
  templateUrl: './janelacodigo.component.html',
  styleUrl: './janelacodigo.component.css'
})
export class JanelacodigoComponent {
  @Input("win-text") winText: string = "";
  @Input("win-title") winTitle: string = "";
}
