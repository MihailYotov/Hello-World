import {Component} from 'angular2/core';

import {CompareTable} from './compare-table.component.js';
import {CompareCountriesData} from '../../../services/compare-countries'

@Component({
    selector: 'compare-countries',
    inputs: [],
    pipes: [],
    directives: [CompareTable],
    template: `
    
     <section class="country-table">
         <div class="ct-tr">
            <compare-table
           [item]="tableHeader"
           ></compare-table>
        </div>
        <div *ngFor="#item of compareItems" class="ct-tr">
           <compare-table
           [item]="item"
           >
           </compare-table>
        </div>
    </section>

    `
})

export class CompareCountries {
    constructor(CompareCountriesData:CompareCountriesData) {
        this.CompareData = CompareCountriesData;
        this.compareItems = this.CompareData.getData();
        this.tableHeader={
            name:'Name',
            area:'Area',
            population:'Population'
        };

    }

    ngOnInit() {
        this.compareItems = this.CompareData.getData();
    }
}