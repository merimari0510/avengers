import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTES
import { APP_ROUTING } from './app.routes';

//SERVICES
import { AvengersService } from './services/avengers.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AvengersComponent } from './components/avengers/avengers.component';
import { AboutComponent } from './components/about/about.component';
import { AvengerComponent } from './components/avenger/avenger.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    AvengersComponent,
    AboutComponent,
    AvengerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AvengersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
