import { Component } from '@angular/core';
import { BtnprimaryComponent } from '../../components/btnprimary/btnprimary.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnprimaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
