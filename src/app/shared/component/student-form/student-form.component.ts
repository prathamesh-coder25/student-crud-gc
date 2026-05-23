import { Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import { Istd } from '../../models/student';
import { UuidService } from '../../services/student.services';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {
  
  @Output() emitNewStd: EventEmitter<Istd> = new EventEmitter<Istd>()
  
  
  @ViewChild('fname') fname !: ElementRef
  @ViewChild('lname') lname !: ElementRef
  @ViewChild('email') email !: ElementRef
  @ViewChild('contact') contact !: ElementRef
  @ViewChild('isActive') isActive !: ElementRef

 

  constructor(
    private _UuidService: UuidService
  ) { }
  ngOnChanges(): void {
    
  }
  ngOnInit(): void {
  }



  onStdAdd() {
    let fnameVal = this.fname.nativeElement.value;
    let lnameVal = this.lname.nativeElement.value;
    let emailVal = this.email.nativeElement.value;
    let contactVal = this.contact.nativeElement.value;
    let isActiveVal = this.isActive.nativeElement.value === 'true' ? true : false;

    if(fnameVal.length > 0 && lnameVal.length> 0 && emailVal.length> 0 && contactVal.length> 0){
      let newStd: Istd = {
        fname: this.fname.nativeElement.value,
        lname: this.lname.nativeElement.value,
        email: this.email.nativeElement.value,
        contact: this.contact.nativeElement.value,
        isActive: this.isActive.nativeElement.value === 'true' ? true : false,
        stdId: this._UuidService.uuid()
      }
    console.log(newStd);
    this.emitNewStd.emit(newStd)
    this.fname.nativeElement.value = ''
    this.lname.nativeElement.value = ''
    this.email.nativeElement.value = ''
    this.contact.nativeElement.value = ''
    this.isActive.nativeElement.value = true
    }
  }

  




}