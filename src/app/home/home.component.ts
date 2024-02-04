import { Component, OnInit, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly baseUrl = 'https://afrogeekacademy.com/assets/learn/img/';
  
  housingLocationList: HousingLocation[] = [];

  constructor(public housingService: HousingService){

  }


 
    ngOnInit(): void {
        this.housingLocationList = this.housingService.getAllHousingLocations();
    }

}
