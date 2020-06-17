import { Component, ViewChild, OnInit } from '@angular/core';
import {
  AccumulationChartComponent, AccumulationChart, IAccLoadedEventArgs,
  IAccResizeEventArgs, AccumulationTheme
} from '@syncfusion/ej2-angular-charts';


@Component({
  selector: 'app-funnel-chart',
  templateUrl: './funnel-chart.component.html',

})
export class FunnelChartComponent {
  ngOnInit(): void {
    // this.explode = true;
    // this.explodeIndex = 3;
    // this.explodeOffset = '30px';
    // this.explodeAll = false;
  }
  constructor() { }
  public data: Object[] = [{ 'x': 'Marsden	Richards', y: 35917.85, text: 'Marsden	Richards' },
  { 'x': 'Isaac	Rojas', y: 26910.65, text: 'Isaac	Rojas' },
  { 'x': 'Alec	Stuart', y: 26345.36, text: 'Alec	Stuart' },
  { 'x': 'Nayda	Humphrey', y: 25485.16, text: 'Nayda	Humphrey' },
  { 'x': 'Hunter	Bowman', y: 24671.52, text: 'Hunter	Bowman' },
  { 'x': 'Maxwell	Shepherd', y: 24434.13, text: 'Maxwell	Shepherd' },
  { 'x': 'Willa	Harris', y: 23755.00, text: 'Willa	Harris' },
  { 'x': 'Hunter	Bowman', y: 21887.02, text: 'Hunter	Bowman' },
  { 'x': 'Shelby	Dale', y: 21156.58, text: 'Shelby	Dale' },
  { 'x': 'Maxwell	Shepherd', y: 20731.00, text: 'Maxwell	Shepherd' },
  { 'x': 'Alfonso	Orr', y: 20669.50, text: 'Alfonso	Orr' },
  { 'x': 'Kameko	Gaines', y: 19041.59, text: 'Kameko	Gaines' },
  { 'x': 'Xena	Hull', y: 18740.35, text: 'Xena	Hull' },
  { 'x': 'Rana	Webster', y: 18595.02, text: 'Rana	Webster' },
  { 'x': 'Ann	Sharp', y: 18357.30, text: 'Ann	Sharp' },
  { 'x': 'Ann	Sharp', y: 18125.82, text: 'Ann	Sharp' },
  { 'x': 'Bryar	Ryan', y: 18058.65, text: 'Bryar	Ryan' },
  { 'x': 'Louis	Osborne', y: 17729.72, text: 'Louis	Osborne' },
  { 'x': 'Ocean	Butler', y: 17121.24, text: 'Ocean	Butler' },
  { 'x': 'Zane	Craig', y: 16611.29, text: 'Zane	Craig' },
  ];
  /*
  ordertotal	FirstName	lastname
35917.85	Marsden	Richards
26910.65	Isaac	Rojas
26345.36	Alec	Stuart
25485.16	Nayda	Humphrey
24671.52	Hunter	Bowman
24434.13	Maxwell	Shepherd
23755.00	Willa	Harris
21887.02	Hunter	Bowman
21156.58	Shelby	Dale
20731.00	Maxwell	Shepherd
20669.50	Alfonso	Orr
19041.59	Kameko	Gaines
18740.35	Xena	Hull
18595.02	Rana	Webster
18357.30	Ann	Sharp
18125.82	Ann	Sharp
18058.65	Bryar	Ryan
17729.72	Louis	Osborne
17121.24	Ocean	Butler
16611.29	Zane	Craig
*/
  @ViewChild('funnel')
  public funnel: AccumulationChartComponent | AccumulationChart;
  public explode: boolean;
  public explodeIndex: number;
  public explodeAll: boolean;
  public  explodeOffset: Object;
  public funnelNeckWidth(e: Event): void {
    let value: string = (document.getElementById('funnelNeckWidth') as HTMLSelectElement).value;
    this.funnel.series[0].neckWidth = value + '%';
    document.getElementById('funnelNeckWidth').innerHTML = value + '%';
    this.funnel.removeSvg();
    this.funnel.refreshSeries();
    this.funnel.refreshChart();
  };
  public funnelNeckHeight(e: Event): void {
    let value: string = (document.getElementById('funnelNeckHeight') as HTMLSelectElement).value;
    this.funnel.series[0].neckHeight = value + '%';
    document.getElementById('funnelNeckHeight').innerHTML = value + '%';
    this.funnel.removeSvg();
    this.funnel.refreshSeries();
    this.funnel.refreshChart();
  };
  //Initializing DataLabel
  public dataLabel: Object = {
    name: 'text', visible: true, position: 'Outside', connectorStyle: { length: '6%' }
  };
  // custom code start
  public load(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
  };
  // custom code end
  public onChartResized(args: IAccResizeEventArgs): void {
    let bounds: ClientRect = document.getElementById('container').getBoundingClientRect();
    if (bounds.width < bounds.height) {
      args.accumulation.series[0].width = '80%';
      args.accumulation.series[0].height = '70%';
    } else {
      args.accumulation.series[0].width = '60%';
      args.accumulation.series[0].height = '80%';
    }
  };
  public gapRatio: number = 0.03;
  public neckWidth: string = '15%';
  public neckHeight: string = '18%';
  // public gapRatio: number = 0.03;
  public emptyPointSettings: Object = {
    fill: 'red', mode: 'Drop'
  };
  public explode: boolean = false;
  public enableAnimation: boolean = false;
  public legendSettings: Object = { visible: false, toggleVisibility: false };
  public tooltip: Object = { enable: true, format: '${point.x} : <b>$${point.y}</b>' };
  public title: string = 'Top 20 Order Totals';
  public subTitle: string = "(2017 - 2020)"
  public titleStyle: Object = {
    fontFamily: "Arial",
    fontWeight: 'regular',
    color: "sandybrown",
    size: '24px'
  }
  public enableSmartLabels: boolean;
}
