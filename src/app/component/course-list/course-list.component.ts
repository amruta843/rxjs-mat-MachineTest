import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Icourse } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  @Input() courseArr!:Array<Icourse> | null;
  constructor(
    private _matDialog: MatDialog
    
  ) { }

  ngOnInit(): void {

  }
  onEdit(course:Icourse){

    console.log(course);
    const dialogConfig= new MatDialogConfig();
    dialogConfig.data=course;
    dialogConfig.disableClose=true;
    dialogConfig.width='600px';
    dialogConfig.autoFocus=true;
  
    const dialogRef= this._matDialog.open(CourseDialogComponent, dialogConfig)
  }
  
}
