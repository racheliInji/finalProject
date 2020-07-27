export class SubjectForTeacher {

    // public  teacherName:string;
    // public password:string 
    public TeacherId: number;
    public SubjectName: string;
    public PriceForLesson: number;
    public GradesRange: string;
    constructor(TeacherId: number, SubjectName: string, PriceForLesson: number, GradesRange: string) {
        //  this.password=password;
        //  this.teacherName=teacherName;
        this.TeacherId = TeacherId;
        this.SubjectName = SubjectName;
        this.PriceForLesson = PriceForLesson;
        this.GradesRange = GradesRange;

    }
}
