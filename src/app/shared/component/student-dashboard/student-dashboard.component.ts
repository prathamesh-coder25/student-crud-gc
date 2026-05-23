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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddStudent(stdObj: Istd) {
    stdObj.stdId = Math.random().toString();
    this.stdArr.push(stdObj);
  }

}