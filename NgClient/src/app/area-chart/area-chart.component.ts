import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { AreaChartService } from './shared/area-chart.service';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styles: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class AreaChartComponent implements OnInit {

  constructor(public areaChartService: AreaChartService) { }
  public legendSettings: Object;
  public primaryXAxis: Object;
  public chartData: Object[] = [];
  public title: string;
  public primaryYAxis: Object;
  public titleStyle: Object;
  public tooltip: Object;
  public marker: Object;
  public items: Object[] = [];

  ngOnInit(): void {
     this.items = [
      { month: 'Jan', sales: 115 }, { month: 'Feb', sales: 84 },  { month: 'Mar', sales: 79 },
      { month: 'Apr', sales: 108 },{ month: 'May', sales: 54 },{ month: 'Jun', sales: 129 }];

    this.primaryXAxis = {
      title: 'Month',
      valueType: 'Category',
      edgeLabelPlacement: 'Shift'
    };

    this.primaryYAxis = {
      minimum: 0, maximum: 150, interval: 25,
      title: 'Sales Amount',
      labelFormat: '${value}K'
    };

    this.title = 'Area Chart';
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
        visible: true,
      },
    };
  }
}
