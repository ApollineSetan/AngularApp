import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-digimon-list',
  templateUrl: './digimon-list.component.html',
  styleUrls: ['./digimon-list.component.css'],
  providers: [ApiService]
})
export class DigimonListComponent implements OnInit {

  digimons: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDigimons().subscribe(data => {
      this.digimons = data;
    });
  }
}
