import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private registerUrl: string;
  private loginUrl: string;
  email: string;
 
  constructor(private http: HttpClient) {
    this.registerUrl = 'http://localhost:8080/register';
    this.loginUrl = 'http://localhost:8080/login';
  }
 
  public save(user: User) {
    this.email = user.email;
    return this.http.post(this.registerUrl, user);
  }

  public login(user: User) {
    const body = {username: user.username, password: user.password};
    return this.http.post(this.loginUrl, body);
  }

  public validateUser(id: number) {
    
  }
}