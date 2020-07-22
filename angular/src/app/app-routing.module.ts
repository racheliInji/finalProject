import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewuserComponent } from './components/newuser/newuser.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './services/AuthGuard';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { NewTeacherComponent } from './components/new-teacher/new-teacher.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { CalanderComponent } from './components/calander/calander.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { DeterminingLessonsComponent } from './components/determining-lessons/determining-lessons.component';
import { FileComponent } from './components/file/file.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { UpdateTeacherComponent } from './components/update-teacher/update-teacher.component';
import { SearchComponent } from './components/search/search.component';
import { AddLessonComponent } from './components/add-lesson/add-lesson.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'newuser',component:NewuserComponent},
  {path:'student',component:StudentComponent, canActivate:[AuthGuard] },
  {path:'teacher',component:TeacherComponent, canActivate:[AuthGuard] },
  {path:'user',component:UserComponent},
  {path:'newteacher',component:NewTeacherComponent},
  {path:'newStudent',component:NewStudentComponent},
  {path:'calander',component:CalanderComponent},
  {path:'determineLessons',component:DeterminingLessonsComponent},
  {path:'file',component:FileComponent},
  {path:'updateStudent',component:UpdateStudentComponent},
  {path:'updateTeacher',component:UpdateTeacherComponent},
  {path:'search',component:SearchComponent},
  {path:'addlesson',component:AddLessonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
