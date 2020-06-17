import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/shared/user.service';

@Component({
  selector: 'app-trackball-chart',
  templateUrl: './trackball-chart.component.html'
})
export class TrackballChartComponent implements OnInit {

  constructor(private service: UserService) { }

  baseUrl: string = environment.production ? "https://jungle-deployment.azurewebsites.net/api/charts/trackball" : "https://localhost:44377/api/charts/trackball";
  public primaryXAxis: Object;
  public primaryYAxis: Object;
  public chartData: Object[];
  public crosshair: Object;
  public title: string;
  public titleStyle: Object;
  public tooltip: Object;
  public marker: Object;
  public items: object[];
  public dataManager: DataManager = new DataManager({
    url: this.baseUrl
  });
  ngOnInit(): void {
    // if (localStorage.getItem('token') !== null) {
    //   this.service.loggedIn = true;
    // }

    // this.dataManager.executeQuery(new Query()).then((e: ReturnOption) => {
    //   this.chartData = e.result as object[];
    // }).catch((e) => true);

    this.chartData = [
      { "X":"2019-12-31T00:00:00", "Y": 113, "Y1": 84, "Y2": 61, "Y3": 61, "Y4": 85, "Y5": 77, "Y6": 94 },
      { "X":"2020-01-31T00:00:00", "Y": 54, "Y1": 56, "Y2": 60, "Y3": 64, "Y4": 56, "Y5": 87, "Y6": 41 },
      { "X":"2020-02-29T00:00:00", "Y": 67, "Y1": 44, "Y2": 106, "Y3": 110, "Y4": 88, "Y5": 66, "Y6": 63 },
      { "X":"2020-03-31T00:00:00", "Y": 55, "Y1": 101, "Y2": 60, "Y3": 44, "Y4": 98, "Y5": 118, "Y6": 119 },
      { "X":"2020-04-30T00:00:00", "Y": 84, "Y1": 45, "Y2": 112, "Y3": 95, "Y4": 36, "Y5": 56, "Y6": 72 },
      { "X":"2020-05-31T00:00:00", "Y": 67, "Y1": 64, "Y2": 52, "Y3": 48, "Y4": 110, "Y5": 88, "Y6": 88 },
      { "X":"2020-06-30T00:00:00", "Y": 67, "Y1": 101, "Y2": 98, "Y3": 99, "Y4": 54, "Y5": 44, "Y6": 55 }
    ]
    this.primaryXAxis = {
      title: 'Sales Rep',
      minimum: new Date(2019, 12, 15), maximum: new Date(2020, 6, 30),
      intervalType: 'Months',
      valueType: 'DateTime',
    };

    this.primaryYAxis = {
      labelFormat: '${value}K',
      title: 'Sales'
    }

    this.tooltip = { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' };
    this.crosshair = { enable: true, lineType: 'Vertical' };
    this.marker = { visible: true };

    this.title = 'Trackball Chart';
    this.titleStyle = {
      fontFamily: "Arial",
      fontWeight: 'regular',
      color: "sandybrown",
      size: '24px'
    }
  }
  // ngOnInit(): void {
  //   // if (localStorage.getItem('token') !== null) {
  //   //   this.service.loggedIn = true;
  //   // }

  //   this.dataManager.executeQuery(new Query()).then((e: ReturnOption) => {
  //     this.chartData = e.result as object[];
  //   }).catch((e) => true);

  //   this.primaryXAxis = {
  //     title: 'Years',
  //     minimum: new Date(2013, 1, 1), maximum: new Date(2020, 2, 11),
  //     intervalType: 'Years',
  //     valueType: 'DateTime',
  //   };

  //   this.primaryYAxis = {
  //     labelFormat: '${value}K',
  //     title: 'Sales'
  //   }

  //   this.tooltip = { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' };
  //   this.crosshair = { enable: true, lineType: 'Vertical' };
  //   this.marker = { visible: true };

  //   this.title = 'Annual Sales';
  //   this.titleStyle = {
  //     fontFamily: "Arial",
  //     fontWeight: 'regular',
  //     color: "#E27F2D",
  //     size: '20px'
  //   }
  // }
  reloadChart() {
    this.ngOnInit();
  }
}