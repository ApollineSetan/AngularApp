import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-onefriend5',
  imports: [],
  templateUrl: './onefriend5.component.html',
  styleUrls: ['./onefriend5.component.css']
})
export class Onefriend5Component {
  @Input() userName!: string;
  @Input() userEmail!: string;
  @Input() userAge!: number;

  userCity: string = 'Toulouse';
  userImage: string = 'https://randomuser.me/api/portraits/women/12.jpg';

  getUserAge(): string {
    return this.userAge >= 18 ? ' (majeur.e)' : ' (mineur.e)';
  }

}
