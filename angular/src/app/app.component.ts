import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectApp';
  newUser() {
    if (localStorage.getItem("token")) {
      return false;
    }
    return true
  }

  isTeacher() {
    if (this.newUser() == false) {
      // debugger;
      if (localStorage.getItem("token")[0] == '0') {
        // console.log("teacher");
        return true;
      }
    }
    return false;
  }
  isStudent() {
    if (this.newUser() == false) {
      if (localStorage.getItem("token")[0] == '1') {
        // console.log("student");
        return true;
      }
    }
    return false;
  }


}

