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
  userHobbies: string[] = ['musique', 'photographie', 'développement'];
  userImage: string = 'https://randomuser.me/api/portraits/women/12.jpg';

  getUserAge(): string {
    return this.userAge >= 18 ? ' (majeure)' : ' (mineure)';
  }

  getUserHobbies(): string {
    return this.userHobbies.includes('développement')
      ? `${this.userName} est quelqu'un de cool !`
      : `${this.userName} est ringarde !`;
  }
}
