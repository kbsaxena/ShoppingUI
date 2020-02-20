import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-validate-user',
  templateUrl: './validate-user.component.html',
  styleUrls: ['./validate-user.component.css']
})
export class ValidateUserComponent implements OnInit {
  isValidated: boolean;
  isProcessed: boolean;
  id: number;

  constructor(private route: ActivatedRoute, 
    private router: Router, private userService:UserService) { 
    this.isValidated = false;
    this.isProcessed = false;
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.userService.validateUser(this.id).subscribe(data => {
      this.isValidated = true;
      this.isProcessed = true;
   }, error => { 
      this.isValidated = false;
      this.isProcessed = true;
   });
  }
}
