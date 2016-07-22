import { provideRouter } from '@angular/router';
import { RouterConfig }  from '@angular/router';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documentlist.component';
import { LoginComponent } from './users/login.component';
import { LoggedInGuard } from './guards/loggedin.guard';

export const routes:RouterConfig = [
  { path: '', component: DocumentsComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent}
];

export const APP_ROUTER_PROVIDERS = [
	LoggedInGuard,
	provideRouter(routes)
];