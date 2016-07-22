import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';

import { UserService } from '../users/user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
	userService: UserService;
	constructor(userService: UserService, private router: Router) { 
		this.userService = userService
	}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isLoggedIn()) { return true; }

    // this.userService.redirectUrl = state.url;
	
	console.log('AuthGuard#canActivate called');
    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}