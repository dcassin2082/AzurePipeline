import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/shared/user.service';
import $ from 'jquery';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public service: UserService) { }

  div1: string;
  div2:string;
  div3:string;
  divtools: string;
  flipCardBack: string;

  ngOnInit() { 
    this.getMode();
  }

  getMode() {
    if (environment.production) {
      this.div1 = 'http://dcassin234-001-site1.ctempurl.com/assets/images/pexels-photo-4177562.jpeg"';
      this.div2 = 'http://dcassin234-001-site1.ctempurl.com/assets/images/pexels-photo-1578248.jpeg"';
      this.div3 = 'http://dcassin234-001-site1.ctempurl.com/assets/images/pexels-photo-924824.jpeg"';
      this.divtools = 'http://dcassin234-001-site1.ctempurl.com/assets/images/pexels-photo-3062948.jpeg"';
      this.flipCardBack = 'http://dcassin234-001-site1.ctempurl.com/assets/images/pexels-photo-2680270.jpeg"';
    }
    else {
      this.div1 = "../../assets/img/pexels-photo-4177562.jpeg";
      this.div2 = "../../assets/img/pexels-photo-1578248.jpeg";
      this.div3 = "../../assets/img/pexels-photo-924824.jpeg";
      this.divtools = "../../assets/img/pexels-photo-3062948.jpeg";
      this.flipCardBack = "../../assets/img/pexels-photo-2680270.jpeg";
    }
  }
  
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}