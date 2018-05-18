import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: {
    name: String,
    type: String,
    description: String,
    skill1: String,
    skill2: String,
    skill3: String
  }[] = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit()
  {
    this.showPets()
  }

  showPets()
  {
    var observable = this._httpService.showPets();
    observable.subscribe((data: any) => {
      this.pets = data;
    });
  }

}
