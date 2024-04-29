import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { Icourse, Ilessons } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courseID!: string;
  courseObj!:Icourse;
  courseObj$!: Observable<Icourse>
  lessons$!: Observable<Ilessons[]>


  constructor(
    private route:ActivatedRoute,
    private _courseService:CourseService
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    
    this.courseID=this.route.snapshot.params['courseId'];
  
    this.courseObj$ = this._courseService.getcourse(this.courseID)

    this.lessons$=this._courseService.getAllLessons(this.courseID)
}
onSearch(eve : HTMLInputElement){
  let val= eve.value;
  console.log(val)
  let searchval$=of(val)
  this.lessons$= searchval$
  .pipe(
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(str=>this._courseService.getAllLessons(this.courseID,20,val))
  )
//this.lessons$=this._courseService.getAllLessons(this.courseID,20,val)
}
}
