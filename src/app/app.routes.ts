import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AvengersComponent } from './components/avengers/avengers.component';
import { AvengerComponent } from './components/avenger/avenger.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'avengers', component: AvengersComponent },
  { path: 'avenger/:element', component: AvengerComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'search/:element', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
