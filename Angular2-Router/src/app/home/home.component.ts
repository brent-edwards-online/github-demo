import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { RestResponse } from '../models/restresponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RestApiService]
})
export class HomeComponent implements OnInit {
  result = [];
  r: RestResponse;

  constructor( private restService: RestApiService) { }

  ngOnInit() {
    //this.result = this.restService.getString(); 

    this.restService.getHttpString()
      .subscribe(
        data => this.result = data
      );   

    console.log(JSON.stringify(this.result));
  }
}
