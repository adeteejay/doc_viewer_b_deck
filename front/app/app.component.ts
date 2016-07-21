import { Component } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser'
// <iframe [src]="trustedUrl"></iframe>
@Component({
    selector: 'app',
    template: `

  
	<div class="overlay"><iframe class="child" [src]="trustedUrl"></iframe></div>



	<div class="wrapper">
	  <form class="login">
	    <p class="title">Log in</p>
	    <input type="text" placeholder="Username" autofocus/>
	    <i class="fa fa-user"></i>
	    <input type="password" placeholder="Password" />
	    <i class="fa fa-key"></i>
	    <a href="#">Forgot your password?</a>
	    <button>
	      <i class="spinner"></i>
	      <span class="state">Log in</span>
	    </button>
	  </form>
</div>
    `,

})
export class AppComponent { 
	pdfSrc: string = '/app/mockpdfs/algorithms.pdf';
	trustedUrl:any;
	page: number = 1;
	constructor(public sanitizer: DomSanitizationService){
		this.trustedUrl = sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
	}
  }
