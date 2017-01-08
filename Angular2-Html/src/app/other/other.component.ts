import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { OtherOtherService } from './other-other.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  providers: [OtherOtherService]
})
export class OtherComponent implements OnInit {

  movies: IMovie[];
  errorMessage: string;
  constructor( private _movieService: OtherOtherService) { 
    
  }

  ngOnInit() {
    this._movieService.getMovies()
            .subscribe(movies => this.movies = movies,
            error => this.errorMessage = <any>error);
  }

}
