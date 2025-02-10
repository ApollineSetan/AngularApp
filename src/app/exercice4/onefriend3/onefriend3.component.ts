import { Component } from '@angular/core';

@Component({
  selector: 'app-onefriend3',
  imports: [],
  templateUrl: './onefriend3.component.html',
  styleUrl: './onefriend3.component.css'
})
export class Onefriend3Component {
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