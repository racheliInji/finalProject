// import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {
  Component,
  Inject,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
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
} from 'date-fns';
import swal from 'sweetalert';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { CalanderService } from 'src/app/services/calander.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { MatDialog } from '@angular/material';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { style } from '@angular/animations';
import { Button } from 'protractor';
import { stringify } from 'querystring';

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
  selector: 'app-student-calander',
  templateUrl: './student-calander.component.html',
  styleUrls: ['./student-calander.component.scss']
})
export class StudentCalanderComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  lessonList: any[] = [];
  view: CalendarView = CalendarView.Month;
  animal: string;
  name: string;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };
  ngOnInit() {
    // console.log(this.calanderService.lessonListForStudent);
    this.getLesson();
  }
  getLesson() {
    this.calanderService.getLesson();
    this.lessonList = this.calanderService.lessonListForStudent;
    this.putlesson();

  }
  putlesson() {
    console.log(this.lessonList);
    this.lessonList.forEach(i => {
      this.events.push(
        {
          start: startOfDay(new Date(i.Date)),
          title: ' המורה: ' + i.TeacherName + '  שיעור  ' + i.Subject + ' : בשעה ' + i.starTtime,
          color: colors.yellow,
          actions: this.actions,
          meta: i
        }
      )
    })
  }
  note: any
  actions: CalendarEventAction[] = [
    {
      label: '<i class="far fa-thumbs-up"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {

        if (event.start < new Date()) {
          swal(
            {
              title: "הוספת המלצה",
              content: {
                element: "input",
                attributes: {
                  // placeholder: "אני ממליצה........",
                  // name: "recomandation",
                  id: "recomandation",
                  style: " height: 200px",
                },
              },
              buttons: ["ביטול", "אישור"],
            }
          )
            .then((value) => {
              console.log(value);

              this.calanderService.addRecommendation(value, event.meta.TeacherId).subscribe();
            });
        }
        else {
          swal({
            title: " המורה " + this.teacherDetails.firstName + ' ' + this.teacherDetails.lastName,
            text: this.s,

            buttons: [false],
          })
        }
      },
    },
    {
      label: '<i class="far fa-sticky-note"></i> ',
      // label: '<i class="fa fa-sticky-note-o"></i>',
      a11yLabel: 'Remarks',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        console.log(event.meta.Notes);
        if (event.meta.Notes == "" || event.meta.Notes == null)
          this.note = "לא עודכן הערה"
        else {
          this.note = event.meta.Notes
        }
        swal({
          title: "הערה",
          text: this.note,
          icon: "info",

        })
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        if (event.start >= new Date()) {
          swal({
            title: "האם לבטל את השיעור",
            icon: "warning",
            // dangerMode: true,
            buttons: ["ביטול", "אישור"],
          }).then(
            i => {
              if (i != null) {
                this.calanderService.deleteLesson(event.meta.TeacherId).subscribe(res => this.calanderService.getLesson());
                this.events = this.events.filter((iEvent) => iEvent !== event);
                this.handleEvent('Deleted', event);
              }
            }
          );
        }
        else {
          swal({
            title: "השיעור התקים",
            icon: "info",

          })
        }


      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    // {
    //   start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(new Date(), 1),
    //   title: 'A 3 day event',
    //   color: colors.red,
    //   actions: this.actions,
    //   allDay: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true,
    //   },
    //   draggable: true,
    // },
    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event with no end date',
    //   color: colors.yellow,
    //   actions: this.actions,
    // },
    // {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: 'A long event that spans 2 months',
    //   color: colors.blue,
    //   allDay: true,
    // },
    // {
    //   start: addHours(startOfDay(new Date()), 2),
    //   end: addHours(new Date(), 2),
    //   title: 'A draggable and resizable event',
    //   color: colors.yellow,
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true,
    //   },
    //   draggable: true,
    // },
  ];

  activeDayIsOpen: boolean = false;

  constructor(public dialog: MatDialog, private router: Router, private teacherService: TeacherService, private calanderService: CalanderService, private modal: NgbModal) {
    // this.getLesson();
  }
  s: string;
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    // alert("hi");
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.s = "";
        this.activeDayIsOpen = true;
        // events.forEach(i => {
        //   console.log(this.s);
        //   this.s += + i.title+"\n"
        // })
        // swal({
        //   text: this.s,
        //   buttons: [false]
        // })

      }
      this.viewDate = date;
    }
  }


  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    // alert(44444444444);
    // this.events = this.events.map((iEvent) => {
    //   if (iEvent === event) {
    //     return {
    //       ...event,
    //       start: newStart,
    //       end: newEnd,
    //     };
    //   }
    //   return iEvent;
    // });
    // this.handleEvent('Dropped or resized', event);
  }
  teacherDetails: any;
  handleEvent(action: string, event: CalendarEvent): void {
    this.teacherService.getTeacherById(event.meta.TeacherId).subscribe(res => {
      console.log(res), this.teacherDetails = res,
        this.s =
        "כתובת: " + this.teacherDetails.street + ' ' + this.teacherDetails.numhouse + "  " + this.teacherDetails.city + "\n" + this.teacherDetails.email + "   דואר אלקטרוני:  "


      swal({
        title: " המורה " + this.teacherDetails.firstName + ' ' + this.teacherDetails.lastName,
        text: this.s,

        buttons: [false],
      })

    });


    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
