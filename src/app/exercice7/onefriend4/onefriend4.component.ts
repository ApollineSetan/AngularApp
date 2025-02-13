import { Component } from '@angular/core';
import { NgStyle,NgClass } from '@angular/common';

@Component({
  selector: 'app-onefriend4',
  imports: [NgStyle,NgClass],
  templateUrl: './onefriend4.component.html',
  styleUrl: './onefriend4.component.css'
})

export class Onefriend4Component {
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

  oneFriendStyle: string = 'OFF';

  constructor() {
    this.oneFriendStyle = Math.random() < 0.5 ? 'OFF' : 'ON';
  }

  getColor(): string {
    return this.oneFriendStyle === 'OFF' ? 'lightcoral' : 'lightgreen';
  }

}