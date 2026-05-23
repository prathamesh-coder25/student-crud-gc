import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  @Input() getStds !: Array<Istd>
  @Output() emitStdObj : EventEmitter<Istd> = new EventEmitter<Istd>()


  constructor() { }

  ngOnInit(): void {
  }

   trackByFun(index: number, std: Istd){
    return std.stdId
  }
  

  onStdEdit(editStd: Istd){
    console.log(editStd);
    this.emitStdObj.emit(editStd)
    
  }
}
