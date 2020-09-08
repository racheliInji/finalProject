export class SearchTeacher {
    public  firstName:string;
    public  lastName:string;
    public password:string;
    public  SubjectName :string;
    public  PriceForLesson:number
    public  LessonLength:number
    public  GradesRange :string
    public  phone :string
    public city :string;
    public street :string;

    constructor(firstName:string,lastName:string,password:string,SubjectName :string,PriceForLesson:number,  LessonLength:number, GradesRange :string,phone:string,city :string
        , street :string )
    {
        this.password=password;
        this.GradesRange=GradesRange;
        this.PriceForLesson=PriceForLesson;
        this.SubjectName=SubjectName;
        this.firstName=firstName;
        this.lastName=lastName;
        this.LessonLength=LessonLength;
        this.phone=phone;
        this.city=city;
        this.street=street;
    }
        

        
}
