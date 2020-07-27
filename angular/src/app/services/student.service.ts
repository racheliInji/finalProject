import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../class/student';
import { BaseUser } from '../class/base-user';

@Injectable({
  providedIn: 'root'
})
export class StudentService {



  Url = 'http://localhost:59802/Student'


  constructor(private http: HttpClient) { }

  addStudent(student: Student) {
    console.log(student);
    return this.http.post<any>(this.Url + '/AddStudent', student);
  }
  getStudent() {
    return this.http.get<Student[]>(this.Url + '/GetStudent');
  }
  getStudentById(id: number) {
    return this.http.get<any>(`${this.Url + '/getStudentById'}/${id}`);
  }
  updateStudent(student: Student) {
    return this.http.put<any>(this.Url + "/updateStudent", student);
  }

  deleteStudent(id: any) {
    console.log(id);
    debugger;
    this.http.delete<any>(`${this.Url + '/deleteStudent'}/${id}`).subscribe(res => { console.log(res), alert(res) },
    (error: any) => {
    alert(error)
    });
}

}
