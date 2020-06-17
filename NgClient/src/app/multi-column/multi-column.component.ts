import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-multi-column',
  templateUrl: './multi-column.component.html',
  styles: [
  ]
})
export class MultiColumnComponent implements OnInit {

  constructor() { }

  public primaryXAxis: Object;
  public chartData: Object[];
  public title: string;
  public primaryYAxis: Object;
  public marker: Object;
  public legendSettings: Object;
  public tooltip: Object;
  public titleStyle: Object;

  baseUrl: string = environment.production ? "https://jungle-deployment.azurewebsites.net/api/charts/trackball" : "https://localhost:44377/api/charts/trackball";
  ngOnInit(): void {
    // this.chartData = [
    //   { year: "2017", Sales: 763, Cost: 305, Profit: 458 },
    //   { year: "2018", Sales: 693, Cost: 277, Profit: 416 },
    //   { year: "2019", Sales: 625, Cost: 250, Profit: 375 },
    //   { year: "2020", Sales: 289, Cost: 116, Profit: 173 },
    
    // ];
    this.chartData = [
      { month: "Jan", Buffy: 54, Medge: 56, Callie: 60, Ira: 64, Ray: 56, Joelle: 87, Teagan: 41 },
      { month: "Feb", Buffy: 67, Medge: 44, Callie: 106, Ira: 110, Ray: 88, Joelle: 66, Teagan: 63 },
      { month: "Mar", Buffy: 55, Medge: 101, Callie: 60, Ira: 44, Ray: 98, Joelle: 118, Teagan: 119 },
      { month: "Apr", Buffy: 84, Medge: 45, Callie: 112, Ira: 95, Ray: 36, Joelle: 56, Teagan: 72 },
      { month: "May", Buffy: 67, Medge: 64, Callie: 52, Ira: 48, Ray: 110, Joelle: 88, Teagan: 88 },
      { month: "Jun", Buffy: 67, Medge: 101, Callie: 98, Ira: 99, Ray: 54, Joelle: 44, Teagan: 55 }      
    ]

    //this.chartData = [
      // { "X":"2019-12-31T00:00:00", "Y": 113, "Y1": 84, "Y2": 61, "Y3": 61, "Y4": 85, "Y5": 77, "Y6": 94 },
      // { "X":"2020-01-31T00:00:00", "Y": 54, "Y1": 56, "Y2": 60, "Y3": 64, "Y4": 56, "Y5": 87, "Y6": 41 },
      // { "X":"2020-02-29T00:00:00", "Y": 67, "Y1": 44, "Y2": 106, "Y3": 110, "Y4": 88, "Y5": 66, "Y6": 63 },
      // { "X":"2020-03-31T00:00:00", "Y": 55, "Y1": 101, "Y2": 60, "Y3": 44, "Y4": 98, "Y5": 118, "Y6": 119 },
      // { "X":"2020-04-30T00:00:00", "Y": 84, "Y1": 45, "Y2": 112, "Y3": 95, "Y4": 36, "Y5": 56, "Y6": 72 },
      // { "X":"2020-05-31T00:00:00", "Y": 67, "Y1": 64, "Y2": 52, "Y3": 48, "Y4": 110, "Y5": 88, "Y6": 88 },
      // { "X":"2020-06-30T00:00:00", "Y": 67, "Y1": 101, "Y2": 98, "Y3": 99, "Y4": 54, "Y5": 44, "Y6": 55 }
    // ]
    this.tooltip = {
      enable: true
    }
    this.primaryXAxis = {
      valueType: 'Category',
      title: 'Month',
    };
    this.primaryYAxis = {
      minimum: 0, maximum: 150,
      interval: 25, title: 'Sales',
      labelFormat: '${value}K'
    };
    this.marker = {
      dataLabel: {
        visible: false
      }
    };
    this.legendSettings = {
      visible: true
    };
    this.title = 'Multi Column Series Chart';

    this.titleStyle = {
      fontFamily: "Arial",
      fontWeight: 'regular',
      color: "sandybrown",
      size: '24px'
    } 
  }

}
