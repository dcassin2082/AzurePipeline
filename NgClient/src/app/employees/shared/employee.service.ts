import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  employee: Employee;
  employees: Employee[];
  baseUrl: string = environment.production ? "https://jungle-deployment.azurewebsites.net/api/employees" : "https://localhost:44377/api/employees";

  getEmployees() {
    this.http.get(this.baseUrl).toPromise().then(x => {
      this.employees = x as Employee[];
    })
  }
  postEmployee(employee: Employee) {
    return this.http.post(this.baseUrl, employee);
  }
  putEmployee(employee: Employee) {
    return this.http.put(this.baseUrl + '/' + employee.EmployeeId, employee);
  }
  deleteEmployee(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  resetEmployee() {
    // this.employee = null;
    this.employee = {
      EmployeeId: null,
      Empcode: '',
      Position: '',
      Mobile: '',
      FullName: ''
    }
  }

}
