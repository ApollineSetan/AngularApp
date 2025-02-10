import { Component } from '@angular/core';
import { Onefriend2Component } from './onefriend2/onefriend2.component';

@Component({
  selector: 'app-exercice3',
  imports: [Onefriend2Component],
  templateUrl: './exercice3.component.html',
  styleUrl: './exercice3.component.css'
})
export class Exercice3Component {
  buttonDisabled: boolean = false;

  constructor() {
    setTimeout(() => {
    this.buttonDisabled = true
    }, 3000);
  }

}
