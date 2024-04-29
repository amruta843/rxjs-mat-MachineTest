import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Icourse } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
courseList!:Array<Icourse>
courseList$!:Observable<Array<Icourse>>
beginnerCourses$!:Observable< Array<Icourse>>
advancedCourses$!:Observable< Array<Icourse>>

beginnerCourses!: Array<Icourse>
advancedCourses!:Array<Icourse>
  constructor(
    private _coursesService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseList$=this._coursesService.getAllCourses()
    this.beginnerCourses$=this.courseList$
    .pipe(
      map((courses: Array<Icourse>)=>{
        return courses.filter(course=> course.category=== "BEGINNER")
      })
    )
    
    this.advancedCourses$=this.courseList$
    .pipe(
      map((courses: Array<Icourse>)=>{
        return courses.filter(course=> course.category==="ADVANCED")
      })
    )
    

  }

}
