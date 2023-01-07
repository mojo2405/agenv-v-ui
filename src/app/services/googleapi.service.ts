import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
export class GoogleApiService {
    configUrl = 'http://'+window.location.hostname+':3000/';
    constructor(private http: HttpClient) { 
        console.log(window.location.hostname);
    }
  
    getData(apiInputType: string) {
        return this.http.get(this.configUrl + '?datatype=' + apiInputType);
    }
}