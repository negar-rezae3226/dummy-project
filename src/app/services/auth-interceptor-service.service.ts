import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './LocalStorage.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorServiceService implements HttpInterceptor {

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.localStorage.getItem('token');
    let token: string = this.localStorage.getValueInLocalStorage;

    if (token) {

      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });

    }
    else {

      this.router.navigate(['/login'])
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login'])
          }
        }
        return throwError(err);
      })
    )
  }
}
