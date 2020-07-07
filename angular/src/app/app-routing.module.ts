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



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'newuser',component:NewuserComponent},
  {path:'student',component:StudentComponent, canActivate:[AuthGuard] },
  {path:'teacher',component:TeacherComponent, canActivate:[AuthGuard] },
  {path:'user',component:UserComponent},
  {path:'newteacher',component:NewTeacherComponent},
  {path:'newStudent',component:NewStudentComponent},
  {path:'calander',component:CalanderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
