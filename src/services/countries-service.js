import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs'

import data from './data.json';

@Injectable()
export class HttpService {
    constructor(http: Http){
        this._http = http;
        //this.url = 'https://restcountries.eu/rest/v1/all'; // Alternative URL;
        this.url = './data.json';
    }

    getData(){
        return new Promise((resolve, reject) =>{
            this._http.get(`${this.url}`)
                .map(data => data.json())
                .subscribe(
                    data => {
                        if(data){
                            resolve(data)
                        } else {
                            reject({message: 'No Data'})
                        }

                    },
                    error => {
                        reject({message: error})
                    }
                )
        })
    }
}