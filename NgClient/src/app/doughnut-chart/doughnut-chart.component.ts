import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/shared/user.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styles: []
})
export class DoughnutChartComponent implements OnInit {

  constructor(public userService: UserService) { }

  public datalabel: Object;

  public piedata: Object[] = [
    {
      "x": "2017",
      "y": 4256
    },
    {
      "x": "2018",
      "y": 4661
    },
    {
      "x": "2019",
      "y": 5106
    },
    {
      "x": "2020",
      "y": 3092
    },
  ];

  public legendSettings: Object;
  public title: string;
  public subTitle: string;
  public titleStyle: Object;
  public subTitleStyle: Object;
  public tooltip: Object;
  public enableSmartLabels: boolean;

    ngOnInit() {
    // if (localStorage.getItem('token') != null) {
    //   this.userService.loggedIn = true;
    // }
    this.legendSettings = {
      visible: true,
      position:'Bottom',
      alignment: 'Center'
    };
    this.datalabel = {
      visible: true,
      name: "text",
      position: 'Outside',
      template: '<div><b>${point.x}</b></div><div>$${point.y/1000}</div>'
    }

    this.tooltip = {
      enable: true,
      header: "<b>Annual Sales</b>",
      format: '${point.x} : $${point.y}k'
    }

    this.enableSmartLabels = true;

    this.title = 'Annual';

    this.titleStyle = {
      fontFamily: "Arial",
      fontWeight: 'regular',
      color: "sandybrown",
      size: '20px',
    }
    this.subTitle = '(millions)';
    this.subTitleStyle = {
      fontFamily: "Arial",
      fontWeight: 'regular',
      color: 'rgb(142,137,137)',
      size: '12px'
    }
  }
  // ngOnInit() {
  //   // if (localStorage.getItem('token') != null) {
  //   //   this.userService.loggedIn = true;
  //   // }
  //   this.legendSettings = {
  //     visible: true,
  //     position:'Bottom',
  //     alignment: 'Center'
  //   };
  //   this.datalabel = {
  //     visible: true,
  //     name: "text",
  //     position: 'Outside',
  //     template: '<div><b>${point.x}</b></div><div>$${point.y}k</div>'
  //   }

  //   this.tooltip = {
  //     enable: true,
  //     header: "<b>Sales Donut</b>",
  //     format: '${point.x} : $${point.y}k'
  //   }

  //   this.enableSmartLabels = true;

  //   this.title = 'Sales by Region';

  //   this.titleStyle = {
  //     fontFamily: "Arial",
  //     fontWeight: 'regular',
  //     color: "#E27F2D",
  //     size: '20px',
  //   }
  // }
}
