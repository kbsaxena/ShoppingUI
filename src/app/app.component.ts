import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';
import { CrosscomponentService } from './services/user/crosscomponent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:string
  constructor(private userService: UserService,private crossservice:CrosscomponentService){
    this.userService = userService;
  }
  
  title = 'ShoppingUI';
  getName(){
    return this.crossservice.name;
  }
}
