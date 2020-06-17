import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/shared/user.service';

@Component({
  selector: 'app-doughnut-chart-demo',
  templateUrl: './doughnut-chart-demo.component.html',
  styles: [
  ]
})
export class DoughnutChartDemoComponent implements OnInit {

  constructor(public userService: UserService) { }

  public datalabel: Object;

  public piedata: Object[] = [
    {
      "x": "East",
      "y": 300
    },
    {
      "x": "West",
      "y": 50
    },
    {
      "x": "North",
      "y": 450
    },
    {
      "x": "South",
      "y": 225
    },
  ];

  public legendSettings: Object;
  public title: string;
  public titleStyle: Object;
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
      template: '<div><b>${point.x}</b></div><div>$${point.y}k</div>'
    }

    this.tooltip = {
      enable: true,
      header: "<b>Sales Donut</b>",
      format: '${point.x} : $${point.y}k'
    }

    this.enableSmartLabels = true;

    this.title = 'Doughnut';

    this.titleStyle = {
      fontFamily: "Arial",
      fontWeight: 'regular',
      color: "#E27F2D",
      size: '20px',
    }
  }

}
