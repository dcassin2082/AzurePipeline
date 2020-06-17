import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { UserService } from '../user/shared/user.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-line-series-chart',
    templateUrl: './line-series-chart.component.html',
    styles: []
})
export class LineSeriesChartComponent implements OnInit {

    constructor(private service: UserService) { }

    baseUrl: string = environment.production ? "https://jungle-deployment.azurewebsites.net/api/charts/lineseries" : "https://localhost:44377/api/charts/lineseries";
    public primaryXAxis: Object;
    public chartData: Object[];
    public primaryYAxis: Object;
    public legendSettings: Object;
    public tooltip: Object;
    public title: string;
    public titleStyle: Object;
    public marker: Object;
    public dataManager: DataManager = new DataManager({
        url: this.baseUrl
    });
    ngOnInit(): void {
        // if (localStorage.getItem('token') !== null) {
        //     this.service.loggedIn = true;
        // }
        this.tooltip = {
            enable: true
        }
        this.dataManager.executeQuery(new Query()).then((e: ReturnOption) => {
            this.chartData = e.result as object[];
        }).catch((e) => true);
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Months',
            labelFormat: 'c0',
            labelRotation : -45
        };
        this.primaryYAxis = {
            labelFormat: '${value}k',
            title: 'Sales'
        };
        this.marker = {
            dataLabel: {
                visible: false
            }
        };
        this.legendSettings = {
            visible: true
        };

        this.title = 'Line Series Chart';
        this.titleStyle = {
            fontFamily: "Arial",
            fontWeight: 'regular',
            color: "sandybrown",
            size: '24px'
          }
    }
}