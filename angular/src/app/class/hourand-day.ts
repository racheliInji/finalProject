import { Time } from '@angular/common';

export class HourandDay {

    public  teacherName:string;
    public password:string 
    public  day:string
    public  starttime :string
    public  endtime :string;
    constructor(teacherName:string,password:string ,day:string,starttime :string, endtime :string)
    { 
      this.teacherName=teacherName;
       this.password=password;
      this.day=day;
      this.starttime=starttime;
      this.endtime=endtime
    }
}
