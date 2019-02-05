import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss']
})
export class LocationInfoComponent implements OnInit {

  nazwa: string;
  message: string;
  div = document.getElementsByClassName('description_value');
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.div[0].textContent = message);
  }


  Kliknij(){
    console.log(this.message);
    console.log(this.div[0]);
 }
}
