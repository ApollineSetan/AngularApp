import { Component } from '@angular/core';

@Component({
  selector: 'app-onefriend',
  imports: [],
  templateUrl: './onefriend.component.html',
  styleUrl: './onefriend.component.css'
})
export class OnefriendComponent {
  userName : string = 'Apolline Setan';
  userEmail : string = 'setan.apolline@gmail.com'
  userAge : number = 27;
  userCity : string = 'Toulouse';
  userHobbies : string[] = ['musique', 'photographie', 'développement'];

  getUserAge() : string {
    return this.userAge >= 18 ? ' (majeure)' : ' (mineure)' ;
  }

  getUserHobbies() : string {
    return this.userHobbies.includes('développement')
    ? `${this.userName} est quelqu'un de cool ! `
    : `${this.userName} est ringarde !`;
  }

}

