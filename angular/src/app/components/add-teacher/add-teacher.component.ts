import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Teacher } from 'src/app/class/teacher';
import { RepeatPasswordValidator, PasswordValidation, EmailValidation } from '../validators';
import { HoursAndDayService } from 'src/app/services/hours-and-day.service';
import { UserService } from 'src/app/services/user.service';
import { SubjectForTeacher } from 'src/app/class/subject-for-teacher';
import { HourandDay } from 'src/app/class/hourand-day';
import { TeacherService } from 'src/app/services/teacher.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { ConditionalExpr } from '@angular/compiler';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})

export class AddTeacherComponent implements OnInit {
  encapsulation: ViewEncapsulation.None

  hoursAndDayList: any[] = [];
  day: string;
  startHour: string
  endHour: string
  teacherName: string;
  money: number;
  subject: string;
  grade: string;
  id: number;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public nameFile: string;
  selectedfile: File = null;
  Url = 'http://localhost:59802/Teacher';
  private key = 'token'
  private user: any;
  private kind: string;
  teachers: Teacher[] = [];
  form: any;
  constructor(private Http: HttpClient, private userService: UserService, private TeacherService: TeacherService, private HoursAndDayService: HoursAndDayService, private UserService: UserService, private formBuilder: FormBuilder, private _formBuilder: FormBuilder, private router: Router, private auth: AuthService) {
    this.form = this.formBuilder.group({
      email: new FormControl('', EmailValidation),
      password: new FormControl('', PasswordValidation),
      passwordAgain: new FormControl(''),
      acceptTerms: new FormControl('', [Validators.requiredTrue])
    }, { validator: RepeatPasswordValidator });
  }
  f() {
    console.log("hi")
  }
  selectedIndex: any;
  flag = false;
  flag2 = false;

  setIndex(event) {
    this.selectedIndex = event.selectedIndex;
    console.log(event);
    if (event.selectedIndex == 1 && this.flag == false) {
      this.flag = true;
      this.addTeacher();
    }
    else if (event.selectedIndex == 2 && this.flag2 == false) {
      this.flag2 = true;
      this.addSubjectToTeacher();
    }
  }
  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', [Validators.required,
      Validators.pattern('[a-zA-Zא-ת ]*')]
      ],
      lastName: ['', [Validators.required,
      Validators.pattern('[a-zA-Zא-ת ]*')]
      ],
      street: ['', Validators.required],
      numhouse: ['', Validators.required],
      city: ['', Validators.required],
      tz: ['', [Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.maxLength(9),
      Validators.minLength(9),]
      ],
      phone: ['', [Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.maxLength(10),
      Validators.minLength(9),]
      ],
      // save: ['', Validators.required],
      // email: ['', this.stringValidatorArr('email', 7, 30, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)],
      email: ['', EmailValidation],
      password: ['', PasswordValidation],
      passwordAgain: new FormControl(''),
    }, { validator: RepeatPasswordValidator }

    );
    this.secondFormGroup = this.formBuilder.group({
      subject: ['', Validators.required],
      money: ['', Validators.required],
      grade: ['', Validators.required],
    });

  }
  selectFile(event) {
    this.selectedfile = <File>event.target.files[0];
    if ((this.selectedfile.type != "application/pdf")) {
      swal("!!!!!!PDF ניתן לטעות רק קבצי ", "", "info")
    }
    else {
      const fd = new FormData();
      fd.append('file', this.selectedfile, this.selectedfile.name);
      this.nameFile = this.selectedfile.name;
      console.log(this.selectedfile.type)
      this.TeacherService.addfile(fd, this.selectedfile.name).subscribe(res => { });
    }

  }
  addTeacher() {
    this.flag = true;
    console.log(this.firstFormGroup.value);
    console.log("ok");
    this.TeacherService
      .addTeacher(new Teacher(this.firstFormGroup.value.tz, this.firstFormGroup.value.firstName, this.firstFormGroup.value.lastName, this.firstFormGroup.value.city, this.firstFormGroup.value.street, this.firstFormGroup.value.numhouse,
        this.firstFormGroup.value.email, this.firstFormGroup.value.password, this.firstFormGroup.value.phone, " ")).subscribe(res => {
          this.auth.login(this.firstFormGroup.value.firstName, this.firstFormGroup.value.password).subscribe((token: string) => {
            if (token != "notfound") {
              localStorage.setItem(this.key, token);
              this.id = this.UserService.getIdByToken();
              // this.hoursAndDayList = this.HoursAndDayService.hoursForTeacherList;
            }
            // swal("פרטיך נשמרו בהצלחה!", "", "success")
          }
          );
          this.userService.sendEmails(this.firstFormGroup.value.firstName, this.firstFormGroup.value.lastName, this.firstFormGroup.value.email).subscribe();
        });

    // this.router.navigate(['/determineLessons']);


  }
  addAnother() {
    this.addSubjectToTeacher();
    this.secondFormGroup.reset();
  }
  GetTeacher() {
    this.TeacherService.getTeachers().subscribe((teacherList: Teacher[]) => { this.teachers = teacherList, console.log(this.teachers) });

  }
  stringValidatorArr(ctrlName: string, min?: number, max?: number, pattern?: RegExp) {
    return [
      f => f.value && max && f.value.length > max ? { 'val': `'${ctrlName}' is max ${max} chars` } : null,
      f => f.value && min && f.value.length < min ? { 'val': `'${ctrlName}' is min ${min} chars` } : null,
      f => f.value && pattern && !f.value.match(pattern) ? { 'val': `'${ctrlName}' format is not correct` } : null
    ];
  }

  convertDay(day) {
    if (day == "ראשון")
      return 1;
    else if (day == "שני")
      return 2;
    else if (day == "שלישי")
      return 3;
    else if (day == "רביעי")
      return 4;
    else if (day == "חמישי")
      return 5;
  }
  convertTime(time: string) {
    if (time == "09:00:00")
      return "09";
    else if (time == "10:00:00")
      return "10";
    else if (time == "11:00:00")
      return "11";
    else if (time == "12:00:00")
      return "12";
    else if (time == "13:00:00")
      return "13";
    else if (time == "14:00:00")
      return "14";
    else if (time == "15:00:00")
      return "15";
    else if (time == "16:00:00")
      return "16";
    else if (time == "17:00:00")
      return "17";
    else if (time == "18:00:00")
      return "18";
    else if (time == "19:00:00")
      return "19";
    else if (time == "20:00:00")
      return "20";
    else if (time == "21:00:00")
      return "21";
  }

  addSubjectToTeacher() {
    this.flag2=true;
    console.log(this.id);
    this.HoursAndDayService.addSubjectToTeacher(new SubjectForTeacher(this.id, this.secondFormGroup.value.subject, this.secondFormGroup.value.money, this.secondFormGroup.value.grade)).subscribe(res => {
      console.log(res);
      if (res == true) {
        swal({
          title: "שיעור זה כבר קים",
          icon: "info",
          // dangerMode: true,
          buttons: ["ביטול", "אישור"],
        });
      }
    });

  }

  // getHourandDay() {
  //   this.HoursAndDayService.getHourandDayById(this.id).subscribe((list: HourandDay[]) => { this.hoursAndDayList = list, console.log(this.hoursAndDayList), this.putValus() })
  // }

  checkday(num: number) {
    if ((num / 100 > 1 && num / 100 < 2) || (num / 1000 > 1 && num / 1000 < 2))
      this.day = "ראשון"
    else if ((num / 100 > 2 && num / 100 < 3) || (num / 1000 > 2 && num / 1000 < 3))
      this.day = "שני"
    else if ((num / 100 > 3 && num / 100 < 4) || (num / 1000 > 3 && num / 1000 < 4))
      this.day = "שלישי"
    else if ((num / 100 > 4 && num / 100 < 5) || (num / 1000 > 4 && num / 1000 < 5))
      this.day = "רביעי"
    else if ((num / 100 > 5 && num / 100 < 6) || (num / 1000 > 5 && num / 1000 < 6))
      this.day = "חמישי"
  }

  checkValue(num: number) {
    this.checkday(num);
    this.checkHour(num % 100);
    if (num < 1000) {
      this.addHourandDay();
    }
    else {

      this.removeHourAndDay();
    }
  }

  removeHourAndDay() {
    // console.log('id' + this.id);
    this.HoursAndDayService.removeHourAndDay(this.id).subscribe();

  }

  addHourandDay() {
    // console.log(this.id)
    this.HoursAndDayService.addHourandDay(new HourandDay(this.UserService.getIdByToken(), this.day, this.startHour, this.endHour)).subscribe(i => this.HoursAndDayService.getHourandDayById(this.id));
  }

  checkHour(num: number) {
    if (num == 9 || num == 90) {
      this.startHour = '09:00:00'
      this.endHour = '10:00:00'
    }
    if (num == 10 || num == 100) {
      this.startHour = '10:00:00'
      this.endHour = '11:00:00'
    }
    if (num == 11 || num == 110) {
      this.startHour = '11:00:00'
      this.endHour = '12:00:00'
    }
    if (num == 12 || num == 120) {
      this.startHour = '12:00:00'
      this.endHour = '13:00:00'
    }
    if (num == 13 || num == 130) {
      this.startHour = '13:00:00'
      this.endHour = '14:00:00'
    }
    if (num == 14 || num == 140) {
      this.startHour = '14:00:00'
      this.endHour = '15:00:00'
    }
    if (num == 15 || num == 150) {
      this.startHour = '15:00:00'
      this.endHour = '16:00:00'
    }
    if (num == 16 || num == 160) {
      this.startHour = '16:00:00'
      this.endHour = '17:00:00'
    }
    if (num == 17 || num == 170) {
      this.startHour = '17:00:00'
      this.endHour = '18:00:00'
    }
    if (num == 18 || num == 180) {
      this.startHour = '18:00:00'
      this.endHour = '19:00:00'
    }
    if (num == 19 || num == 190) {
      this.startHour = '19:00:00'
      this.endHour = '20:00:00'
    }
    if (num == 20 || num == 200) {
      this.startHour = '20:00:00'
      this.endHour = '21:00:00'
    }
    if (num == 21 || num == 210) {
      this.startHour = '21:00:00'
      this.endHour = '22:00:00'
    }
  }
}
