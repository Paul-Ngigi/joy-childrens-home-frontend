import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ChildrenComponent } from './components/children/children.component';
import { SponsersComponent } from './components/sponsers/sponsers.component';
import { AdoptersComponent } from './components/adopters/adopters.component';
import { AddChildComponent } from './components/add-child/add-child.component';
import { AddSponserComponent } from './components/add-sponser/add-sponser.component';
import { AddAdopterComponent } from './components/add-adopter/add-adopter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home/home.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ChildrenComponent,
    SponsersComponent,
    AdoptersComponent,
    AddChildComponent,
    AddSponserComponent,
    AddAdopterComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
