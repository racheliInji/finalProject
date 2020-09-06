import { Time } from '@angular/common';

export class HourandDay {
    public TeacherId:number;
    public  day:string
    public  starttime :string
    public  endtime :string;
    constructor(TeacherId:number,day:string,starttime :string, endtime :string)
    { 
      // this.teacherName=teacherName;
      //  this.password=password;
      this.TeacherId=TeacherId;
      this.day=day;
      this.starttime=starttime;
      this.endtime=endtime
    }
}
