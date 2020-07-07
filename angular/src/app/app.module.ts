import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { NewuserComponent } from './components/newuser/newuser.component';
import { StudentComponent } from './components/student/student.component';
import { NewTeacherComponent } from './components/new-teacher/new-teacher.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { CalanderComponent } from './components/calander/calander.component';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { TeacherComponent } from './components/teacher/teacher.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    NewuserComponent,
    StudentComponent,
    NewTeacherComponent,
    NewStudentComponent,
    CalanderComponent,
    SearchComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  
  // providers: [],
  // bootstrap: [AppComponent]
  // declarations: [AppComponent],
  // exports: [AppComponent],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
