import { Component } from 'angular2/core';
import { HTTP_PROVIDERS} from 'angular2/http';

import { HttpService } from '../../services/countries-service'
import { CountryDetails } from './countries-details.component'

@Component({
    selector: 'all-countries',
    template: `
        <div class="home-view">
            <h1>All Countries</h1>

            <div class="all-countries">
                <div *ngFor="#data of httpData" >
                    <span>{{data?.name}}</span>
                </div>
            </div>

            <div class="country-details">
                <country-details></country-details>
            </div>

        </div>
    `,
    providers: [HTTP_PROVIDERS],
    directives:[CountryDetails]
})

export class AllCountries {
    constructor(httpService:HttpService) {
        this._httpService = httpService;
        this.httpData = [];

        this._httpService.getData()
            .then(data => {
                this.httpData = data;
            }, error => {
                console.warn(error.message)
            })

    }
}