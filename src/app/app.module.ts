import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentTableComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
      FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
