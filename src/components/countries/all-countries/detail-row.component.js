import {Component} from 'angular2/core';

import {CapitalizePipe} from './../pipes/capitalize.pipe.js';
import {StringifyObject} from './../pipes/stringify-object.pipe.js';

@Component({
    selector: 'detail-row',
    inputs: [
        'detailKey',
        'detailVal'
    ],
    pipes: [
        CapitalizePipe,
        StringifyObject
    ],
    template: `
            <td class="td-key">{{detailKey | capitalize}} : </td>
            <td class="td-val">{{detailVal | stringifyObject}}</td>
    `
})

export class DetailRow {
    constructor() {
    }

    ngOnInit() {
    }
}