import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  template: `
    <p>
      employee-details works!
    </p>
    
    <u1 *ngFor:"let employee of employees">
    <li>{{employee.name}}</li>
  ,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees=[
    {"id":1,"name":"pachu","age":26},
    {"id":2,"name":"hema","age":20}
  ]
  ngOnInit(): void {
    
  }
}
