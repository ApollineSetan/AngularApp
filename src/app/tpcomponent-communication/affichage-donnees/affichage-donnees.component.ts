import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-affichage-donnees',
  imports: [],
  templateUrl: './affichage-donnees.component.html',
  styleUrl: './affichage-donnees.component.css'
})
export class AffichageDonneesComponent {
  @Input() firstname!: string;
  @Input() age!: number;
}
