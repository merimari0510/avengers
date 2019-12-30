import { Component, OnInit } from '@angular/core';
import { AvengersService, Avenger } from '../../services/avengers.service'

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {

  avengers:Avenger[] = [];

  constructor(private _avengersService:AvengersService) {

  }

  ngOnInit() {
    this.avengers = this._avengersService.getAvengers();
    console.log(this.avengers);
  }
}
