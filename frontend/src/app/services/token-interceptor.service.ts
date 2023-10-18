import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  constructor(private _authService: AuthService) {}

  intercept(req: any, next: any) {
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._authService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
