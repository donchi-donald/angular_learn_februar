import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input()
  title:string = 'home works!';

  @Output()
  changeTitle = new EventEmitter<string>();

  changeTitleClick(){
    this.changeTitle.emit('home changed');
  }
 

}
