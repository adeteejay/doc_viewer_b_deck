import { Component } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser'
import { Router }    from '@angular/router';

import { UserService } from '../users/user.service';


@Component({
    selector: 'app',
    template: `

	<div class="wrapper">
	  <form class="login" (ngSubmit)="onSubmit()" >
	    <p class="title">Log in</p>
	    <p *ngIf="error" class="error">Wrong username and password combination</p>
	    <input type="text" placeholder="Username" [ngClass]="{'error': error }" [(ngModel)]="credentials.username" name="username" autofocus />
	    <i class="fa fa-user"></i>
	    <input type="password" placeholder="Password" [ngClass]="{'error': error }" [(ngModel)]="credentials.password" name="password" />
	    <i class="fa fa-key"></i>
	    <a href="#">Forgot your password?</a>
	    <button type="submit">
	      <i class="spinner"></i>
	      <span class="state">Log in</span>
	    </button>
	  </form>
</div>
    `,

})

export class LoginComponent { 
	private credentials = {
		username: '',
		password: ''
	}
	private error:boolean = false;

	constructor(public userService: UserService, private router: Router) { 
	}

	onSubmit() {
		let credentials = JSON.stringify(this.credentials)
		this.userService.doLogin(credentials)
		.subscribe(
			data => this.finishLogin(data)
		)
		// this.router.navigate(['/']);
	}
	finishLogin(data:any){
		console.log(data)
		if(data.success) {
			window.localStorage.setItem("token", data.token);
			this.userService.loggedIn = true;
			this.router.navigate(['/']);
		} else {
			// couldnt log you in
			this.error = true;
		}
	}
}