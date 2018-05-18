import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  id: String;
  pet: {
    name: String,
    type: String,
    description: String,
    skill1: String,
    skill2: String,
    skill3: String
  }[] = [];
  like: boolean;
  private sub: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit()
  {
    this.like = false;
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

  adoptPet()
  {
    var observable = this._httpService.adoptPet(this.id);
    observable.subscribe((data: any) => {
      this._router.navigate(['/']);
    });
  }

  likePet()
  {
    var observable = this._httpService.likePet(this.id);
    observable.subscribe((data: any) => {
      this.like = true;
      this.showPet()
    });
  }

}