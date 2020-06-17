import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {

  constructor(private toastrService: ToastrService, public employeeService: EmployeeService) { 
    this.setClickedRow = function (index, employee) {
      this.selectedRow = index;
      this.populateForm(employee);
    }
  }

  p: number = 1;
  key: string = 'FullName';
  reverse: boolean = false;
  filter: string;
  selectedRow: Number;
  setClickedRow: Function;

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  pageChanged(page: number){
    this.employeeService.resetEmployee();
    this.p = page;
    this.selectedRow = -1; 
  }
  clearSearch() {
    this.filter = null;
  }
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    this.employeeService.getEmployees();
  }
  populateForm(employee: Employee) {
    this.employeeService.employee = Object.assign({}, employee);
  }
  onDelete(id: number) {
    if (confirm("Are you sure?")) {
      this.employeeService.deleteEmployee(id).subscribe(x => {
        this.toastrService.warning("Delete Successful", "Employee");
        this.employeeService.getEmployees();
        this.employeeService.resetEmployee();
      })
    }
  }
}
