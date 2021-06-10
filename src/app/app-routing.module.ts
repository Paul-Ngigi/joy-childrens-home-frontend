import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChildrenComponent } from './components/children/children.component'
import { SponsersComponent } from './components/sponsers/sponsers.component'
import { AdoptersComponent } from './components/adopters/adopters.component'
import { NotFoundComponent } from './components/not-found/not-found.component'


const routes: Routes = [
  {path: 'children', component: ChildrenComponent},
  {path: 'adopters', component: AdoptersComponent},
  {path: 'sponsers', component: SponsersComponent},
  { path: '**', component: NotFoundComponent },

  // { path: '', redirectTo:"", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
