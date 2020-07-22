export class SubjectToTeacher {
    public  teacherName:string;
    public password:string;
    public  SubjectName :string;
    public  PriceForLesson:number
    public  LessonLength:number
    public  GradesRange :string
    constructor(teacherName:string,password:string,SubjectName :string,PriceForLesson:number,  LessonLength:number, GradesRange :string)
    {
        this.password=password;
        this.GradesRange=GradesRange;
        this.PriceForLesson=PriceForLesson;
        this.SubjectName=SubjectName;
        this.teacherName=teacherName;
        this.LessonLength=LessonLength;
    }
        

        
}
