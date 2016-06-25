import { provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { MyApp } from './app/app.component';
import { HttpService } from './services/countries-service';

bootstrap(MyApp, [
    HttpService,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {
        useClass: HashLocationStrategy
    })
]).catch(err => console.error(err));