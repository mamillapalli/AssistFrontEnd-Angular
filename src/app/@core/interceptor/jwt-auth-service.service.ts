import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthServiceService {

  constructor() {

    console.log(`in jwt auth service`);
   }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    console.log('http call being intercepted');
    const Token = sessionStorage.getItem('Token');
    console.log(`token value is ${sessionStorage.getItem('Token')}`);
    if ( Token !== null) {
      console.log(`cloning request with header`);
      request = request.clone({
        
        setHeaders : {
          Authorization : Token
        }
      });
      console.log(`request cloned with header`);
    }
    // console.log(request.headers.getAll);
    return next.handle(request);
  }
}
