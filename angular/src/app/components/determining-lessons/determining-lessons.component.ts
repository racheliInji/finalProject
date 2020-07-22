import { Component, OnInit , Input } from '@angular/core';
import { HoursAndDayService } from 'src/app/services/hours-and-day.service';
import { Time } from '@angular/common';
import { HourandDay } from 'src/app/class/hourand-day';
import { BaseUser } from 'src/app/class/base-user';
import { SubjectForTeacher } from 'src/app/class/subject-for-teacher';

@Component({
  selector: 'app-determining-lessons',
  templateUrl: './determining-lessons.component.html',
  styleUrls: ['./determining-lessons.component.scss']
})
export class DeterminingLessonsComponent implements OnInit {

  constructor(private HoursAndDayService:HoursAndDayService) { }
  // checked = false;
  // indeterminate = false;
  // labelPosition: 'before' | 'after' = 'after';
  // disabled = false;
  hoursAndDayList:HourandDay[]=[];
  day:string;
  startHour:string
  endHour:string
  teacherName:string;
  user:BaseUser;
  money:number;
  subject:string;
  grade:string;
  id:number;
  ngOnInit() {
    this.user= JSON.parse(localStorage.getItem("currnetUser"));
    // this.teacherName=this.user.firstName;
    this.getHourandDay()
  }
  addSubjectToTeacher(){
    this.HoursAndDayService.addSubjectToTeacher(new SubjectForTeacher(this.user.firstName,this.user.password,this.subject,this.money,this.grade)).subscribe();
  }
  getHourandDay(){
  this.HoursAndDayService.getHourandDay().subscribe((list:HourandDay[])=>{this.hoursAndDayList=list, console.log(this.hoursAndDayList)})
  }
  checkday(num:number){
    if ((num/100>1&&num/100<2)||(num/1000>1&&num/1000<2))
    this.day="ראשון"
    else if ((num/100>2 && num/100<3)||(num/1000>2&&num/1000<3))
    this.day="שני"
    else if ((num/100>3&&num/100<4)||(num/1000>3&&num/1000<4))
    this.day="שלישי"
    else if ((num/100>4&&num/100<5)||(num/1000>4&&num/1000<5))
    this.day="רביעי"
    else if ((num/100>5&&num/100<6)||(num/1000>5&&num/1000<6))
    this.day="חמישי"
   
  }
  
  checkValue(num: number){
   this.checkday(num);
    this.checkHour(num%100);
   if(num<1000){
    this.addHourandDay();
   }
   else{

     this.removeHourAndDay();
   }
 }
 getIdTeacher()
 {
  this.HoursAndDayService.getIdteacher( new HourandDay(this.user.firstName,this.user.password,this.day,this.startHour,this.endHour) ).subscribe(i=>{console.log(i),this.id=i} );
 }
  removeHourAndDay() 
  {
    
    console.log('id'+this.id);
    this.HoursAndDayService.removeHourAndDay(this.id).subscribe(i=>{this.getHourandDay()});
  
  }
 addHourandDay(){
   console.log("hi");
    this.HoursAndDayService.addHourandDay(new HourandDay(this.user.firstName,this.user.password,this.day,this.startHour,this.endHour)).subscribe(i=>this.getHourandDay());
    this.getIdTeacher();
 }
 checkHour(num:number){
  console.log(num);
   if(num==9||num==90)
   {
     this.startHour='09:00:00'
     this.endHour='10:00:00'
   }
   if(num==10||num==100)
   {
     this.startHour='10:00:00'
     this.endHour='11:00:00'
   }
   if(num==11||num==110)
   {
     this.startHour='11:00:00'
     this.endHour='12:00:00'
   }
   if(num==12||num==120)
   {
     this.startHour='12:00:00'
     this.endHour='13:00:00'
   }
   if(num==13||num==130)
   {
     this.startHour='13:00:00'
     this.endHour='14:00:00'
   }
   if(num==14||num==140)
   {
     this.startHour='14:00:00'
     this.endHour='15:00:00'
   }
   if(num==15||num==150)
   {
     this.startHour='15:00:00'
     this.endHour='16:00:00'
   }
   if(num==16||num==160)
   {
     this.startHour='16:00:00'
     this.endHour='17:00:00'
   }
   if(num==17||num==170)
   {
     this.startHour='17:00:00'
     this.endHour='18:00:00'
   }
   if(num==18||num==180)
   {
     this.startHour='18:00:00'
     this.endHour='19:00:00'
   }
   if(num==19||num==190)
   {
     this.startHour='19:00:00'
     this.endHour='20:00:00'
   }
   if(num==20||num==200)
   {
     this.startHour='20:00:00'
     this.endHour='21:00:00'
   }
   if(num==21||num==210)
   {
     this.startHour='21:00:00'
     this.endHour='22:00:00'
   }
 }
}
