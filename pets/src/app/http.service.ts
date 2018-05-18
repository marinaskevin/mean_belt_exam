import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  showPets()
  {
    return this._http.get('/data/pets');
  }

  showPet(id)
  {
    return this._http.get('/data/pets/'+id);
  }

  shelterPet(pet)
  {
    return this._http.post('/data/pets',pet);
  }

  describePet(id,pet)
  {
    return this._http.put('/data/pets/'+id+'/edit',pet);
  }

  adoptPet(id)
  {
    return this._http.delete('/data/pets/'+id+'/remove');
  }

  likePet(id)
  {
    return this._http.put('/data/like/'+id,{});
  }

}
