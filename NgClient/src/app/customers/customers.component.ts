import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: []
})
export class CustomersComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  checked: boolean = false;
  switchChartType: string = 'Column';

  ngOnInit() {
  //  this.userService.userIsAuthenticated().subscribe((res: any) => {
  //    if(res == false){
  //      this.userService.loggedIn = false;
  //      this.router.navigateByUrl('/user/login');
  //    }

  //    else{
  //      this.userService.loggedIn = true;
  //    }
  //  })
  }
  setChartType() {
    this.checked = !this.checked;
    if (this.checked) {
      this.switchChartType = 'Line'
    }
    else{
      this.switchChartType = 'Column';
    }
   
  }

}
