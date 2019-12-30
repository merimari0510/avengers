import { Component } from '@angular/core';
import { AvengersService } from '../../services/avengers.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.css']
})
export class AvengerComponent {

  avenger:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _avengersService:AvengersService
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.avenger = this._avengersService.getAvenger(params['element']);
    })
  }

}
