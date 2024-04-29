import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICoursesRes, Icourse, Ilessons, IlessonsRes } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl:string=`${environment.baseUrl}/courses`
  constructor(
    private _http : HttpClient
  ) { }

  getAllCourses():Observable<Array<Icourse>>{
    return this._http.get<ICoursesRes>(this.courseUrl)
      .pipe(
        shareReplay(),
        map(res => res['payload'])
      );

  }
  updateCourse(course: Icourse): Observable<Icourse>{
    let updateUrl=`${this.courseUrl}/${course.id}`
    return this._http.put<Icourse>(updateUrl, course)
  }

  getcourse(courseId:string): Observable<Icourse>{
    let getCourrseUrl=`${this.courseUrl}/${courseId}`;
    return this._http.get<Icourse>(getCourrseUrl)
  }
  getAllLessons(courseId:string, pageSize:number=20, search='' ):Observable<Ilessons[]>{
    //let getCourseLessons=`${environment.baseUrl}/lessons?courseId=${courseId}&&pageSize=${pageSize}`;

    let getCourseLessons=`${environment.baseUrl}/lessons`;
     
    let params= new HttpParams()
                   .set("courseId" , courseId)
                   .set("pageSize", pageSize)
                   .set("filter", search)                   
    return this._http.get<IlessonsRes>(getCourseLessons, { params : params})
   .pipe(
    map((res:IlessonsRes)=>res['payload'])
   )
    
  }
}
