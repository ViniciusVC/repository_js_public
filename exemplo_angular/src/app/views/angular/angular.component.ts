import { Component } from '@angular/core';
import { JanelacodigoComponent } from '../../components/janelacodigo/janelacodigo.component';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [
    JanelacodigoComponent
  ],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})

export class AngularComponent {

  constructor(private globalService: GlobalService) {  }

  lingua(X:string,Y:string){
    if(this.globalService.getLingua() == "en"){
      return Y;
    }else{
      return X;
    };
  }

}
