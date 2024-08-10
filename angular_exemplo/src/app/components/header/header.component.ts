import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import {LogoAngularComponent} from '../../components/logoangular/logoangular.component';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuComponent,
    LogoAngularComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(private globalService: GlobalService) { 

  }

  funTrocaLingua(){   
    console.log("Troca lingua. regiao="+this.globalService.getLingua());
    if(this.globalService.getLingua() == "en"){
      this.globalService.setLingua("pt");
    }else{
      this.globalService.setLingua("en");
    };
   }
   
  lingua(X:string,Y:string){
    if(this.globalService.getLingua() == "en"){
      return Y;
    }else{
      return X;
    };
  }
}