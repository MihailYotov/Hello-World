import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {CompareTable} from './compare-table.component';

@Component({
    selector: 'compare-countries',
    inputs: [],
    pipes: [],
    directives: [CompareTable],
    template: `
    
     <table class="country-table">
         <tr>
            <td>Name</td>
            <td>Capital</td>
            <td>Population</td>
        </tr>
        <tr *ngFor="#item of compareItems">
            <compare-table
            [item]="item"
            ></compare-table>
        </tr>
    </table>
        
    
    `
})

export class CompareCountries {
    constructor(params:RouteParams) {
        this.compareItems = params.get('compareItems');
    }

    ngOnInit() {
    }
}