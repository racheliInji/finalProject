import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { Student } from 'src/app/class/student';
import { AuthService } from 'src/app/services/auth.service';
import { addLesson } from 'src/app/class/addLesson';
import { AddLessonService } from 'src/app/services/add-lesson.service';
import swal from 'sweetalert';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmailValidation, PasswordValidation, RepeatPasswordValidator } from '../validators';
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
  isLinear = true;
  form: any;
  firstFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, private StudentService: StudentService, private router: Router, private auth: AuthService, private addLesson: AddLessonService) {
    this.form = this._formBuilder.group({
      email: new FormControl('', EmailValidation),
      password: new FormControl('', PasswordValidation),
      passwordAgain: new FormControl(''),
      acceptTerms: new FormControl('', [Validators.requiredTrue])
    }, { validator: RepeatPasswordValidator });
  }
  count = 34;
  students: Student[] = [];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      level: ['', Validators.required],
      grade: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['',],
      numhouse: ['',],
      city: ['', Validators.required],
      tz: ['', Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.maxLength(9),
      Validators.minLength(9),],
      phone: ['', Validators.required],
      // email: ['', this.stringValidatorArr('email', 7, 30, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)],
      email: ['', EmailValidation],
      password: ['', PasswordValidation],
      passwordAgain: new FormControl(''),
    }, { validator: RepeatPasswordValidator }

    );
  }

  addStudent() {
    this.count = this.count + 1;
    this.StudentService.addStudent(new Student(this.firstFormGroup.value.tz, this.firstFormGroup.value.firstName, this.firstFormGroup.value.lastName, this.firstFormGroup.value.city, this.firstFormGroup.value.street, this.firstFormGroup.value.numhouse, this.firstFormGroup.value.email,
      this.firstFormGroup.value.password, this.firstFormGroup.value.phone, this.firstFormGroup.value.grade, this.firstFormGroup.value.level)).subscribe(
        res => {
          this.auth.login(this.firstFormGroup.value.firstName, this.firstFormGroup.value.password).subscribe((token: string) => {
            if (token != "notfound") {
              swal("פרטיך נשמרו בהצלחה!", "", "success")
              localStorage.setItem(this.key, token);
            }
           
          });

        });
        if (this.addLesson.newUser == true) {
          this.router.navigate(['/חיפוש']);
        }
        else {
          this.router.navigate(['/בית']);
        }

  }

  GetStudent() {
    this.StudentService.getStudent().subscribe((studentslist: Student[]) => { this.students = studentslist, console.log(this.students) });
  }

}
