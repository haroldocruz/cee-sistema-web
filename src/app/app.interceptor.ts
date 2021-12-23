import { Injectable, NgModule } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { UtilService } from './services/util.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let error: HttpErrorResponse;
    
    // const secureReq = request.clone({
    //   url: request.url.replace('http://', 'https://')
    // });

    return next.handle(request).pipe(
      tap(event => { }, event => error = event instanceof HttpErrorResponse ? event : null),
      finalize(() => { error ? UtilService.notifying.showError("Não foi possível conectar ao servidor", `${error.statusText}`) : undefined })
    );
  }
}

@NgModule({
  providers: [{
     provide: HTTP_INTERCEPTORS,
     useClass: AppInterceptor,
     multi: true,
  }]
})
export class Interceptor { }