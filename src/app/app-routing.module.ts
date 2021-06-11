import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthenticationComponent } from './components/authentication/authentication.component'
import { HomeComponent } from './components/home/home/home.component'
import { ChildrenComponent } from './components/children/children.component'
import { SponsersComponent } from './components/sponsers/sponsers.component'
import { AdoptersComponent } from './components/adopters/adopters.component'
import { AddAdopterComponent } from './components/add-adopter/add-adopter.component'
import { AddChildComponent } from './components/add-child/add-child.component'
import { AddSponserComponent } from './components/add-sponser/add-sponser.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { ChildDetailsComponent } from './components/child-details/child-details.component'


const routes: Routes = [
  { path: 'auth', component: AuthenticationComponent },
  { path: '', component: HomeComponent },
  { path: 'children', component: ChildrenComponent },
  { path: 'child/:id', component: ChildDetailsComponent },
  { path: 'register-child', component: AddChildComponent },
  { path: 'adopters', component: AdoptersComponent },
  { path: 'register-adopter', component: AddAdopterComponent },
  { path: 'sponsers', component: SponsersComponent },
  { path: 'register-sponser', component: AddSponserComponent },
  { path: '**', component: NotFoundComponent },

  // { path: 'auth', redirectTo:"", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
