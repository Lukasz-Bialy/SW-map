import { Component, OnInit } from '@angular/core';
import {AgmMarker} from '@agm/core';
import {google} from '@agm/core/services/google-maps-types';
import {DataService} from '../data.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  latitude = 53.775711;
  longitude = 20.477980;
  zoom = 13;
  park_points: park_point[] = [];
  message: string;

  onChoseLocation(event) {
    //this.park_points.pop();
    this.park_points.push({
      lat: event.coords.lat,
      lng: event.coords.lng,
    });
  }
  onMarkerClick(event) {
    this.data.changeMessage(event.latitude.toString());
  }

  constructor(private data: DataService) { }

  ngOnInit() {
    this.park_points.push({
      lat: 53.775711,
      lng: 20.477980,
      name: 'Czwórka',
      city: 'Olsztyn',
      street: 'Wyszyńskiego 5G/4',
      size: 'medium',
      price: 'free',
      building: 'no',
      availability: '24/7',
    });
    this.data.currentMessage.subscribe(message => this.message = message);
  }
}

interface park_point {
  lat: number;
  lng: number;
  name?: string;
  gallery?: string;
  city?: string;
  street?: string;
  size?: string;
  price?: string;
  building?: string;
  availability?: string;
  equipment?: string;

}
