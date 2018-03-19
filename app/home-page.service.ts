import { Injectable } from '@angular/core';
import { Observable as RxObservable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
@Injectable()
export class HomePageService {
  url = 'https://us-central1-midtermselect.cloudfunctions.net/apiUrl'

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    let headers = this.createRequestHeader();
    return this.http.get(this.url+'/data')
        .map(res =>  res);
}

  private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
        // "AuthKey": "my-key",
        // "AuthToken": "my-token",
        "Content-Type": "application/json",
     });

    return headers;
}

}
