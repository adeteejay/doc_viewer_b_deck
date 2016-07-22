"use strict";
var router_1 = require('@angular/router');
var documentlist_component_1 = require('./documents/documentlist.component');
var login_component_1 = require('./users/login.component');
var loggedin_guard_1 = require('./guards/loggedin.guard');
exports.routes = [
    { path: '', component: documentlist_component_1.DocumentsComponent, canActivate: [loggedin_guard_1.LoggedInGuard] },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    loggedin_guard_1.LoggedInGuard,
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map