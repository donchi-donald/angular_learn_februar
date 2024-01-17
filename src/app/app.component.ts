import { Component } from '@angular/core';

export type EnterpriseEnum = 'AFROGEEK' | 'AFROGEEK_ACADEMY' | 'AFROGEEK_LINGUISTICS' | 'AFROGEEK_STUDIOS' | 'AFROGEEK_TECH_SOLUTIONS' | 'AFROGEEK_EV' | 'AFROGEEK_EVENTS' | 'AFROGEEK_CONSULTANCY' | 'AFROGEEK_VENTURES' | 'AFROGEEK_COMMUNITY_HUB' | 'AFROGEEK_RETAIL' | 'AFROGEEK_PUBLICATIONS' | 'AFROGEEK_USER';

enum Colors {
  Red, Green, Blue
}

interface Student{
  id: number,
  name: string | number,
  grade: number
}
const PI: number = 3.14;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'geekHouse';
 
  constructor(){

  }
}

