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
        this.pdfSrc = '/app/mockpdfs/algorithms.pdf';
        this.page = 1;
        this.trustedUrl = sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n\n  \n\t<div class=\"overlay\"><iframe class=\"child\" [src]=\"trustedUrl\"></iframe></div>\n\n\n\n\t<div class=\"wrapper\">\n\t  <form class=\"login\">\n\t    <p class=\"title\">Log in</p>\n\t    <input type=\"text\" placeholder=\"Username\" autofocus/>\n\t    <i class=\"fa fa-user\"></i>\n\t    <input type=\"password\" placeholder=\"Password\" />\n\t    <i class=\"fa fa-key\"></i>\n\t    <a href=\"#\">Forgot your password?</a>\n\t    <button>\n\t      <i class=\"spinner\"></i>\n\t      <span class=\"state\">Log in</span>\n\t    </button>\n\t  </form>\n</div>\n    ",
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map