import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { Student } from 'src/app/class/student';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  tz: string
  firstName: string
  lastName: string;
  city: string
  email: string
  password: string;
  phone: string;
  numhouse: number;
  street: string;
  grade: number;
  level: string;
  key = "token";
  constructor(private StudentService: StudentService, private router: Router, private auth: AuthService) { }
  count = 34;
  students: Student[] = [];
  
  ngOnInit() {
  }

  addStudent() {
    console.log(this.city);
    this.count = this.count + 1;
    this.StudentService.addStudent(new Student(this.tz, this.firstName, this.lastName, this.city, this.street, this.numhouse, this.email,
      this.password, this.phone, this.grade, this.level)).subscribe(res => {
        this.auth.login(this.firstName, this.password).subscribe((token: string) => {
          if (token != "notfound") {
            localStorage.setItem(this.key, token);
          }

        });
      });
    this.router.navigate(['/student']);
  }

  GetStudent() {
    this.StudentService.getStudent().subscribe((studentslist: Student[]) => { this.students = studentslist, console.log(this.students) });
  }

}
