import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {COMMON_DIRECTIVES} from 'angular2/common';

import {HttpService} from '../../services/countries-service'
import {CountryDetails} from './countries-details.component'

@Component({
    selector: 'all-countries',
    template: `
        <div class="home-view">
            <h1>All Countries</h1>

            <div class="all-countries">
                <div *ngFor="#data of httpData" >
                    <a (click)="passDetails(data)">{{data?.name}}</a>
                </div>
            </div>

            <div class="country-details">
                <country-details
                [details]="details"
                ></country-details>
            </div>

        </div>
    `,
    providers: [HTTP_PROVIDERS],
    directives: [
        CountryDetails,
        COMMON_DIRECTIVES
    ]
})

export class AllCountries {
    constructor(httpService:HttpService) {
        this._httpService = httpService;
        this.httpData = [];
        this.details = this.details || {};

        this._httpService.getData()
            .then(data => {
                this.httpData = data;
            }, error => {
                console.warn(error.message)
            })
    }

    passDetails(data) {
        this.details = data;
    }
}