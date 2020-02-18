import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { User } from '../model/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  retypePassword: string;
  isRegistered: boolean;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
    this.user = new User();
    this.retypePassword = '';
    this.isRegistered = false;
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(data => {
       this.router.navigate(['/validate-registration']);
    }, error => { this.isRegistered = true; });
  }

  ngOnInit(): void {
  }

}
