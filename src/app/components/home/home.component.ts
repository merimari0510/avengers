import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from '../../services/movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private _moviesService:MoviesService) { }

  ngOnInit() {
    this.movies = this._moviesService.getMovies();
    console.log(this.movies);
  }

  getMovies() {
    return this.movies;
  }

  getMoviesOrderByName() {
    return this._moviesService.getMoviesOrderByName();
  }

  getMoviesOrderByOrder(phase:number) {
    return this._moviesService.getMoviesOrderByOrder(phase);
  }

  getFormatDateMovie(date:Date) {
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let fullMonth = month[date.getMonth()];
    let fullYear = date.getFullYear();

    return fullMonth + " " + fullYear;
  }

}
