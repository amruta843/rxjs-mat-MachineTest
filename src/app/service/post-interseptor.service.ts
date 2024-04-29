import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, delay, finalize, takeUntil } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class PostInterseptorService implements HttpInterceptor {
 
  unsubscribeAll$: Subject<void>=new Subject<void>;

  constructor(
    private _loaderService:LoaderService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loaderService.loadingstate$.next(true)
    return next.handle(req)
    .pipe(
      delay(1000),
      takeUntil(this.unsubscribeAll$),
      finalize(()=>{
        this._loaderService.loadingstate$.next(false)
      })
    )
  }
  unsubscribeAll(){
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }
}
