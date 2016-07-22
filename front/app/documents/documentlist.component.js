"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var user_service_1 = require('../users/user.service');
var simple_service_1 = require('./simple.service');
var DocumentsComponent = (function () {
    function DocumentsComponent(sanitizer, userService, simpleService, router) {
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.simpleService = simpleService;
        this.router = router;
        this.pdfs = [];
        this.currentPdf = 0;
        this.overlayShown = false;
        // this.getBook();
    }
    DocumentsComponent.prototype.ngOnInit = function () {
        this.getFiles();
    };
    DocumentsComponent.prototype.getFiles = function () {
        var _this = this;
        this.simpleService.getFiles()
            .subscribe(function (data) { return _this.pdfs = data; });
    };
    DocumentsComponent.prototype.getBook = function () {
        var current = this.currentPdf;
        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfs[current].location);
    };
    DocumentsComponent.prototype.showFile = function (index) {
        console.log(index);
        this.currentPdf = index;
        this.currentFileName = this.pdfs[index].name;
        this.getBook();
        this.overlayShown = true;
    };
    DocumentsComponent.prototype.goLeft = function () {
        if (this.currentPdf === 0) {
            this.currentPdf = this.pdfs.length - 1;
            this.getBook();
        }
        else {
            this.currentPdf -= 1;
            this.getBook();
        }
        this.currentFileName = this.pdfs[this.currentPdf].name;
    };
    DocumentsComponent.prototype.goRight = function () {
        if (this.currentPdf < this.pdfs.length - 1) {
            this.currentPdf += 1;
            this.getBook();
        }
        else {
            console.log("hi");
            this.currentPdf = 0;
            this.getBook();
        }
        this.currentFileName = this.pdfs[this.currentPdf].name;
    };
    DocumentsComponent.prototype.onKey = function (event) {
        // console.log(event.keyCode);
        switch (event.keyCode) {
            // code...
            case 37:
                // left 
                this.goLeft();
                break;
            case 39:
                // right
                this.goRight();
                break;
        }
    };
    DocumentsComponent.prototype.hideOverlay = function () {
        this.overlayShown = false;
    };
    DocumentsComponent.prototype.logout = function () {
        this.userService.loggedIn = false;
        this.router.navigate(['/login']);
    };
    DocumentsComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/documents/documentlist.template.html',
            providers: [user_service_1.UserService, simple_service_1.SimpleService]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService, user_service_1.UserService, simple_service_1.SimpleService, router_1.Router])
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documentlist.component.js.map