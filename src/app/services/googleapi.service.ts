import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
export class GoogleApiService {
    // configUrl = 'http://localhost:3000/';
    configUrl = 'https://agent-v-backend.myapp.co.il/';
    constructor(private http: HttpClient) { 
        console.log(window.location.hostname);
    }
  
    getData(apiInputType: string) {
        return this.http.get(this.configUrl + '?datatype=' + apiInputType);
    }
}