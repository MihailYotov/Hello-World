import { Injectable } from 'angular2/core';

@Injectable()
export class CompareCountriesData {
    constructor() {
        //this.initData = {
        //    "name": "init",
        //    "population": 26023100,
        //    "area": 652230
        //};
        this.countriesData = [];
    }

    getData() {
        return this.countriesData;
    }

    saveData(item) {
        this.countriesData.push(item);
    }
}