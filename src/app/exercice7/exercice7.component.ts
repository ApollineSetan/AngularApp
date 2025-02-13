import { Component } from '@angular/core';
import { Onefriend4Component } from './onefriend4/onefriend4.component';

@Component({
  selector: 'app-exercice7',
  imports: [Onefriend4Component],
  templateUrl: './exercice7.component.html',
  styleUrl: './exercice7.component.css'
})
export class Exercice7Component {
  buttonDisabled: boolean = false;

  constructor() {
    setTimeout(() => {
    this.buttonDisabled = true
    }, 3000);
  }

}
