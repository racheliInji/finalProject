import 'sweetalert2/dist/sweetalert2.min.css';
import {
  Component,
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
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from 'src/app/components/my-dialog/my-dialog.component';

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
// require('sweetalert2/dist/sweetalert2.min.css');
// const {ngSweetAlert2} = require('angular-h-sweetalert');
@Component({
  selector: 'app-calander', changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.scss']
})
export class CalanderComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  lessonList: any[] = [];
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };
  ngOnInit() {
    // console.log(this.calanderService.lessonList);

  }
  getLesson() {
    this.calanderService.getLesson();
    this.lessonList = this.calanderService.lessonList;
    this.putlesson();

  }
  putlesson() {
    this.lessonList.forEach(i => {
      this.events.push(
        {
          start: startOfDay(new Date(i.Date)),
          title: i.StudentName + ': בשעה:' + i.starTtime +' שיעור '+i.Subject,
          color: colors.yellow,
          actions: this.actions,
          meta: i,

        }
      )
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(MyDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {

        // swal({
        //   title: "Are you sure?",
        //   text: "Once deleted, you will not be able to recover this imaginary file!",

        // })
        // .then((willDelete) => {

        //     if(willDelete.value){
        //          swal("Success");
        //     }else{
        //       swal("Fail");
        //     }

        //   console.log(willDelete)
        // });
        swal(
          {

            title: "הוספת הערה",
            content: {
              element: "textarea",
              attributes: {
                // placeholder: "אני ממליצה........",
                // name: "recomandation",
                
                id: "recomandation",
                style: " height: 100px",
              },

            },

            buttons: ["ביטול", "אישור"],
          }
        ).then((value) => {
          this.calanderService.AddNote(value, event.meta.ScheduleId,event.meta.Date).subscribe();
          // console.log(event.meta.studentId);
        });
        // this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        swal({
          title: "האם לבטל את השיעור",
          icon: "warning",
          // dangerMode: true,
          buttons: ["ביטול", "אישור"],
        }).then(
          i => {
            if (i != null) {
              console.log(event.meta.ScheduleId);
              this.calanderService.deleteLesson(event.meta.ScheduleId).subscribe(res => this.calanderService.getLesson());
              this.events = this.events.filter((iEvent) => iEvent !== event);
              this.handleEvent('Deleted', event);
            }
          }
        );


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

  constructor(public dialog: MatDialog, private router: Router, private calanderService: CalanderService, private modal: NgbModal) {
    this.getLesson();
    console.log(this.events);
  }
  s: string;
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
        // console.log(events)
        this.activeDayIsOpen = true;
        // events.forEach(i => {
        //   console.log(this.s);
        //   this.s += "התלמידה: " + i.title+"\n"
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

    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
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

