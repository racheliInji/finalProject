import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION} from '@angular/material/checkbox';
import { DeterminingLessonsComponent } from './components/determining-lessons/determining-lessons.component';
import { MatCardModule } from '@angular/material/card';
import { FileComponent } from './components/file/file.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import {MatInputModule} from '@angular/material/input';
import { UpdateTeacherComponent } from './components/update-teacher/update-teacher.component';
import { AddLessonComponent } from './components/add-lesson/add-lesson.component';


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
    TeacherComponent,
    DeterminingLessonsComponent,
    FileComponent,
    UpdateStudentComponent,
    UpdateTeacherComponent,
    AddLessonComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModalModule,
    MatInputModule,
    MatCheckboxModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  
   providers: [{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}],
  // bootstrap: [AppComponent]
  // declarations: [AppComponent],
  // exports: [AppComponent],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
