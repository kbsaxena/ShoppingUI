import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ValidateRegistrationComponent } from './validate-registration/validate-registration.component';
import { CrosscomponentService } from './services/user/crosscomponent.service';
import { ValidateUserComponent } from './validate-user/validate-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ValidateRegistrationComponent,
    ValidateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,CrosscomponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
