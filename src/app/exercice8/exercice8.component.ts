import { Component } from '@angular/core';
import { Onefriend5Component } from './onefriend5/onefriend5.component';

@Component({
  selector: 'app-exercice8',
  imports: [Onefriend5Component],
  templateUrl: './exercice8.component.html',
  styleUrl: './exercice8.component.css'
})
export class Exercice8Component {
  buttonDisabled: boolean = false;

  constructor() {
    setTimeout(() => {
    this.buttonDisabled = true
    }, 3000);
  }

  listFriendsTab: { name: string; age: number; email: string }[] = [
    { name: 'Apolline', age: 27, email: 'apolline@example.com' },
    { name: 'Jonathan', age: 35, email: 'john@example.com' },
    { name: 'Loan', age: 26, email: 'loan@example.com' }
  ];

}
