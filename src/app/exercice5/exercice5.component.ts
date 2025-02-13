import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-exercice5',
  imports: [FormsModule, NgIf],
  templateUrl: './exercice5.component.html',
  styleUrl: './exercice5.component.css'
})
export class Exercice5Component {
  userName: string = '';

  resetUserName(): void {
    this.userName = '';
  }
}