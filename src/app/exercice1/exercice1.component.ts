import { Component } from '@angular/core';
import { Exo1detailsComponent } from './exo1details/exo1details.component';
import { Exo1details2Component } from './exo1details2/exo1details2.component';

@Component({
  selector: 'app-exercice1',
  imports: [Exo1detailsComponent, Exo1details2Component],
  templateUrl: './exercice1.component.html',
  styleUrl: './exercice1.component.css'
})
export class Exercice1Component {

}
