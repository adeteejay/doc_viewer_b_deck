import { Component, Input } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';
import { Router }    from '@angular/router';

import { UserService } from '../users/user.service';
import { SimpleService } from './simple.service';

@Component({
    selector: 'app',
    templateUrl: 'app/documents/documentlist.template.html',
    providers: [UserService, SimpleService]
})

export class DocumentsComponent { 

	ngOnInit(){
		this.getFiles();
	}

	getFiles(){
		this.simpleService.getFiles()
		.subscribe(
			data => this.pdfs = data
		)
	}

	pdfs: any = []
	currentFileName: string;
	trustedUrl: any;
	currentPdf: number = 0;
	overlayShown: boolean = false;

	constructor(public sanitizer: DomSanitizationService, public userService:UserService, private simpleService:SimpleService, private router: Router){
		// this.getBook();
	}

	getBook(){
		let current = this.currentPdf;
		this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfs[current].location);
	}

	showFile(index:number){
		console.log(index);
		this.currentPdf = index;
		this.currentFileName = this.pdfs[index].name;
		this.getBook();
		this.overlayShown = true;
	}

	goLeft(){

		if(this.currentPdf === 0) {
			this.currentPdf = this.pdfs.length - 1;
			this.getBook();
		} else {
			this.currentPdf -=1;
			this.getBook();
		}
		this.currentFileName = this.pdfs[this.currentPdf].name;
	}

	goRight(){
		
		if(this.currentPdf < this.pdfs.length - 1) {
			this.currentPdf += 1;
			this.getBook();
		} else {
			console.log("hi");
			this.currentPdf = 0;
			this.getBook();
		}
		this.currentFileName = this.pdfs[this.currentPdf].name;
	}


	onKey(event: KeyboardEvent){
		// console.log(event.keyCode);
		switch(event.keyCode) {
			// code...
			case 37:
			// left 
			this.goLeft();
			break;
			case 39:
			// right
			this.goRight()
			break;
		}
	}
	hideOverlay(){
		this.overlayShown = false;
	}
	logout(){
		this.userService.loggedIn = false;
		this.router.navigate(['/login']);
	}
}