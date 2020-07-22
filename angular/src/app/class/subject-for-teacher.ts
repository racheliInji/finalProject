export class SubjectForTeacher {

    public  teacherName:string;
    public password:string 
    public  SubjectName:string;
    public  PriceForLesson:number;
    public  GradesRange:string;
    constructor( teacherName:string,password:string ,SubjectName:string,PriceForLesson:number,GradesRange:string)
     {
         this.password=password;
         this.teacherName=teacherName;
         this.SubjectName=SubjectName;
         this.PriceForLesson=PriceForLesson;
         this.GradesRange=GradesRange;
              
     }
}
