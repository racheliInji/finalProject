export class Student {
        // public userId : number;
       public  tz:string
       public  firstName:string  
       public lastName: string;
       public city:string
       public  street:string  
       public  numhouse :number;
       public  email:string 
       public password : string ;
       public  phone:string ;  
       public IdGrade:number;
       public level:string;
        
       constructor(    tz:string, firstName:string ,lastName: string, city:string ,street:string,numhouse :number
        ,email:string ,password : string,phone:string ,IdGrade:number,level:string)
    {
    //    this.userId  = userId;
       this.tz = tz;
       this.firstName = firstName;
       this.lastName = lastName;
       this.city=city; 
       this.street = street;
       this.numhouse=numhouse;
       this.email=email;
       this.password=password;
       this.phone=phone;
       this.IdGrade=IdGrade;
       this.level= level
    }
    
}
