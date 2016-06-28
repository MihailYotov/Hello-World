import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CompareCountries} from '../compare-countries/compare-countries.component';

@Component({
    selector: 'compare-list',
    inputs: [
        'compareItems'
    ],
    pipes: [],
    directives: [
        ROUTER_DIRECTIVES
    ],
    template: `
    <h1>Compare</h1>
            <ul>
            <li><a href="/compare" [routerLink]="['Compare', {compareItems: compareItems}]">Compare</a></li>
                <li *ngFor="#item of compareItems">{{item.name}}</li>
            </ul>
    `
})

@RouteConfig([
    {
        path: '/compare',
        name: 'Compare',
        component: CompareCountries
    }

])

export class CompareList {
    constructor() {
    }

    ngOnInit() {
        this.compareItems = this.compareItems || [];
    }
}