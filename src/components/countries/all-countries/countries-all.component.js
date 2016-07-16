import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {COMMON_DIRECTIVES} from 'angular2/common';

import {HttpService} from '../../../services/countries-service'
import {CountryDetails} from './countries-details.component.js'
import {CompareList} from './compare-list.component.js'
import {AlphabetNavigation} from './alphabet-navigation'
import {LetterPipe} from './../pipes/lettet-sort.pipe.js'
import {CompareCountriesData} from '../../../services/compare-countries'

@Component({
    selector: 'all-countries',
    template: `
        <div class="home-view">
        
            <alphabet-navigation
            (letterChanged)="chosenletter = $event"
            ></alphabet-navigation>

            <div class="all-countries">
                <h1>All Countries</h1>
                <div *ngFor="#data of httpData | letter: chosenletter" >
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
    providers: [
        HTTP_PROVIDERS
    ],
    directives: [
        AlphabetNavigation,
        CompareList,
        CountryDetails,
        COMMON_DIRECTIVES
    ],
    pipes: [
        LetterPipe
    ]
})

export class AllCountries {
    constructor(httpService:HttpService, compareData:CompareCountriesData) {
        this._httpService = httpService;
        this.httpData = [];
        this.details = this.details || {};
        this.compareItems = this.compareItems || [];
        this.chosenletter = this.chosenletter || '';
        this._compareData = compareData;


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
            this._compareData.saveData(data);
        }
    }
}