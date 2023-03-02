import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
    public employees=[
      {"id":1,"name":"pachu","age":26},
      {"id":2,"name":"hema","age":20}
    ]
}
