import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { CrosscomponentService } from 'src/app/services/user/crosscomponent.service';
import { User } from 'src/app/model/user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterContentInit{
  
  user: User;
  data: any;
  editMode:boolean;

  constructor(private crossComponent: CrosscomponentService) { }

  ngOnInit(): void {
    this.data = this.crossComponent.data;
    this.user = new User();
    this.editMode = false;
  }

  onEdit(){
    this.editMode = true;
  }

  clear() {
    this.user = new User();
  }

  saveDetails(){
    
  }

  ngAfterContentInit(): void {
    if(this.data){
      this.user.username = this.data["username"];
      this.user.fullname = this.data["customer"]["fullName"];
      this.user.email = this.data["customer"]["email"];
      this.user.status = this.data["userState"];
      this.user.countryCode = this.data["customer"]["primaryPhoneNumber"]["countryCode"];
      this.user.mobileNumber = this.data["customer"]["primaryPhoneNumber"]["mobileNumber"];
      this.user.houseNumber = this.data["customer"]["address"][0]["houseNumber"];
      this.user.area = this.data["customer"]["address"][0]["area"];
      this.user.landmark = this.data["customer"]["address"][0]["landmark"];
      this.user.city = this.data["customer"]["address"][0]["city"];
      this.user.state = this.data["customer"]["address"][0]["state"];
      this.user.pincode = this.data["customer"]["address"][0]["pincode"];
      this.user.address = "House No. " + this.user.houseNumber + ", " + 
                           this.user.area + ", Landmark - " +
                           this.user.landmark + ", " +
                           this.user.city + ", " +
                           this.user.state + "-" +
                           this.user.pincode;
      this.user.dob = this.data["customer"]["dob"];
    }
  }
  
}
