import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { FormulaireEditionComponent } from './formulaire-edition/formulaire-edition.component';
import { AffichageDonneesComponent } from './affichage-donnees/affichage-donnees.component';

@Component({
  selector: 'app-tpcomponent-communication',
  imports: [FormulaireEditionComponent, AffichageDonneesComponent, CommonModule, FormsModule],
  templateUrl: './tpcomponent-communication.component.html',
  styleUrl: './tpcomponent-communication.component.css'
})

export class TPComponentCommunicationComponent {

  firstname: string = 'Amélie';
  age: number = 27;

  updateUser(firstname: string, age: number): void {
    this.firstname = firstname;
    this.age = age;
  }

}
