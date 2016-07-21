import { Component } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser'
// <iframe [src]="trustedUrl"></iframe>
@Component({
    selector: 'app',
    template: `

  
	<div (keyup)="onKey($event)" class="overlay">
		<div class="view" (keyup)="onKey($event)">
			<h2 class="title">{{currentFileName}}</h2>
			<iframe class="file" [src]="trustedUrl"></iframe>
			<a (click)="onKey($event)"><</a>
		</div>
	</div>



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
	pdfs: string[] = ['/app/mockpdfs/algorithms.pdf','/app/mockpdfs/algorithms1.pdf','/app/mockpdfs/algorithms2.pdf','/app/mockpdfs/algorithms3.pdf']
	currentFileName: string;
	trustedUrl: any;
	currentPdf: number = 0;
	page: number = 1;

	constructor(public sanitizer: DomSanitizationService){
		this.getBook();
	}

	getBook(){
		let current = this.currentPdf;
		this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfs[current]);
		this.currentFileName = this.pdfs[current].match("[^\/]*$")[0];
	}


	onKey(event: KeyboardEvent){
		// console.log(event.keyCode);
		switch(event.keyCode) {
			// code...
			case 37:
			// left 
			if(this.currentPdf !== 0) {
				this.currentPdf -=1;
				this.getBook();
			} else {
				this.currentPdf = this.pdfs.length - 1;
				this.getBook();
			}
			break;
			case 39:
			// right
			if(this.currentPdf < this.pdfs.length) {
				this.currentPdf += 1;
				this.getBook();
			} else {
				this.currentPdf = 0;
				this.getBook();
			}
			break;
		}
	}
  }
