import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  @Output()emitStudent =new EventEmitter<any>();
  @ViewChild('stdForm') stdForm!:NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  onAddStudent(){
    console.log('student Added Successfully');
    this.emitStudent.emit(this.stdForm.value);
    this.stdForm.reset()
  }

}
