import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenApiModel } from '../models/token-api.model';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.auth.getToken();

    if(myToken){
      request = request.clone({
        setHeaders: {
          Authorization:'bearer ' + myToken
        }
      })
    }
    return next.handle(request).pipe(
      catchError((err:any) => {
        if(err instanceof HttpErrorResponse) {
            if(err.status === 401) {
              return this.handleUnauthorizedError(request, next);
            }
        }
        return throwError(() => Error("An error occurred while processing your request!"));
      })
    );
  }

  handleUnauthorizedError(req: HttpRequest<any>, next: HttpHandler){
     let tokenApiModel = new TokenApiModel();
     tokenApiModel.AccessToken = this.auth.getToken()!;
     tokenApiModel.RefreshToken = this.auth.getRefreshToken()!;
     return this.auth.renewToken(tokenApiModel)
     .pipe(
      switchMap((data:TokenApiModel) => {
        this.auth.storeRefreshToken(data.RefreshToken);
        this.auth.storeToken(data.AccessToken);
        req = req.clone({
          setHeaders: {
            Authorization:'bearer ' + data.AccessToken
          }
        })
        return next.handle(req);
      }),
      catchError((err)=> {
        return throwError(()=> {
          this.router.navigate(['login']);
        }) 
      })
     )
  }
}
