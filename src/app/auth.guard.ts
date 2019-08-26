import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './access/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService ) {}
  
  canActivate(): boolean {
    return this.auth.authenticated()
  }
}
