export class BaseUser {
    public  firstName:string ;
    public password : string ;
    
    constructor(firstName:string , password : string){
        this.firstName=firstName;
        this.password=password;
    }
}
