import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/shared/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  imageUrl: string;

  ngOnInit() {
    this.imageUrl = "../../assets/img/pexels-photo-4177562.jpeg";
  }

  getMode() {
    if (environment.production) {
      this.imageUrl = 'http://dcassin234-001-site1.ctempurl.com/assets/images/pexels-photo-4177562.jpeg"';
    }
    else {
      this.imageUrl = "../../assets/img/pexels-photo-4177562.jpeg";
    }
  }
  
  login(){
    this.router.navigate(['/user/login']);
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    this.userService.loggedIn = false;
  }
}
