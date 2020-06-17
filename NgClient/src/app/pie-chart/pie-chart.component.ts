import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/shared/user.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styles: []
})
export class PieChartComponent implements OnInit {

  constructor(public userService: UserService) { }

  public datalabel: Object;
  public enableSmartLabels: boolean;
  public startAngle: number;
  public endAngle: number;
  public piedata: Object[] = [
    {
      "x": "Buffy",
      "y": 394
    },
    {
      "x": "Medge",
      "y": 411
    },
    {
      "x": "Callie",
      "y": 488
    },
    {
      "x": "Ira",
      "y": 460
    },
    {
      "x": "Ray",
      "y": 442
    },
    {
      "x": "Joelle",
      "y": 459
    },
    {
      "x": "Teagan",
      "y": 438
    },
  ];

  public legendSettings: Object;
  public title: string;
  public titleStyle: Object;
  public subTitle: string;
  public subTitleStyle: Object;
  public tooltip: Object;

  ngOnInit(): void {
    // if (localStorage.getItem('token') != null) {
      // this.userService.loggedIn = true;
      this.startAngle = 0;
      this.endAngle = 360;
      this.legendSettings = {
        visible: true,
        position: 'Bottom',
        alignment: 'Center'
      }

      this.datalabel = {
        visible: true,
        name: "text",
        position: 'Outside',
        template: '<div><b>${point.x}</b></div><div>$${point.y}k</div>'
      }

      this.tooltip = {
        enable: true,
        header: "<b>Sales Pie</b>",
        format: '${point.x} : $${point.y}k'
      }

      this.enableSmartLabels = true;

      this.title = 'Year to Date ';

      this.titleStyle = {
        fontFamily: "Arial",
        fontWeight: 'regular',
        color: "sandybrown",
        size: '20px'
      }
      this.subTitleStyle = {
        fontFamily: "Arial",
        fontWeight: 'regular',
        color: 'rgb(142,137,137)',
        size: '12px'
      }
      this.subTitle = '(thousands)'
    // }
  }
}
