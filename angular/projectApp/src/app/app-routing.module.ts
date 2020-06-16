import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewuserComponent } from './components/newuser/newuser.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './services/AuthGuard';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'newuser',component:NewuserComponent},
  {path:'student',component:StudentComponent, canActivate:[AuthGuard] },
  {path:'user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
