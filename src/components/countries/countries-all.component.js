import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {COMMON_DIRECTIVES} from 'angular2/common';

import {HttpService} from '../../services/countries-service'
import {CountryDetails} from './countries-details.component'
import {CompareList} from './compare-list.component'

@Component({
    selector: 'all-countries',
    template: `
        <div class="home-view">
            <div class="all-countries">
                <h1>All Countries</h1>
                <div *ngFor="#data of httpData" >
                    <span class="country-item" (click)="passDetails(data)">{{data?.name}}</span>
                    <i class="fa fa-check-square-o compare-ico" aria-hidden="true" (click)="addItemToCompareList(data)"></i>
                </div>
            </div>

            <div class="country-details">
                <country-details
                [details]="details"
                ></country-details>
            </div>

            <div *ngIf="compareItems.length" class="float-right">
                <compare-list
                [(compareItems)]="compareItems"
                ></compare-list>
            </div>

        </div>
    `,
    providers: [HTTP_PROVIDERS],
    directives: [
        CompareList,
        CountryDetails,
        COMMON_DIRECTIVES
    ]
})

export class AllCountries {
    constructor(httpService:HttpService) {
        this._httpService = httpService;
        this.httpData = [];
        this.details = this.details || {};
        this.compareItems = this.compareItems || [];

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

    addItemToCompareList(data) {
        let hasIt = false;
        for (const item of this.compareItems) {
            if (item == data) {
                hasIt = true;
                break
            }
        }

        if (!hasIt) {
            this.compareItems.push(data);
        }
    }
}