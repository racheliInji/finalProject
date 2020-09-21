import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-teacher-header',
  templateUrl: './teacher-header.component.html',
  styleUrls: ['./teacher-header.component.scss']
})
export class TeacherHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.links = ['יציאה', 'לוח שנה', 'לוח שעות', 'פרופיל'];
    }
    else {
      this.links = ['רישום', 'לוח שנה', 'לוח שעות', 'פרופיל'];

    }
  }

  links = [];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }
}
