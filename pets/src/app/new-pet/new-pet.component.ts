import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  name: String;
  type: String;
  description: String;
  skill1: String;
  skill2: String;
  skill3: String;
  errors: any;
  
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
  }

  shelterPet()
  {
    var pet = {
      name: this.name,
      type: this.type,
      description: this.description,
      skill1: this.skill1,
      skill2: this.skill2,
      skill3: this.skill3
    }
    var observable = this._httpService.shelterPet(pet);
    observable.subscribe((data: any) => {
      console.log(data);
      if(data.error)
      {
        this.errors = data.error;
      }
      else
      {
        this._router.navigate(['/']);
      }
    });
  }

}