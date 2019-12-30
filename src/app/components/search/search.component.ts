import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvengersService} from '../../services/avengers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults:any[] = [];
  elementSearch:String;

  constructor( private activatedRoute:ActivatedRoute,
  private _avengersService:AvengersService,
  private router:Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.searchResults = this._avengersService.searchAvenger(params['element']);
      this.elementSearch = params['element'];
    })
  }

  mostrarAvenger( element:string ) {
    console.log(element);
    this.router.navigate( ['/avenger', element] );
  }
}
