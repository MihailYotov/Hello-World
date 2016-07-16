import {Component} from 'angular2/core';

@Component({
    selector: 'compare-list',
    inputs: [
        'compareItems'
    ],
    pipes: [],
    directives: [
    ],
    template: `
    <h1>Compare</h1>
            <ul>
                <li><a href="/#/countries/compare">Compare</a></li>
                <li *ngFor="#item of compareItems">{{item.name}}</li>
            </ul>
    `
})

export class CompareList {
    constructor() {

    }

    ngOnInit() {
        this.compareItems = this.compareItems || [];
    }
}