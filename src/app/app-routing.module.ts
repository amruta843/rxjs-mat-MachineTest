import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';

const routes: Routes = [
  {
    path :"",
    component :HomeComponent
    },
    {
    path :"about",
    component :AboutComponent
     },
     {
      path :"courses/:courseId",
      component : CourseDetailsComponent
       }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
