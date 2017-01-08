import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css'],
  providers: [MyserviceService]
})
export class MycomponentComponent implements OnInit {

  data = [];

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.myservice.getData()
    .subscribe(d => this.data = d)
  }

}
