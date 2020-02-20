import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-validate-registration',
  templateUrl: './validate-registration.component.html',
  styleUrls: ['./validate-registration.component.css']
})
export class ValidateRegistrationComponent implements OnInit {

  email: string;
  isClicked: boolean;
  isResendSuccessful: boolean;

  constructor(private route: ActivatedRoute, 
    private router: Router, private service:UserService) {
    this.isClicked = false;
  }

  ngOnInit(): void {
    this.email = this.service.email;
  }

  resendConfirmation() {
    this.service.resendConfirmation(this.email).subscribe(data => {
      this.isResendSuccessful = true;
    });
    this.isClicked = true;
  }
}
