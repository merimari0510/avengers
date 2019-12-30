import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AboutComponent } from './components/about/about.component'
import { AvengersComponent } from './components/avengers/avengers.component';
import { AvengerComponent } from './components/avenger/avenger.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'avengers', component: AvengersComponent },
  { path: 'avenger/:element', component: AvengerComponent },
  { path: 'search/:element', component: SearchComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
