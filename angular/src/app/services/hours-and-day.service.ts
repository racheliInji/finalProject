import { Injectable } from '@angular/core';
import { HourandDay } from '../class/hourand-day';
import { HttpClient } from '@angular/common/http';
import { SubjectForTeacher } from '../class/subject-for-teacher';

@Injectable({
  providedIn: 'root'
})
export class HoursAndDayService {


  Url = 'http://localhost:59802/HoursForTeacher'

  constructor(private http: HttpClient) { }
  
  addHourandDay(hourandDay: HourandDay) {
    console.log(hourandDay);
    return this.http.post<any>(this.Url + '/addHourandDay', hourandDay);
  }
  getHourandDay() {
    return this.http.get<HourandDay[]>(this.Url + '/hoursAndDaysForTeacher');
  }

  getIdteacher(item: HourandDay) {
    return this.http.put<any>(this.Url + "/getIdHour", item);
  }

  addSubjectToTeacher(item: SubjectForTeacher) {
    return this.http.post<any>("http://localhost:59802/SubjectToTeacher/addSubjectToTeacher", item);

  }

  removeHourAndDay(id: any) {
    console.log(id);

    return this.http.delete<any>(`${this.Url + '/removeHourAndDay'}/${id}`);
  }
}
