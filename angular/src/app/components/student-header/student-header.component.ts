import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.scss']
})
export class StudentHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.links = ['יציאה','לוח שנה לתלמידה', 'חיפוש', 'עדכון פרופיל'];
    }
    else {
      this.links = ['רישום',  'לוח שנה לתלמידה', 'חיפוש', 'עדכון פרופיל'];
    }
  }
  links = [];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

}
