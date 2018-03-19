import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
@Injectable()
export class HomePageService {
  apiUrl = 'https://us-central1-midtermselect.cloudfunctions.net/apiUrl/'

  constructor(
    private http: Http
  ) { }

 async getData() {
    const rs  =  await this.http.get(this.apiUrl + 'data').toPromise();
    return rs.json();
  }
}
