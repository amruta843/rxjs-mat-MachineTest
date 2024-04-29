import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';
import { Icourse } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {

  courseData !: Icourse;
  courseForm !: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private course: Icourse,
  private _courseService:CourseService
  ) {
    console.log(course);

    this.courseData = course;

    this.courseForm = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
     // releasedAt: [moment(course.releasedAt), Validators.required],
      longDescription: [course.longDescription, Validators.required]
    })
  }

  ngOnInit(): void {
    this.courseForm.valueChanges
    .pipe(
      filter(()=>{
        return this.courseForm.valid 
      }),
      switchMap(value=>{
         let courseObj={...value, id:this.courseData.id}
         return this._courseService.updateCourse(courseObj)
      }) )
    .subscribe(obj=>{
      console.log(obj);
      
    })
  }

  onCourseUpdate(){
    if(this.courseForm.valid){
      let obj = {...this.courseForm.value, id:this.courseData.id}
    console.log(obj);
  
  this._courseService.updateCourse(obj)
  .pipe()
  .subscribe(res=>{
  console.log( res);
  
})}
    
  }
}
