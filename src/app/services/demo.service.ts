import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class DemoService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getData() {
       //  return this.http.get('https://address-book-demo.herokuapp.com/api/contacts');
        return this.http.get('http://www.sharjeelkhan.ca/veaseapp/vease-app/api/get-user');
       // return this.http.get('https://www.sharjeelkhan.ca/veaseapp/vease-app/api/login');
    }

    // Uses http.Post to load data
    postData() {
        let body = new URLSearchParams();
        body.set('email', 'quellx@test.com');
        body.set('password', '123');

        return this.http.post('http://www.sharjeelkhan.ca/veaseapp/vease-app/api/login', body.toString(), httpOptions);
    }

}
