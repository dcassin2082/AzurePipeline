import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { UserService } from '../user/shared/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styles: []
})
export class ColumnChartComponent implements OnInit {

  baseUrl: string = environment.production ? "https://jungle-deployment.azurewebsites.net/api/charts/column" : "https://localhost:44377/api/charts/column" ;
  public legendSettings: Object;
  public tooltip: Object;
  public title: string;
  public titleStyle: Object;
  public marker: Object;
  public primaryXAxis: Object;
  public primaryYAxis: Object;
  public items: Object[];
  public chartData: Object[];
  public dataManager: DataManager = new DataManager({
    url: this.baseUrl
  });
  constructor(private service: UserService) { }

  ngOnInit(): void {
    // if (localStorage.getItem('token') !== null) {
    //   this.service.loggedIn = true;
    // }
    this.items = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },  { month: 'Mar', sales: 34 },
      { month: 'Apr', sales: 32 },{ month: 'May', sales: 40 },{ month: 'Jun', sales: 32 }];

    // this.dataManager.executeQuery(new Query().take(30)).then((e: ReturnOption) => {
    //   this.items = e.result as object[];
    // }).catch((e) => true);
    this.primaryXAxis = {
      rangePadding: 'Additional',
      valueType: 'Category',
      title: 'Month',
      labelRotation : -45
    };
    this.primaryYAxis = {
      title: 'Sales',
      minimum: 0,
      maximum: 60,
      interval: 15,
      labelFormat: '${value}K'
    };
    this.legendSettings = {
      visible: true
    };
    this.title = 'Column Chart';
    this.titleStyle = {
      fontFamily: "Arial",
      fontWeight: 'regular',
      color: "sandybrown",
      size: '24px'
    }
    this.tooltip = {
      enable: true
    }
    this.marker = {
      dataLabel: {
        visible: true
      }
    };
  }
}