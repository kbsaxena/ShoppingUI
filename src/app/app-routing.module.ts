import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidateRegistrationComponent } from './validate-registration/validate-registration.component';
import { ValidateUserComponent } from './validate-user/validate-user.component';
import { AboutusComponent } from './account/aboutus/aboutus.component';
import { OrdersComponent } from './account/orders/orders.component';
import { WishlistComponent } from './account/wishlist/wishlist.component';
import { LogoutComponent } from './account/logout/logout.component';
import { ProfileComponent } from './account/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent , 
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'validate-registration', component: ValidateRegistrationComponent },
  { path: 'validate-user/:id', component: ValidateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
