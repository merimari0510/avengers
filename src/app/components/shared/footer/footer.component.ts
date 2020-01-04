import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor( private router:Router ) {}

  searchAvenger( element:string ) {
    console.log(element);
    this.router.navigate( ['/search', element] );
  }

  faGithub = faGithub;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

}
