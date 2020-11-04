import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})

export class ModalContentComponent implements OnInit {
// @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }
@Input() public user;
@Output() passEntry: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    console.log(this.user);
  }
passBack() {
this.activeModal.close(this.user);
}
}
