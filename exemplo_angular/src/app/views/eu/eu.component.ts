import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-eu',
  standalone: true,
  imports: [],
  templateUrl: './eu.component.html',
  styleUrl: './eu.component.css'
})

export class EuComponent {

  constructor(private globalService: GlobalService) {  }

  lingua(X:string,Y:string){
    if(this.globalService.getLingua() == "en"){
      return Y;
    }else{
      return X;
    };
  }


}
