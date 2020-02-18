import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-validate-registration',
  templateUrl: './validate-registration.component.html',
  styleUrls: ['./validate-registration.component.css']
})
export class ValidateRegistrationComponent implements OnInit {

  email: String;

  constructor(private service:UserService) {
  }

  ngOnInit(): void {
    this.email = this.service.email;
  }

}
