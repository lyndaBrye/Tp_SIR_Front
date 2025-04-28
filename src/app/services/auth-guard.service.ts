import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    //const userType = sessionStorage.getItem('userType');
    if (this.loginService.isLoggedIn()) {  // Tu dois avoir une fonction isLoggedIn dans ton UserService
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
