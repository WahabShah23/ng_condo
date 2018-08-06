import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })
};

@Injectable()
export class SupportService {

  constructor(private http: HttpClient) { }

  // Uses http.get() to load data from a single API endpoint
  getIssues() {
    return this.http.get('http://sharjeelkhan.ca/crm/admin/api/index_get')
  }

  // Uses http.Post to load data
  createTicket(email, name, subject, message, priority) {

      return this.http.post('http://sharjeelkhan.ca/crm/admin/api/index_post', httpOptions); //body.toString(),
  }

}
