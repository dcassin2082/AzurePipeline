import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  year: number;
  imageUrl: string;

  ngOnInit() {
    this.getMode();
    var dt = new Date();
    this.year =  dt.getFullYear();
  }

  getMode() {
    if (environment.production) {
      this.imageUrl = 'http://dcassin234-001-site1.ctempurl.com/assets/images/pexels-photo-4177562.jpeg"';
    }
    else {
      this.imageUrl = "../../assets/img/pexels-photo-4177562.jpeg";
    }
  }
}
