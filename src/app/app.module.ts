import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseDialogComponent } from './component/course-dialog/course-dialog.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material/material.module';
import { PostInterseptorService } from './service/post-interseptor.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CourseListComponent,
    CourseDialogComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:PostInterseptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
