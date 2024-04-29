import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from './service/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  title = 'rxjs-mat-MachineTest';
  isloading!:boolean
  private _coursesService = inject(CourseService)
}
