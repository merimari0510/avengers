import { Component } from '@angular/core';
import { AvengersService } from '../../services/avengers.service'
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.css']
})
export class AvengerComponent {

  avenger:any = {};
  safeUrl:any;

  constructor(private activatedRoute: ActivatedRoute,
              private _avengersService:AvengersService,
              private _sanitizer: DomSanitizer
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.avenger = this._avengersService.getAvenger(params['element']);
    })
  }

  getVideoIframe() {
    let video = this.avenger.video;
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(video);
    return this.safeUrl;
  }

  getCiteVideoIframe() {
    let video = this.avenger.cite_video;
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(video);
    return this.safeUrl;
  }

}
