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
var router_1 = require('@angular/router');
var user_service_1 = require('../users/user.service');
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.credentials = {
            username: '',
            password: ''
        };
        this.error = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var credentials = JSON.stringify(this.credentials);
        this.userService.doLogin(credentials)
            .subscribe(function (data) { return _this.finishLogin(data); });
        // this.router.navigate(['/']);
    };
    LoginComponent.prototype.finishLogin = function (data) {
        console.log(data);
        if (data.success) {
            window.localStorage.setItem("token", data.token);
            this.userService.loggedIn = true;
            this.router.navigate(['/']);
        }
        else {
            // couldnt log you in
            this.error = true;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n\n\t<div class=\"wrapper\">\n\t  <form class=\"login\" (ngSubmit)=\"onSubmit()\" >\n\t    <p class=\"title\">Log in</p>\n\t    <p *ngIf=\"error\" class=\"error\">Wrong username and password combination</p>\n\t    <input type=\"text\" placeholder=\"Username\" [ngClass]=\"{'error': error }\" [(ngModel)]=\"credentials.username\" name=\"username\" autofocus />\n\t    <i class=\"fa fa-user\"></i>\n\t    <input type=\"password\" placeholder=\"Password\" [ngClass]=\"{'error': error }\" [(ngModel)]=\"credentials.password\" name=\"password\" />\n\t    <i class=\"fa fa-key\"></i>\n\t    <a href=\"#\">Forgot your password?</a>\n\t    <button type=\"submit\">\n\t      <i class=\"spinner\"></i>\n\t      <span class=\"state\">Log in</span>\n\t    </button>\n\t  </form>\n</div>\n    ",
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map