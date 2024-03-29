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
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ExitComponent } from './components/exit/exit.component';
import { StudentCalanderComponent } from './components/student-calander/student-calander.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { TeacherhomeComponent } from './components/teacherhome/teacherhome.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { RecommandationComponent } from './components/recommandation/recommandation.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'רישום/כניסה', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newuser', component: NewuserComponent },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'teacher', component: TeacherComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent },
  { path: 'newteacher', component: AddTeacherComponent },
  { path: 'newStudent', component: NewStudentComponent },
  { path: 'לוח שנה', component: CalanderComponent },
  { path: 'calander', component: CalanderComponent },
  { path: 'determineLessons', component: DeterminingLessonsComponent },
  { path: 'לוח שעות', component: DeterminingLessonsComponent },
  { path: 'file', component: FileComponent },
  { path: 'updateStudent', component: UpdateStudentComponent },
  { path: ' פרופיל ', component: UpdateStudentComponent },
  { path: 'פרופיל', component: UpdateTeacherComponent },
  { path: 'search', component: SearchComponent },
  { path: 'חיפוש', component: SearchComponent },
  { path: 'אודות', component: AboutComponent },
  { path: 'addlesson', component: AddLessonComponent },
  { path: 'בית', component: StudentHomeComponent },
  { path: 'יציאה', component: ExitComponent },
  { path: 'לוח שנה לתלמידה', component: StudentCalanderComponent },
  { path: 'למורה בית', component: TeacherhomeComponent },
  { path: 'teacherHome', component: TeacherhomeComponent },
  {path:'recommandation/:teacherId',component:RecommandationComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
