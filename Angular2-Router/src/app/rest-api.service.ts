import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RestResponse }  from './models/restresponse';
import {Observable} from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestApiService {

  constructor(private http: Http) { }


  getString() {
    return "Http Local string"
  }

  getHttpString() {
    return this.http.get('http://services.groupkt.com/country/get/iso2code/AU')
      .map((res:Response) => res.json());
  }
}
