import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import { UserService } from './users/user.service';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	UserService,
	disableDeprecatedForms(),
	provideForms(),
	APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));