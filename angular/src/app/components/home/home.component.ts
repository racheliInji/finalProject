import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('header', { static: true }) header: ElementRef;
  @ViewChild('colorpicker', { static: true }) colorpicker: ElementRef;

  settheadercolor() {
    console.log("view");
    this.header.nativeElement.setAttribute('style', `color: ${this.colorpicker.nativeElement.value}`)
  }

}
