import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-recommandation',
  templateUrl: './recommandation.component.html',
  styleUrls: ['./recommandation.component.scss']
})
export class RecommandationComponent implements OnInit {

  FeedbackList: any;
  teacher: any;
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private TeacherService: TeacherService) { }

  teacherId: number;
  ngOnInit() {
    this.activatedRoute.params.subscribe(param => this.teacherId = param['teacherId']);
    console.log(this.teacherId);

    this.TeacherService.getRecrecommendation(this.teacherId).subscribe(res => { console.log(res); this.FeedbackList = res });
    this.TeacherService.getTeacherAndSubjectById(this.teacherId).subscribe(res => { console.log(res); this.teacher = res });
  }
  check(Feedback) {
    // debugger;
    // console.log(Feedback.RecommendationContents);
    if (Feedback.RecommendationContents =='null'|| Feedback.RecommendationContents==' ') { 
      console.log(Feedback.RecommendationContents); 
       return false;
     }
    return true;
  }

  close(){
    this.router.navigate(['/search'])

  }

}
