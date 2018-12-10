import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk4YTMzMjczYWYzYTM0MDI4NDI5NjI5Zjc1ZjAyYWI3NzgyNGViNjQ4MTBmNjk3OWNhMDNlZjc0OWJkZDFmYzE3MmU1NDAwMGViZWI0MmJhIn0.eyJhdWQiOiIxIiwianRpIjoiOThhMzMyNzNhZjNhMzQwMjg0Mjk2MjlmNzVmMDJhYjc3ODI0ZWI2NDgxMGY2OTc5Y2EwM2VmNzQ5YmRkMWZjMTcyZTU0MDAwZWJlYjQyYmEiLCJpYXQiOjE1MzkyMzE3NjYsIm5iZiI6MTUzOTIzMTc2NiwiZXhwIjoxNTcwNzY3NzY2LCJzdWIiOiIxOTQiLCJzY29wZXMiOltdfQ.OxkxDpaw-Wiw3W5cjWJJS7T3h6Pn1Po9B6iH841fE9L4OZrFhcBw9d1yPAMHZ7rSJFe24X8AhAr5CTxDtQFID-vdJVjbw8XoY6uVrETamn-E1hyOqVOVzqEbz8g2DjMfvM9kFcsyx1OsJKln6vGJX9VjvHLavQ2xDrCf1U9UXKsJHAjOf_xSuCG9YP5dGXsD7WX4Ki11zIrNWjg2rMLa1QzXdGCO7gVX8a15DAjJLr6JbeAYzqCpwrQNELampnYdTVKHN620n9CCtk0En2dU_7y3CPyPrOC1AuLoL4iliU3_vbw98fgNsJF2drC8NR4G2BRIfSOuSuSHoWakXviNj2q5wgJ97kFgWdX6zJ3LvLsV9GaaEZB2aTWcdXV9dLwO1_a3jVpnuHsU_htT_RWF-D_aMbnY0wUCIOPfm6rIm98yYs1HGiQnjH3PWmi7F_MZ96h-Fdqg-9so1_6MLHuQwWR4MXn3_GBTnzKhg5mL2XR3G_u4Cvg-BaGouE6or3khSfDgE9YnIYeSHEF86E6e1n_eyvXcD3OCi8NT9_Bj9t3v92y3vVcRZmV0IG4cBewg05Kglv48fwqowZskJZqZYHCaVneuHCB7ksEzx1dJg8a4Yt7uzJSWjhH_HbGDxc8EScGv207QlqB0eHf2Ini9-7x-G5QbLCoY09oTODU8Haw'
    })
};

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data from a single API endpoint
    getData() {
        //  return this.http.get('https://address-book-demo.herokuapp.com/api/contacts');
        return this.http.get('http://www.sharjeelkhan.ca/veaseapp/vease-app/api/get-user');
        // return this.http.get('https://www.sharjeelkhan.ca/veaseapp/vease-app/api/login');
    }

    // uploadFile(file, fileName) {
    //     const fd = new FormData();
    //     fd.append('service_id', '123id');
    //     fd.append('images',file,fileName );
    //     return this.http.post('http://sharjeelkhan.ca/vease/vease-app/api/v1/assign-images', fd, httpOptions);
    // }

    uploadFile(file, fileName) {
        const fd = new FormData();
        fd.append('image', file, fileName);
        // let test = "20";
        return this.http.post('https://testingfirebase-e082c.firebaseio.com/data2.json', fd);
    }




    // Uses http.Post to load data
    postData() {
        let body = new URLSearchParams();
        body.set('email', 'quellx@test.com');
        body.set('password', '123');

        return this.http.post('http://www.sharjeelkhan.ca/veaseapp/vease-app/api/login', body.toString(), httpOptions);
    }

}
