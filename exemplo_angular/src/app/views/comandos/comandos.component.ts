import { Component, } from '@angular/core';
import { JanelacodigoComponent } from '../../components/janelacodigo/janelacodigo.component';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-comandos',
  standalone: true,
  imports: [
    JanelacodigoComponent
  ],
  templateUrl: './comandos.component.html',
  styleUrl: './comandos.component.css'
})

export class ComandosComponent {
  
  constructor(private globalService: GlobalService) {  }

  lingua(X:string,Y:string){
    if(this.globalService.getLingua() == "en"){
      return Y;
    }else{
      return X;
    };
  }

}
