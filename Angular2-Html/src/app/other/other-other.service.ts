import { Injectable } from '@angular/core';
import { IMovie } from './movie';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class OtherOtherService {
  private movieUrl = './data/movies.json';

  constructor(private http: Http) { }

  getMovies(): Observable<IMovie[]> {
        return this.http.get(this.movieUrl)
            .map((response: Response) => <IMovie[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
