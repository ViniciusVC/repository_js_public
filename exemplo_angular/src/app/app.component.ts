import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalService } from './global.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string = 'Exemplo SPA Angular';

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
