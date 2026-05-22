import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
    stdArr: Array<Istd> = [
    {
      fname: 'steve',
      lname: 'witkoff',
      email: 'steve@gmail.com',
      contact: 1234567890,
      stdId: '121',
      isActive: true
    },
    {
      fname: 'afric',
      lname: 'dwan',
      email: 'afric@gmail.com',
      contact: 1234567890,
      stdId: '122',
      isActive: false
    },
    {
      fname: 'swan',
      lname: 'warn',
      email: 'swan@gmail.com',
      contact: 1234567890,
      stdId: '123',
      isActive: true
    },
    {
      fname: 'frik',
      lname: 'saam',
      email: 'frik@gmail.com',
      contact: 1234567890,
      stdId: '124',
      isActive: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
