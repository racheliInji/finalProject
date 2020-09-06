import { Time } from '@angular/common';

export class addLesson {

    public  TeacherId :number
    public  StudentId :number
    public  Subject :string
    public  date :Date
    public  Starttime :string
    // public  Endtime :string
    constructor(TeacherId:number,StudentId :number,Subject:string,date :Date,starttime :string)
    {
      this.TeacherId=TeacherId;
      this.StudentId=StudentId;
      this.Subject=Subject;
      this.date=date;
      this.Starttime=starttime;
    //   this.Endtime=endtime;
    }
}
