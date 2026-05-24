import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

@Input() getStds !: Array<Istd>
 @Output() emitStdObj: EventEmitter<Istd> = new EventEmitter<Istd>()
@Output() emitRemoveId : EventEmitter<string>= new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }

   trackByFun(index: number, std: Istd){
    return std.stdId
  }
   onRemove(id: string){
    console.log(id);
    this.emitRemoveId.emit(id)
  }
}
