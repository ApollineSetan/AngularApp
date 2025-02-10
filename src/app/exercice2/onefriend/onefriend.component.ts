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
    return this.userAge >= 18 ? ' (majeure)' : ' (mineur)' ;
  }

}

