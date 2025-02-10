import { Component } from '@angular/core';
import { Onefriend3Component } from './onefriend3/onefriend3.component';

@Component({
  selector: 'app-exercice4',
  imports: [Onefriend3Component],
  templateUrl: './exercice4.component.html',
  styleUrl: './exercice4.component.css'
})

export class Exercice4Component {
  friendName: string = ''; 
  message: string = 'Aucun ami';

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.friendName = input.value;
  }

  addFriend(): void {
    this.message = 'Ami ajouté : ' + this.friendName;
  }
}