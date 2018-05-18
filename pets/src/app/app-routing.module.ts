import { PetsComponent } from './pets/pets.component';
import { PetComponent } from './pet/pet.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PetsComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pets/new', component: NewPetComponent },
  { path: 'pets/:id', component: PetComponent, pathMatch: 'full' },
  { path: 'pets/:id/edit', component: EditPetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
