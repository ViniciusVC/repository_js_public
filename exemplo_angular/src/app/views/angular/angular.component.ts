import { Component } from '@angular/core';
import { JanelacodigoComponent } from '../../components/janelacodigo/janelacodigo.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [JanelacodigoComponent],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})

export class AngularComponent {
  regiao: string = "pt";
  lingua(X:string,Y:string){
    if(this.regiao=="en"){
      return Y;
    }else{
      return X;
    };
  }  
}
