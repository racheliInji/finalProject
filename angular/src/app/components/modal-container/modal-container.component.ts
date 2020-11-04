import { Component, OnInit } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {

  constructor(private modalService: NgbModal,public activeModal: NgbActiveModal) { }

  ngOnInit() {
    
  }

public user = {
name: 'Izzat Nadiri',
age: 26
}


openModal() {
const modalRef = this.modalService.open(ModalContentComponent);
modalRef.componentInstance.user = this.user;
modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
console.log(receivedEntry);
})

modalRef.result.then((result) => {
  if (result) {
  console.log(result);
  }
  });
}

}
