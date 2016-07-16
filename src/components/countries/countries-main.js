import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { AllCountries } from './all-countries/countries-all.component.js';
import { CompareCountries } from './compare-countries/compare-countries.component';

@Component({
    selector: 'countries-main',
    template: `
        <div class="home-view">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [
        ROUTER_DIRECTIVES,
        COMMON_DIRECTIVES
    ]
})

@RouteConfig([
    {
        path: '/',
        name: 'AllCountries',
        component: AllCountries,
        useAsDefault: true
    },
    {
        path: '/compare',
        name: 'CompareCountries',
        component: CompareCountries
    }
])

export class CountriesMain {
    constructor() {

    }
}