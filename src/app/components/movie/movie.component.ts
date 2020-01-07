import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service'
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movie:any = {};
  safeUrl:any;

  constructor(private activatedRoute: ActivatedRoute,
              private _moviesService:MoviesService,
              private _sanitizer: DomSanitizer) {
    this.activatedRoute.params.subscribe( params => {
      this.movie = this._moviesService.getMovie(params['id']);
    })
  }

  getTrailer() {
    console.log(this.movie.trailer);
    let video = this.movie.trailer;
    this.safeUrl = '';
    console.log(this.safeUrl);
    if (video != '')
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(video);
    console.log(this.safeUrl);
    return this.safeUrl;
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

    return date.getDay() + " " + fullMonth + " " + fullYear;
  }


}
