import {Component} from 'angular2/core';

@Component({
    selector: 'compare-table',
    inputs: [
        'item'
    ],
    template: `
            <td>{{item?.name}}</td>
            <td>{{item?.capital}}</td>
            <td>{{item?.population}}</td>
    `
})

export class CompareTable {
    constructor() {

    }

    ngOnInit() {
        this.item = this.item || {}
    }
}