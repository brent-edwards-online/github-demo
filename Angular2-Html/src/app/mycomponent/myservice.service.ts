import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import  'rxjs/Rx';

@Injectable()
export class MyserviceService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('./data/data.json')
    .map((res:Response) => res.json())
  }
}
