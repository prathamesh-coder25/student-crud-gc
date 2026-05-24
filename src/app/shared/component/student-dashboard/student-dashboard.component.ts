import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/student';
import { SnackBarService } from '../../services/snackbar.services';

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

  getEditStd !: Istd
  

  
  constructor(
    private _SnackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
  }


    getNewStd(newStd: Istd) {
 getRemoveId(id: string) {
    let getIndex = this.stdArr.findIndex(s => s.stdId === id)
    this.stdArr.splice(getIndex, 1)
  }

   getNewStd(newStd: Istd) {
    this.stdArr.push(newStd)
    this._SnackBarService.openSnackBar(`The New Student ${newStd.fname} added Successfully !!!`)
  }

     getEditObj(editOBj: Istd) {
    this.getEditStd = editOBj
  }

  getUpdateStd(UpdateObj: Istd) {
    let getIndex = this.stdArr.findIndex(s => s.stdId === UpdateObj.stdId)
    this.stdArr[getIndex] = UpdateObj
    }

}
