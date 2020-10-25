import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { HourandDay } from 'src/app/class/hourand-day';
import { DatePipe } from '@angular/common';
import swal from 'sweetalert';
import {
  ChangeDetectionStrategy,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  getDay,
  format,
} from 'date-fns';
import { Subject, observable, Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarEvent
} from 'angular-calendar';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { async } from 'q';
import { AddLessonService } from 'src/app/services/add-lesson.service';
import { CalanderService } from 'src/app/services/calander.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {

  daysandHourList: any[] = [];
  hoursList: any[] = [];
  dayList: any[] = [];

  constructor(private router: Router, private TeacherService: TeacherService, private modal: NgbModal, private datePipe: DatePipe, private addLessonService: AddLessonService, private calanderService:CalanderService) { }

  ngOnInit() {
    this.getTeachersDays();
  }


  flag: boolean;
  getTeachersDays() {
    // this.TeacherService.getTeachersDays().subscribe(res => {
    //   this.daysandHourList = res;
    this.daysandHourList = this.TeacherService.hoursForteacherList;
    this.addAvailableHour();
    //   console.log(this.daysandHourList)
    // });
  }
  close() {
    // console.log("close");
    this.TeacherService.flag = false;
    // this.wrapper.nativeElement.removeAttribute("style", "position:fixed");
    this.router.navigate['/חיפוש']
  }
  // ---------------------------------------------------
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };
  getDiffDate() {

  }
  addAvailableHour() {
    // console.log("day" + new Date().getDay())
    // console.log(this.daysandHourList)
    var m = 0;
    this.daysandHourList.forEach(element => {
      this.events.push({
        start: addHours(startOfDay(new Date(element.Date)), element.timeInNUm),
        // start: startOfDay(new Date(element.Date)),
        title: element.Starttime,
        actions: this.actions,
        color: colors.blue,
      });
    });

    // this.events.push({i
    //   start: startOfDay(this.sdate.setDate(this.sdate.getDate())),
    //   title: 'try',
    //   color: colors.yellow,
    // });

    // console.log("event " + this.events.length)
  };
  addLesson() {
    console.log("addLesson!!!!!1")
    this.addLessonService.addLesson(this.formatedDate, this.starTtime).subscribe(i => swal("השיעור נוסף בהצלחה!", "", "success")
    );
  }
  formatedDate: any;
  starTtime: any;
  endTime: any;
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-plus-circle"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.formatedDate = this.datePipe.transform(event.start, "MM/dd/yyyy"); // Format: dd/MM/yyyy OR dd-MM-yyyy OR yyyy-MM-dd
        this.starTtime = event.title;
        // alert(this.formatedDate + ' ' + event.title)
        if (localStorage.getItem("token") != null) {
          this.events = this.events.filter((iEvent) => iEvent !== event);
          this.handleEvent('Deleted', event);
          this.addLesson();
          this.calanderService.getLesson();
        }
        else {
          swal( {
            title:"לקביעת שיעור עליך להיות רשום",
            icon: "info",
            // dangerMode: true,
            buttons: ["ביטול", "לרשום"],
          }).then(
            i => {
              if (i != null) {
                this.addLessonService.newUser=true;
                this.router.navigate(['/newStudent']);
              }
            }
          )

        }

      },
    },
    // {
    //   label: '<i class="fas fa-fw fa-trash-alt"></i>',
    //   a11yLabel: 'Delete',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     this.events = this.events.filter((iEvent) => iEvent !== event);
    //     this.handleEvent('Deleted', event);
    //   },
    // },
  ];
  today = new Date();
  date = new Date();
  numOfDay: number
  refresh: Subject<any> = new Subject();
  sdate = new Date();
  // convertDay(day) {
  //   if (day == "ראשון")
  //     return 0;
  //   else if (day == "שני")
  //     return 1;
  //   else if (day == "שלישי")
  //     return 2;
  //   else if (day == "רביעי")
  //     return 3;
  //   return 4;

  // }

  // count = 0;
  // numOfday: number
  // convertDate() {
  //   this.TeacherService.getTeachersDays().subscribe(res => {
  //     this.daysandHourList = res,
  //       console.log(this.daysandHourList)
  //     this.daysandHourList.forEach(element => {
  //       this.flag = false;
  //       this.dayList.forEach(day => {
  //         if (day == this.convertDay(element.Day))
  //           this.flag = true;
  //       });
  //       if (this.flag == false)
  //         this.dayList.push(this.convertDay(element.Day));

  //     });
  //     // return this.date.getDay() - this.dayList[1] ;
  //   });
  //   // this.a()
  //   // return   this.date.getDay() - this.dayList[1] ;
  // };
  // newday() {
  //   this.convertDate();
  //   console.log(this.date.getDay() - this.dayList[1]);
  //   this.date.getDay() - this.dayList[1];
  // }
  events: CalendarEvent[] = [
    // {

    // {
    //   start: addHours(startOfDay(new Date().setDate(new Date().getDate() + 2)), 7),
    //   title: '7:00',
    //   color: colors.red,
    //   actions: this.actions,
    //   // allDay: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true,
    //   }
    // },
    // {
    //   start: addHours(startOfDay(this.sdate.setDate(this.sdate.getDate() + 3)), 9),
    //   title: '9:00',
    //   color: colors.yellow,
    //   actions: this.actions,
    // },
    // // {
    // //   start: subDays(endOfMonth(new Date()), 3),
    // //   end: addDays(endOfMonth(new Date()), 3),
    // //   title: 'A long event that spans 2 months',
    // //   color: colors.blue,
    // //   allDay: true,
    // // },
    // {
    //   start: addHours(startOfDay(new Date()), 12),
    //   // end: addHours(new Date(), 2),
    //   title: '12:00',
    //   color: colors.yellow,
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true,
    //   },
    //   draggable: true,
    // },
  ];

  activeDayIsOpen: boolean = true;


  // dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
  //   if (isSameMonth(date, this.viewDate)) {
  //     if (
  //       (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
  //       events.length === 0
  //     ) {
  //       this.activeDayIsOpen = false;
  //     } else {
  //       this.activeDayIsOpen = true;
  //     }
  //     this.viewDate = date;
  //   }
  // }


  // eventTimesChanged({
  //   event,
  //   newStart,
  //   newEnd,
  // }: CalendarEventTimesChangedEvent): void {
  //   this.events = this.events.map((iEvent) => {
  //     if (iEvent === event) {
  //       return {
  //         ...event,
  //         start: newStart,
  //         end: newEnd,
  //       };
  //     }
  //     return iEvent;
  //   });
  //   this.handleEvent('Dropped or resized', event);
  // }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  // addEvent(): void {
  //   this.events = [
  //     ...this.events,
  //     {
  //       title: 'New event',
  //       start: startOfDay(new Date()),
  //       end: endOfDay(new Date()),
  //       color: colors.red,
  //       draggable: true,
  //       resizable: {
  //         beforeStart: true,
  //         afterEnd: true,
  //       },
  //     },
  //   ];
  // }

  // deleteEvent(eventToDelete: CalendarEvent) {
  //   this.events = this.events.filter((event) => event !== eventToDelete);
  // }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
