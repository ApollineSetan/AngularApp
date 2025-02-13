import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice6',
  imports: [FormsModule],
  templateUrl: './exercice6.component.html',
  styleUrl: './exercice6.component.css'
})
export class Exercice6Component {
  friendName: string = ''; 
  message: string = 'Aucun ami';
  friendAddedMessage: string = '';

  addFriend(): void {
    if (this.friendName) {
      this.message = this.friendName;
      this.friendAddedMessage = `Ami ajouté : ${this.friendName}`;
    }
  }
}