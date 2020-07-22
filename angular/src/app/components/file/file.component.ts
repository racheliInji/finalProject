import { Component, OnInit,Input } from '@angular/core';
import { HttpClient ,HttpEventType} from '@angular/common/http';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
public nameFile:string;
  constructor(private teacherService :TeacherService, private Http :HttpClient) { }
  selectedfile:File=null;
  Url = 'http://localhost:59802/Teacher'
  ngOnInit() {
  }
  
  selectFile(event)
  {
   console.log(event);
   this.selectedfile =<File>event.target.files[0];
   console.log(this.selectedfile);
   const fd = new FormData();
       fd.append('file',this.selectedfile,this.selectedfile.name);
       this.nameFile=this.selectedfile.name;
       this.teacherService.addfile(fd,this.selectedfile.name).subscribe(res=>{console.log(res),alert(res)});

       console.log(fd);
  }
  // upload(){
  //      const fd = new FormData();
  //      fd.append('file',this.selectedfile,this.selectedfile.name);
  //      this.nameFile=this.selectedfile.name;
  //      this.teacherService.addfile(fd,this.selectedfile.name).subscribe(res=>{console.log(res),alert(res)});

  //      console.log(fd);
       
  // }
}
