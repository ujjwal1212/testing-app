import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  salSlip: string;
  constructor(private authService: AuthenticationService) {
    this.authService.authenticate();
    this.salSlip = '';
  }

  getSalarySlip() {
    this.salSlip = this.authService.checkAuthentication() ?  'Salary Slip' : 'Not Authenticated';
  }

  ngOnInit() {
  }

}
