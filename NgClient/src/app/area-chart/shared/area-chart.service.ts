import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaChartService {

  constructor() { }

  public dataSource: any[];

  setDataSource(dataSource: any[]){
    this.dataSource = dataSource;
  }

}
