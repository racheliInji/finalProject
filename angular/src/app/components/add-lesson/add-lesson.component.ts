import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { HourandDay } from 'src/app/class/hourand-day';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {
  daysList: any[] = [];

  @ViewChild('sunday', { static: true }) sunday: ElementRef;
  @ViewChild('monday', { static: true }) monday: ElementRef;
  @ViewChild('tuesday', { static: true }) tuesday: ElementRef;
  @ViewChild('wednesday', { static: true }) wednesday: ElementRef;
  @ViewChild('thursday', { static: true }) thursday: ElementRef;
  constructor(private TeacherService: TeacherService) { }

  ngOnInit() {
    this.getTeachersDays();
   
  }
  setDays() {
    console.log("huhuu");
    for (let item of this.daysList) {
      console.log(item.Day)
      if (item.Day == "ראשון")
        this.sunday.nativeElement.setAttribute("style", "visibility:visible");
      else if (item.Day == "שני")
        this.monday.nativeElement.setAttribute("style", "visibility:visible");
      else if (item.Day == "שלישי")
        this.tuesday.nativeElement.setAttribute("style", "visibility:visible");
      else if (item.Day == "רביעי")
        this.wednesday.nativeElement.setAttribute("style", "visibility:visible");
      else if (item.Day == "חמישי")
        this.thursday.nativeElement.setAttribute("style", "visibility:visible");
    }

  }
  addLesson() {
    this.getTeachersDays();
  }
  getTeachersDays() {
    this.TeacherService.getTeachersDays().subscribe(res => { this.daysList = res, console.log(this.daysList), this.setDays(); })
  }
}
