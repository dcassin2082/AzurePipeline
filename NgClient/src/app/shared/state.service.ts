import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from './state.Model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.production ? "https://jungle-deployment.azurewebsites.net/api/states" : "https://localhost:44377/api/states";
  state: State;
  states: State[];

  getStates(){
    this.http.get(this.baseUrl).toPromise().then(x => {
      this.states = x as State[]; 
    })
  }
}
