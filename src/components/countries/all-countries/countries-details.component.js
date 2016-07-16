import {Component} from 'angular2/core';

import {DetailRow} from './detail-row.component.js';
import {TransformKeysPipe} from './../pipes/transformKeys.pipe.js';

@Component({
    selector: 'country-details',
    inputs: [
        'details'
    ],
    pipes: [
        TransformKeysPipe
    ],
    template: `
        <div>
            <h1></h1>
           <div>
             <table>
             <tr *ngFor="#detailData of details | transformkeys">
                <detail-row
                [detailKey]="detailData.key"
                [detailVal]="detailData.val"
                ></detail-row>
             </tr>
             </table>
           </div>
        </div>
    `,
    directives: [DetailRow]
})

export class CountryDetails {
    constructor() {

    }

    ngOnInit() {

    }
}