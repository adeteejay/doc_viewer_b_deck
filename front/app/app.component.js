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
// <iframe [src]="trustedUrl"></iframe>
var AppComponent = (function () {
    function AppComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.pdfs = ['/app/mockpdfs/algorithms.pdf', '/app/mockpdfs/algorithms1.pdf', '/app/mockpdfs/algorithms2.pdf', '/app/mockpdfs/algorithms3.pdf'];
        this.currentPdf = 0;
        this.page = 1;
        this.getBook();
    }
    AppComponent.prototype.getBook = function () {
        var current = this.currentPdf;
        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfs[current]);
        this.currentFileName = this.pdfs[current].match("[^\/]*$")[0];
    };
    AppComponent.prototype.onKey = function (event) {
        // console.log(event.keyCode);
        switch (event.keyCode) {
            // code...
            case 37:
                // left 
                if (this.currentPdf !== 0) {
                    this.currentPdf -= 1;
                    this.getBook();
                }
                else {
                    this.currentPdf = this.pdfs.length - 1;
                    this.getBook();
                }
                break;
            case 39:
                // right
                if (this.currentPdf < this.pdfs.length) {
                    this.currentPdf += 1;
                    this.getBook();
                }
                else {
                    this.currentPdf = 0;
                    this.getBook();
                }
                break;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n\n  \n\t<div (keyup)=\"onKey($event)\" class=\"overlay\">\n\t\t<div class=\"view\" (keyup)=\"onKey($event)\">\n\t\t\t<h2 class=\"title\">{{currentFileName}}</h2>\n\t\t\t<iframe class=\"file\" [src]=\"trustedUrl\"></iframe>\n\t\t\t<a (click)=\"onKey($event)\"><</a>\n\t\t</div>\n\t</div>\n\n\n\n\t<div class=\"wrapper\">\n\t  <form class=\"login\">\n\t    <p class=\"title\">Log in</p>\n\t    <input type=\"text\" placeholder=\"Username\" autofocus/>\n\t    <i class=\"fa fa-user\"></i>\n\t    <input type=\"password\" placeholder=\"Password\" />\n\t    <i class=\"fa fa-key\"></i>\n\t    <a href=\"#\">Forgot your password?</a>\n\t    <button>\n\t      <i class=\"spinner\"></i>\n\t      <span class=\"state\">Log in</span>\n\t    </button>\n\t  </form>\n</div>\n    ",
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map