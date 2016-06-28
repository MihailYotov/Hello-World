import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { Navigation } from '../components/navigation/navigation.component';
import { HomeView } from '../components/home-view/home-view.component.js';
import { AllCountries } from '../components/countries/countries-all.component';
import { CompareCountries } from '../components/compare-countries/compare-countries.component';

@Component({
    selector: 'my-app',
    template: `
        <navigation></navigation>
        <router-outlet></router-outlet>
    `,
    directives: [
        ROUTER_DIRECTIVES,
        Navigation
    ]
})

@RouteConfig([
    {
        path: '/',
        name: 'Main',
        component: HomeView,
        useAsDefault: true
    },
    {
        path: '/countries',
        name: 'AllCountries',
        component: AllCountries
    },
    {
        path: '/compare',
        name: 'Compare',
        component: CompareCountries
    }
])

export class MyApp {

    constructor() {
        console.log('my-app Loaded');
    }
}