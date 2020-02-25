import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user/user';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { CrosscomponentService } from '../services/user/crosscomponent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  
  constructor(private userService: UserService, private router: Router,private crossservice:CrosscomponentService) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("inside On Submit");
    console.log(this.user);
    this.userService.login(this.user).subscribe(data => {
      if(Boolean(data)){
        //alert("Successfully Logged In");
        console.log(data)
        this.crossservice.setName(data["username"]);
        this.crossservice.setUserData(data);
        this.router.navigate(['/home']);
      }
   }, error => console.log(error));
  }

}
