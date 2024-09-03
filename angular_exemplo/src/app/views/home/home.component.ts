import { Component } from '@angular/core';
import { BtnprimaryComponent } from '../../components/btnprimary/btnprimary.component';
import {BtncompComponent} from '../../components/btncomp/btncomp.component';

import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BtnprimaryComponent, 
    BtncompComponent,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'


})

export class HomeComponent {

  handleEvent(){
    console.log("EVENTO!")
    alert("Tudo ok.")
  }

  //constructor(private globalService: GlobalService) { 
  //  this.globalService.setLingua("en")
  //}

  lingua(X:string,Y:string){
    //if(this.globalService.getLingua() == "en"){
    if(GlobalService.getLingua() == "en"){
      return Y;
    }else{
      return X;
    };
  }

}

