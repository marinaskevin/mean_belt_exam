import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  id: String;
  pet: {
    name: String,
    type: String,
    description: String,
    skill1: String,
    skill2: String,
    skill3: String
  }[] = [];
  errors: any;
  private sub: any;

  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router) { }
  
  ngOnInit()
  {
    this.sub = this._route.params.subscribe(params => {
      this.id = params['id'];
      this.showPet()
    });
  }

  showPet()
  {
    var observable = this._httpService.showPet(this.id);
    observable.subscribe((data: any) => {
      this.pet = data;
    });
  }

  describePet()
  {
    var observable = this._httpService.describePet(this.id,this.pet);
    observable.subscribe((data: any) => {
      console.log(data);
      if(data.error)
      {
        this.errors = data.error;
      }
      else
      {
        this._router.navigate(['/pets/'+this.id]);
      }
    });
  }

}