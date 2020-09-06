import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HoursAndDayService } from 'src/app/services/hours-and-day.service';
import { Time } from '@angular/common';
import { HourandDay } from 'src/app/class/hourand-day';
import { BaseUser } from 'src/app/class/base-user';
import { SubjectForTeacher } from 'src/app/class/subject-for-teacher';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-determining-lessons',
  templateUrl: './determining-lessons.component.html',
  styleUrls: ['./determining-lessons.component.scss']
})
export class DeterminingLessonsComponent implements OnInit {

  constructor(private HoursAndDayService: HoursAndDayService, private UserService: UserService) { }

  hoursAndDayList: any[] = [];
  day: string;
  startHour: string
  endHour: string
  teacherName: string;
  user: BaseUser;
  money: number;
  subject: string;
  grade: string;
  id: number;
  d509: any;
  isChecked109: any;
  isChecked110: any;
  isChecked111: any;
  isChecked112: any;
  isChecked113: any;
  isChecked114: any;
  isChecked115: any;
  isChecked116: any;
  isChecked117: any;
  isChecked118: any;
  isChecked119: any;
  isChecked120: any;
  isChecked121: any;
  isChecked209: any;
  isChecked210: any;
  isChecked211: any;
  isChecked212: any;
  isChecked213: any;
  isChecked214: any;
  isChecked215: any;
  isChecked216: any;
  isChecked217: any;
  isChecked218: any;
  isChecked219: any;
  isChecked220: any;
  isChecked221: any;
  isChecked309: any;
  isChecked310: any;
  isChecked311: any;
  isChecked312: any;
  isChecked313: any;
  isChecked314: any;
  isChecked315: any;
  isChecked316: any;
  isChecked317: any;
  isChecked318: any;
  isChecked319: any;
  isChecked320: any;
  isChecked321: any;
  isChecked409: any;
  isChecked410: any;
  isChecked411: any;
  isChecked412: any;
  isChecked413: any;
  isChecked415: any;
  isChecked414: any;
  isChecked416: any;
  isChecked417: any;
  isChecked418: any;
  isChecked419: any;
  isChecked420: any;
  isChecked421: any;
  isChecked509: any;
  isChecked510: any;
  isChecked511: any;
  isChecked512: any;
  isChecked513: any;
  isChecked514: any;
  isChecked515: any;
  isChecked516: any;
  isChecked517: any;
  isChecked518: any;
  isChecked519: any;
  isChecked520: any;
  isChecked521: any;

  ngOnInit() {
    this.isChecked109 = 309;
    if (localStorage.getItem("token")) {
      console.log("token")
      this.id = this.UserService.getIdByToken();
      console.log(this.id);
      // this.getHourandDay()
      this.hoursAndDayList = this.HoursAndDayService.hoursForTeacherList;
      // console.log(this.hoursAndDayList);
      this.putValus();
      this.d509 = this.checkValue
    }
  }
  s: string;
  s2: string;
  putValus() {
    console.log("put");
    console.log(this.hoursAndDayList);
    this.hoursAndDayList.forEach(element => {
      console.log(element.Day);

      this.s = this.convertDay(element.Day) + this.convertTime(element.Starttime);
      console.log(this.s);
      this.s2 = "isChecked" + this.s;
      this.find(this.s2, this.s);
    });
  }
  find(s, dayAndTime) {
    if (s == "isChecked109")
      this.isChecked109 = dayAndTime;
    else if (s == "isChecked110")
      this.isChecked110 = dayAndTime;
    else if (s == "isChecked111")
      this.isChecked111 = dayAndTime;
    else if (s == "isChecked112")
      this.isChecked112 = dayAndTime;
    else if (s == "isChecked113")
      this.isChecked113 = dayAndTime;
    else if (s == "isChecked114")
      this.isChecked114 = dayAndTime;
    else if (s == "isChecked115")
      this.isChecked115 = dayAndTime;
    else if (s == this.isChecked116)
      this.isChecked116 = dayAndTime;
    else if (s == "isChecked117")
      this.isChecked117 = dayAndTime;
    else if (s == "isChecked118")
      this.isChecked118 = dayAndTime;
    else if (s == "isChecked119")
      this.isChecked119 = dayAndTime;
    else if (s == "isChecked120")
      this.isChecked120 = dayAndTime;
    else if (s == "isChecked121")
      this.isChecked121 = dayAndTime;
    else if (s == "isChecked209")
      this.isChecked209 = dayAndTime;
    else if (s == "isChecked210")
      this.isChecked210 = dayAndTime;
    else if (s == "isChecked211")
      this.isChecked211 = dayAndTime;
    else if (s == "isChecked212")
      this.isChecked212 = dayAndTime;
    else if (s == "isChecked213")
      this.isChecked213 = dayAndTime;
    else if (s == "isChecked214")
      this.isChecked214 = dayAndTime;
    else if (s == "isChecked215")
      this.isChecked215 = dayAndTime;
    else if (s == "isChecked216")
      this.isChecked216 = dayAndTime;
    else if (s == "isChecked217")
      this.isChecked217 = dayAndTime;
    else if (s == "isChecked218")
      this.isChecked218 = dayAndTime;
    else if (s == "isChecked219")
      this.isChecked219 = dayAndTime;
    else if (s == "isChecked220")
      this.isChecked220 = dayAndTime;
    else if (s == "isChecked221")
      this.isChecked221 = dayAndTime;
    else if (s == "isChecked309")
      this.isChecked309 = dayAndTime;
    else if (s == "isChecked310")
      this.isChecked310 = dayAndTime;
    else if (s == "isChecked311")
      this.isChecked311 = dayAndTime;
    else if (s == "isChecked312")
      this.isChecked312 = dayAndTime;
    else if (s == "isChecked313")
      this.isChecked313 = dayAndTime;
    else if (s == "isChecked314")
      this.isChecked314 = dayAndTime;
    else if (s == "isChecked315")
      this.isChecked315 = dayAndTime;
    else if (s == "isChecked316")
      this.isChecked316 = dayAndTime;
    else if (s =="isChecked317")
      this.isChecked317 = dayAndTime;
    else if (s =="isChecked318")
      this.isChecked318 = dayAndTime;
    else if (s == "isChecked319")
      this.isChecked319 = dayAndTime;
    else if (s == "isChecked320")
      this.isChecked320 = dayAndTime;
    else if (s == "isChecked321")
      this.isChecked321 = dayAndTime;
    else if (s == "isChecked409")
      this.isChecked409 = dayAndTime;
    else if (s == "isChecked410")
      this.isChecked410 = dayAndTime;
    else if (s == "isChecked411")
      this.isChecked411 = dayAndTime;
    else if (s == "isChecked412")
      this.isChecked412 = dayAndTime;
    else if (s == "isChecked413")
      this.isChecked413 = dayAndTime;
    else if (s == "isChecked414")
      this.isChecked414 = dayAndTime;
    else if (s == "isChecked415")
      this.isChecked415 = dayAndTime;
    else if (s == "isChecked416")
      this.isChecked416 = dayAndTime;
    else if (s == "isChecked417")
      this.isChecked417 = dayAndTime;
    else if (s == "isChecked418")
      this.isChecked418 = dayAndTime;
    else if (s == "isChecked419")
      this.isChecked419 = dayAndTime;
    else if (s == "isChecked420")
      this.isChecked420 = dayAndTime;
    else if (s == "isChecked421")
      this.isChecked421 = dayAndTime;
      else if (s == "isChecked509")
      this.isChecked509 = dayAndTime;
    else if (s == "isChecked510")
      this.isChecked510 = dayAndTime;
    else if (s == "isChecked511")
      this.isChecked511 = dayAndTime;
    else if (s == "isChecked512")
      this.isChecked512 = dayAndTime;
    else if (s == "isChecked513")
      this.isChecked513 = dayAndTime;
    else if (s == "isChecked514")
      this.isChecked514 = dayAndTime;
    else if (s == "isChecked515")
      this.isChecked515 = dayAndTime;
    else if (s == "isChecked516")
      this.isChecked516 = dayAndTime;
    else if (s == "isChecked517")
      this.isChecked517 = dayAndTime;
    else if (s == "isChecked518")
      this.isChecked518 = dayAndTime;
    else if (s == "isChecked519")
      this.isChecked519 = dayAndTime;
    else if (s == "isChecked520")
      this.isChecked520 = dayAndTime;
    else if (s == "isChecked521")
      this.isChecked521 = dayAndTime;
    
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
    this.HoursAndDayService.addSubjectToTeacher(new SubjectForTeacher(this.id, this.subject, this.money, this.grade)).subscribe();
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
    console.log('id' + this.id);
    this.HoursAndDayService.removeHourAndDay(this.id).subscribe();

  }

  addHourandDay() {
    console.log("hi");
    console.log(this.id)
    this.HoursAndDayService.addHourandDay(new HourandDay(this.UserService.getIdByToken(), this.day, this.startHour, this.endHour)).subscribe(i => this.HoursAndDayService.getHourandDayById(this.id));
  }

  checkHour(num: number) {
    console.log(num);
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
