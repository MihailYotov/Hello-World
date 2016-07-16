import {Component} from 'angular2/core';

@Component({
    selector: 'compare-table',
    inputs: [
        'item'
    ],
    template: `
            <div class="country-table">
                <span class="ct-td">{{item?.name}}</span>
                <span class="ct-td">{{item?.area}}</span>
                <span class="ct-td">{{item?.population}}</span>
            </div>
    `
})

export class CompareTable {
    constructor() {

    }

    ngOnInit() {
        this.item = this.item || {}
    }
}