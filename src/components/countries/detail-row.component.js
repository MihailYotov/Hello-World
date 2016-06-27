import {Component} from 'angular2/core';
import {CapitalizePipe} from './capitalize.pipe';
import {StringifyObject} from './stringify-object.pipe.js';

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
            <td>{{detailKey | capitalize}} : </td>
            <td>{{detailVal | stringifyObject}}</td>
    `
})

export class DetailRow {
    constructor() {
        console.log(this.detailData);
    }

    ngOnInit() {
        this.detailData = this.detailData || {};
        console.log(this.detailData);
    }
}