import { Component } from '@angular/core';

@Component({
  selector: 'app-onefriend2',
  imports: [],
  templateUrl: './onefriend2.component.html',
  styleUrl: './onefriend2.component.css'
})
export class Onefriend2Component {
  userName : string = 'Apolline Setan';
  userEmail : string = 'setan.apolline@gmail.com'
  userAge : number = 27;
  userCity : string = 'Toulouse';
  userHobbies : string[] = ['musique', 'photographie', 'développement'];
  userImage : string = 'https://randomuser.me/api/portraits/women/12.jpg'

  getUserAge() : string {
    return this.userAge >= 18
     ? ' (majeure)' 
     : ' (mineure)' ;
  }

  getUserHobbies() : string {
    return this.userHobbies.includes('développement')
    ? `${this.userName} est quelqu'un de cool !`
    : `${this.userName} est ringarde !`;
  }

}