import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercice9',
  imports: [CommonModule],
  templateUrl: './exercice9.component.html',
  styleUrl: './exercice9.component.css'
})
export class Exercice9Component {
  showDetails: boolean = false;
  clickLog: number[] = [];

  onToggleDetails() {
    this.showDetails = !this.showDetails;
    this.clickLog.push(this.clickLog.length + 1);
  }
}
